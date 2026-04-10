# Ancient Egyptian Art Style — Comprehensive Reference Database

> A structured, research-grade knowledge repository for Ancient Egyptian visual culture (Predynastic through Ptolemaic periods, with emphasis on canonical New Kingdom conventions),
> designed for artists, researchers, AI practitioners, shader developers, generative art systems,
> and anyone seeking dense, actionable style knowledge.

---

## What This Is

This repository is a **comprehensive reference database** for the *Ancient Egyptian art style* as a visual system: its canon of proportion, figure construction rules, compositional conventions, symbolic color use, motif vocabulary, material constraints (paint, relief, papyrus), and the stylization logic that makes it immediately recognizable.

It is built for **working use**:
- Prompt engineering / conditioning for AI image generation
- Procedural and shader-based stylization (GLSL, p5.js, canvas)
- Concept art + illustration style anchoring
- Curriculum / reference for studying canonical conventions

---

## How To Use

### For generative art + shaders
Start with:
- `MOVEMENT_PRIMER.md` (historical arc + what makes it “Egyptian”)
- `data/style_canon.json` (machine-readable rules + tags)
- `data/motifs.json` and `data/palettes.json` (tokens you can sample)

Then use the `visual/` directory for ready-to-use palettes and motif packs.

### For AI prompt building
Use:
- `creative/prompts/prompt_blocks.md`
- `creative/prompts/negative_prompts.md`
- `metadata/taxonomies/ai_tags.json`

---

## Repository Structure

```
ancient_egyptian_style/
│
├── README.md
├── MOVEMENT_PRIMER.md
│
├── core/
│   ├── canon/
│   │   ├── figure_construction.md
│   │   ├── proportion_and_grid.md
│   │   ├── perspective_and_space.md
│   │   └── line_and_finish.md
│   └── iconography/
│       ├── deities_and_attributes.md
│       ├── symbols_and_motifs.md
│       └── writing_and_cartouches.md
│
├── data/
│   ├── style_canon.json
│   ├── motifs.json
│   ├── palettes.json
│   ├── composition_strategies.json
│   └── materials_and_techniques.json
│
├── creative/
│   ├── prompts/
│   │   ├── prompt_blocks.md
│   │   ├── negative_prompts.md
│   │   └── parameter_recipes.json
│   └── recipes/
│       └── scene_blueprints.md
│
├── metadata/
│   ├── schemas/
│   │   ├── style_canon.schema.json
│   │   ├── motifs.schema.json
│   │   ├── palettes.schema.json
│   │   └── composition.schema.json
│   └── taxonomies/
│       ├── ai_tags.json
│       └── controlled_vocabulary.json
│
└── visual/
    └── palettes/
        ├── new_kingdom_wall_painting.json
        └── lapis_malachite_ochre.json
```

---

## Notes on Scope / Accuracy

Ancient Egyptian art spans millennia and multiple regional workshops. This database prioritizes:
- **canonical conventions** most widely recognized as “Ancient Egyptian style”
- **visual rules** that matter for generation (silhouette, pose grammar, color semantics)

Where relevant, files call out **period variation** (Old Kingdom vs New Kingdom vs Late Period) so generators can intentionally “lock” to a sub-style.

---

## Contributing

- Prefer structured additions via JSON in `data/`.
- Validate data against `metadata/schemas/`.
- Keep every concept *actionable* (what to draw, how to draw it, what to avoid).