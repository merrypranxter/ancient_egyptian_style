#!/usr/bin/env node
/**
 * tools/build_index.js
 *
 * Scans all YAML entry files under db/entries/** and emits JSON index files
 * under db/indices/:
 *
 *   db/indices/all_entries.json      - Array of every entry (full objects)
 *   db/indices/by_type.json          - Entries grouped by `type` field
 *   db/indices/by_period.json        - Entries grouped by tags.period values
 *   db/indices/by_motif_type.json    - Entries grouped by tags.motif_type values
 *   db/indices/id_map.json           - Map of id → entry (for fast lookup)
 *   db/indices/compat_graph.json     - pairs_with / avoid_with adjacency list
 *
 * Usage:
 *   node tools/build_index.js
 *   node tools/build_index.js --verbose
 *
 * Requirements:
 *   npm install js-yaml   (or: yarn add js-yaml)
 *
 * Node.js >= 14 required (uses fs.promises, optional chaining).
 */

"use strict";

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Dependency check
// ---------------------------------------------------------------------------
let yaml;
try {
  yaml = require("js-yaml");
} catch (e) {
  console.error(
    "\nError: js-yaml is not installed.\n" +
    "Run: npm install js-yaml\n" +
    "Then retry: node tools/build_index.js\n"
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const REPO_ROOT = path.resolve(__dirname, "..");
const ENTRIES_DIR = path.join(REPO_ROOT, "db", "entries");
const INDICES_DIR = path.join(REPO_ROOT, "db", "indices");
const VERBOSE = process.argv.includes("--verbose");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function log(...args) {
  if (VERBOSE) console.log(...args);
}

/** Recursively collect all *.yaml and *.yml files under a directory. */
function collectYamlFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectYamlFiles(fullPath));
    } else if (entry.isFile() && /\.(yaml|yml)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

/** Parse a YAML file; return null and log on error. */
function parseYaml(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const doc = yaml.load(raw);
    if (doc && typeof doc === "object") {
      // Attach the source file path for debugging
      doc.__source = path.relative(REPO_ROOT, filePath);
    }
    return doc;
  } catch (err) {
    console.warn(`  [WARN] Failed to parse ${filePath}: ${err.message}`);
    return null;
  }
}

/** Group an array of entries by values of a given tag axis (array field). */
function groupByTagAxis(entries, axis) {
  const grouped = {};
  for (const entry of entries) {
    const values = entry.tags?.[axis];
    if (!Array.isArray(values) || values.length === 0) {
      (grouped["_untagged"] = grouped["_untagged"] || []).push(entry.id);
      continue;
    }
    for (const val of values) {
      (grouped[val] = grouped[val] || []).push(entry.id);
    }
  }
  return grouped;
}

/** Write a JSON file, creating the directory if needed. */
function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  log(`  Wrote ${path.relative(REPO_ROOT, filePath)}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  console.log("build_index.js — scanning entries…");

  // 1. Collect all YAML files
  const yamlFiles = collectYamlFiles(ENTRIES_DIR);
  console.log(`  Found ${yamlFiles.length} YAML file(s) under db/entries/`);

  // 2. Parse all files; skip schema files and failed parses
  const entries = [];
  for (const file of yamlFiles) {
    const doc = parseYaml(file);
    if (!doc) continue;
    if (!doc.id || !doc.type) {
      log(`  [SKIP] ${path.relative(REPO_ROOT, file)} — missing id or type`);
      continue;
    }
    entries.push(doc);
  }
  console.log(`  Parsed ${entries.length} valid entr${entries.length === 1 ? "y" : "ies"}`);

  // 3. Sort by id for deterministic output
  entries.sort((a, b) => a.id.localeCompare(b.id));

  // 4. Build indices

  // 4a. all_entries.json
  writeJson(
    path.join(INDICES_DIR, "all_entries.json"),
    entries
  );

  // 4b. id_map.json
  const idMap = {};
  for (const entry of entries) {
    idMap[entry.id] = entry;
  }
  writeJson(path.join(INDICES_DIR, "id_map.json"), idMap);

  // 4c. by_type.json
  const byType = {};
  for (const entry of entries) {
    (byType[entry.type] = byType[entry.type] || []).push(entry.id);
  }
  writeJson(path.join(INDICES_DIR, "by_type.json"), byType);

  // 4d. by_period.json
  writeJson(
    path.join(INDICES_DIR, "by_period.json"),
    groupByTagAxis(entries, "period")
  );

  // 4e. by_motif_type.json
  writeJson(
    path.join(INDICES_DIR, "by_motif_type.json"),
    groupByTagAxis(entries, "motif_type")
  );

  // 4f. compat_graph.json
  const compatGraph = {};
  for (const entry of entries) {
    const pairsWith = entry.compat?.pairs_with ?? [];
    const avoidWith = entry.compat?.avoid_with ?? [];
    if (pairsWith.length > 0 || avoidWith.length > 0) {
      compatGraph[entry.id] = {
        pairs_with: pairsWith,
        avoid_with: avoidWith,
      };
    }
  }
  writeJson(path.join(INDICES_DIR, "compat_graph.json"), compatGraph);

  // 5. Summary
  const typeCount = Object.entries(byType)
    .map(([type, ids]) => `${type}: ${ids.length}`)
    .join(", ");
  console.log(`\nIndex build complete.`);
  console.log(`  Entry types: ${typeCount}`);
  console.log(`  Index files written to db/indices/`);
}

main();
