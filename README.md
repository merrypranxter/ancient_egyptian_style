# Ancient Egyptian Style Database

A curated, **YAML-first** style database covering Ancient Egyptian art aesthetics,
symbols, motifs, composition rules, materials, and modern remix pipelines.

Designed for use in **AI generative art**, **shader art**, and **JavaScript tooling**.
Emphasises historical grounding with a default stance of **"historical-first, remix as overlay"** —
modern remix elements sit on top of authentic compositional and material rules,
never replacing the historical foundation.

---

## What This Database Is

A machine-readable (YAML), human-readable reference of visual design primitives from
ancient Egyptian art:

- **Styles** — tomb painting, temple relief, papyrus scroll, Amarna, Ptolemaic
- **Symbols & Motifs** — ankh, Eye of Horus, scarab, djed pillar, cartouche, and more
- **Composition rules** — register system, scale hierarchy, bilateral symmetry, vignettes
- **Canonical poses** — deity holding, pharaoh regalia, offering bearer, scribe
- **Typography / hieroglyphic rules** — do/avoid guidance for glyph-inspired marks
- **Materials & textures** — mineral pigments, stone, gold, faience, papyrus
- **Colour systems** — solar gold, tomb ochre, lapis-turquoise, monochrome ink
- **Print artifacts** — papyrus fiber, ink bleed, pigment flake, dust patina
- **Rendering shaders** — relief shading, edge ink, palette map
- **Modern remix** — techno-hieratic poster, museum label, street poster, digital glitch
- **Pipelines** — step-by-step AI generation, 3D-to-relief, remix overlay workflows

All entries use the `egy.` ID prefix and the `2026-04-10` initial creation date.

---

## Folder Structure

```
ancient_egyptian_style/
├── README.md                              # This file
├── db/
│   ├── _schema/
│   │   ├── tagsets.yaml                   # All tag axes and allowed values
│   │   └── entry.schema.yaml             # Universal entry schema definition
│   ├── entries/
│   │   ├── styles/                        # Visual style entries
│   │   ├── symbols_motifs/               # Symbol and motif entries
│   │   ├── composition/                  # Compositional rule entries
│   │   ├── canonical_poses/              # Figure pose entries
│   │   ├── typography_hieroglyphic_rules/ # Glyph-inspired mark guidelines
│   │   ├── materials_textures/           # Material and texture entries
│   │   ├── color_systems/                # Colour palette entries
│   │   ├── print_artifacts/              # Aging and degradation artifacts
│   │   ├── rendering_shader/             # Shader and rendering technique entries
│   │   ├── remix_modern/                 # Modern remix overlay entries
│   │   ├── pipelines/                    # End-to-end workflow entries
│   │   └── references/                   # Academic and source references
│   └── indices/                          # Generated JSON index files (build_index.js output)
└── tools/
    └── build_index.js                    # Index builder script
```

---

## How to Use the Database

### In AI Image Generation

Each entry includes a `prompt_fragment` field. Combine fragments from multiple entries:

```
# Example: New Kingdom tomb painting of a deity
prompt = [
  entry("egy.tomb_painting_style").prompt_fragment,
  entry("egy.register_composition").prompt_fragment,
  entry("egy.deity_holding_pose").prompt_fragment,
  entry("egy.ankh").prompt_fragment,
  "solemn funerary atmosphere"
].join(", ")

negative_prompt = "photorealistic, shadow gradients, perspective, 3D, medieval,
Western decorative scrollwork, purple, magenta, gradient fills"
```

See `db/entries/pipelines/ai_tomb_painting_pipeline.yaml` for the full step-by-step workflow.

### In Shader / GLSL Art

Entries in `db/entries/rendering_shader/` include `shader_code_reference` pseudocode blocks
for GLSL implementation. Key shaders:

- `egy.relief_shading_shader` — bas-relief depth shading
- `egy.edge_ink_shader` — contour extraction / ink outline pass
- `egy.palette_map_shader` — 6-colour mineral pigment palette quantisation

### In JavaScript Tooling

Build the JSON indices first:

```bash
npm install js-yaml   # one-time setup
node tools/build_index.js
```

Then load the indices:

```js
const allEntries = require('./db/indices/all_entries.json');
const idMap      = require('./db/indices/id_map.json');

// Get an entry by ID
const ankh = idMap['egy.ankh'];

// Get all symbol/motif entries
const symbols = require('./db/indices/by_type.json').symbol_motif;

// Find New Kingdom entries
const newKingdom = require('./db/indices/by_period.json').new_kingdom;
```

---

## How to Add a New Entry

1. Choose the correct subdirectory under `db/entries/`.
2. Create a new `.yaml` file named `{short_id}.yaml` (without the `egy.` prefix).
3. Follow the schema in `db/_schema/entry.schema.yaml`.
4. Use only tag values from `db/_schema/tagsets.yaml`.
5. Set `id: egy.{your_short_id}` and `created_at: "YYYY-MM-DD"`.
6. Run `node tools/build_index.js` to regenerate the indices.

**Minimum required fields:** `id`, `type`, `name`, `summary`, `description`, `tags`, `version`, `created_at`.

**Example skeleton:**

```yaml
id: egy.my_new_entry
type: symbol_motif
name: "My New Entry"
summary: "One or two sentence summary."
description: >
  Detailed historical and visual description.
tags:
  period: [new_kingdom]
  medium: [tomb_painting]
  motif_type: [deity]
  mood: [solemn]
version: "1.0"
created_at: "2026-04-10"
```

---

## Respectful Use and the Hieroglyphic Question

**Please read this before adding any text-like marks to generated artwork.**

Egyptian hieroglyphic script is a real, historically grounded writing system — not
a decorative font. Mixing signs randomly creates nonsensical or potentially offensive
combinations. This database takes the following stance:

### ✅ Do

- Use **glyph-inspired abstract marks** as visual texture — forms influenced by the
  hieroglyphic tradition (geometric shapes, profile animal silhouettes, eye forms)
  but not attempting to replicate readable text.
- Reference the Gardiner sign list for visual inspiration, not linguistic use.
- Use **empty cartouches** or cartouches with clearly invented abstract interior signs.
- **Label your artwork clearly** as contemporary artistic invention, not historical reproduction.
- If you need real hieroglyphic text, consult a trained Egyptologist and cite your source.

### ❌ Avoid

- Combining real hieroglyphic signs randomly — this may produce offensive or nonsensical Egyptian text.
- Presenting invented marks as authentic ancient inscriptions.
- Reproducing sacred funerary texts (Pyramid Texts, Book of the Dead spells) as decoration.
- Claiming that AI-generated glyph sequences are authentic Egyptian writing.

See `db/entries/typography_hieroglyphic_rules/` for detailed do/avoid guidance.

---

## Example Pipelines and Prompt Fragments

### Quick: Papyrus Funerary Vignette

```
ancient Egyptian papyrus scroll painting, Book of the Dead vignette,
warm amber papyrus ground, fine ink line, hieroglyphic columns,
weighing of the heart scene, New Kingdom funerary art, solemn and mythic.

Negative: photorealistic, cold white, gradient, 3D, cast shadow, medieval.
```

### Quick: Temple Relief Facade

```
ancient Egyptian temple relief carving, raised relief painted stone,
directional side-lighting, flat pigment fills, monumental register composition,
Ptolemaic temple style, weathered limestone, regal and mythic, gold and lapis.

Negative: soft shadows, perspective, European architecture, smooth surfaces.
```

### Quick: Modern Remix (Street Poster)

```
Egyptian screen print poster remix, 2-colour flat black and gold ochre,
risograph grain texture, canonical profile figure, register composition,
bold condensed type overlay, graphic and monumental.
```

### Full Pipelines

- `egy.ai_tomb_painting_pipeline` — AI generation → palette map → edge ink → aging
- `egy.shader_relief_render_pipeline` — 3D render → depth → relief shader → colour fills
- `egy.remix_modern_overlay_pipeline` — Historical base → remix layer selection → overlay

---

## Entry Count

| Category | Count |
|---|---|
| Styles | 6 |
| Symbols & Motifs | 12 |
| Composition | 6 |
| Canonical Poses | 4 |
| Typography / Hieroglyphic Rules | 2 |
| Materials & Textures | 4 |
| Colour Systems | 4 |
| Print Artifacts | 4 |
| Rendering Shaders | 3 |
| Remix Modern | 4 |
| Pipelines | 3 |
| References | 1 |
| **Total** | **53** |

---

## Licence

Content in this database is released under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
The historical content draws on publicly documented scholarship; see `db/entries/references/academic_core.yaml` for citations.

---

## Contributing

PRs welcome. Please follow the schema and respectful use guidelines above.
When adding entries involving sacred symbols or funerary texts, include the relevant
`constraints.avoid` guidance.
