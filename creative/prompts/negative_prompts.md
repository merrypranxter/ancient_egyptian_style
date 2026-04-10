---
id: negative_prompts
title: "Negative Prompts — Ancient Egyptian Style"
category: prompts
---

# Negative Prompts — Ancient Egyptian Style

Negative prompts are as important as positive prompts when generating authentic Egyptian imagery. The default tendencies of AI image models — trained predominantly on Western naturalistic art, photography, and contemporary illustration — pull generated images away from the Egyptian canon in predictable, correctable ways. This document catalogs those failure modes and provides targeted negative prompt strings to counteract them.

---

## 1. Core Style-Breaking Negatives

These are the most critical exclusions. Every Egyptian-style generation should include them.

**Why they break Egyptian style:** Western artistic tradition from the Renaissance onward is built on linear perspective, chiaroscuro (light-and-shadow modeling), naturalistic anatomy, and three-dimensional spatial illusion. These conventions are *structurally incompatible* with the Egyptian canon, which is built on flat contour, conceptual completeness, symbolic color, and hierarchical scale. Without these negatives, AI models default to their dominant training regime.

```
3D shading, shadows, cast shadows, chiaroscuro, light source modeling,
gradients, soft blending, atmospheric perspective, linear perspective,
foreshortening, depth of field, bokeh, photorealism, hyperrealistic,
naturalistic anatomy, western figure proportions, contrapposto pose,
dynamic motion blur, action photography style
```

---

## 2. Period Anachronism Negatives

**Why they break Egyptian style:** AI models associate "ancient" or "historical" with a broad range of non-Egyptian ancient traditions. "Ancient" alone may invoke Greco-Roman marble, Byzantine gold mosaics, or Iron Age Celtic metalwork. More specific mistakes include importing Roman fresco naturalism, Greek black-figure vase reductionism, or Near Eastern cuneiform-tablet aesthetics.

```
Greek art style, Roman art style, Greek mythology aesthetic, Roman fresco,
Byzantine mosaic style, Celtic knotwork, Norse art, Mesopotamian art,
Sumerian aesthetic, Chinese traditional painting, Japanese ukiyo-e,
Persian miniature, Islamic geometric pattern (as dominant style),
medieval European illuminated manuscript, Roman mosaic realism
```

**For New Kingdom specifically (suppress Amarna deviation unless intended):**
```
Amarna style, elongated skull, drooping belly, naturalistic informal pose,
Aten sun disk rays, Tell el-Amarna aesthetic
```

**For Amarna specifically (suppress classical canon if evoking Amarna):**
```
rigid formal pose, stiff canonical proportions, traditional Egyptian canon,
Ramesside style
```

---

## 3. Stylistic Anachronism Negatives

**Why they break Egyptian style:** Contemporary visual styles — anime, comic book superhero aesthetics, Art Nouveau, Art Deco (though related), Steampunk, Fantasy illustration, and Digital concept art defaults — are often applied by models when "stylized" or "ancient" prompts are given. Each imposes incompatible visual logic: anime uses exaggerated expressive features and round eyes, superhero art uses hypermasculine foreshortened anatomy, fantasy illustration uses dramatic lighting and painterly texture.

```
anime, manga, chibi, cartoon, western cartoon, comic book style,
superhero aesthetic, Disney style, Pixar style, DreamWorks style,
Art Nouveau (unless deliberately specified), Art Deco lettering,
steampunk, dieselpunk, solarpunk, biopunk, fantasy RPG art,
Dungeons and Dragons illustration style, Magic the Gathering card art,
concept art default style, digital painting default, cinematic key art,
film poster style, video game UI art
```

---

## 4. Composition Negatives

**Why they break Egyptian style:** AI models default to Western compositional rules — the rule of thirds with diagonal emphasis, centered symmetry for portraits, depth-suggesting S-curves, overlapping figures to imply foreground/background. Egyptian composition uses register bands, frontal symmetry around an axis, groundlines, and explicit hierarchical scale. Diagonal compositions, overlapping figure depth, and perspective vanishing points are all violations.

```
diagonal composition, rule of thirds, perspective vanishing point,
foreshortened architecture, overlapping figures for depth,
figures floating without groundline, isometric perspective,
random scatter layout, chaotic crowd composition,
vignette fade edges (except in papyrus contexts),
spotlight lighting on figure (implies 3D volume),
background landscape receding into distance,
naturalistic sky or atmospheric horizon
```

---

## 5. Iconographic Error Negatives

**Why they matter:** AI models may produce visually plausible but semantically wrong imagery — a pharaoh wearing the wrong crown, a deity holding another deity's attribute, a funerary object placed in a royal coronation context. These cannot always be corrected with style negatives; they require iconographic suppression.

**For royal figures (suppress divine attributes unless in divine-royal fusion):**
```
animal head on pharaoh, mummiform pose for living pharaoh,
funerary black skin on living figure, Osirian green on non-Osirian subject
```

**For funerary contexts (suppress royal conquest imagery):**
```
battle chariot, smiting scene, enemy figures, military regalia
```

**For deity figures (suppress inappropriate attributes):**
```
human head on Anubis, human head on Horus, human head on Thoth,
incorrect crown mixing (e.g., Atef crown on Horus, double plumes on Osiris)
```

---

## 6. Ready-to-Use Negative Prompt Strings

### Stable Diffusion / AUTOMATIC1111 — Universal Egyptian Negative
Use in the negative prompt field. Add to your UI's default negative prompt.

```
3d render, photorealistic, hyperrealistic, photographic, western perspective,
linear perspective, foreshortening, chiaroscuro, shading, shadows, gradients,
soft blending, depth of field, bokeh, naturalistic anatomy, contrapposto,
dynamic pose, motion blur, anime, manga, cartoon, comic book, Disney, Pixar,
superhero art, fantasy RPG art, medieval European art, Greek art style,
Roman art style, Byzantine mosaic, Celtic knotwork, Japanese art,
Chinese painting style, Art Nouveau, steampunk, concept art default,
floating figures, diagonal composition, perspective vanishing point,
atmospheric horizon, modern clothing, contemporary setting,
cross-section anatomical illustration, watercolor bleed
```

### Midjourney — `--no` Parameter String
Append to your Midjourney prompt with `--no`:

```
--no 3d shading shadows gradients perspective foreshortening photorealism
anime manga cartoon Disney comic book fantasy medieval Greek Roman
Byzantine steampunk naturalistic anatomy western composition diagonal layout
atmospheric perspective depth of field contemporary style
```

### DALL-E / GPT-Image — Instruction Phrase
DALL-E responds better to instruction-style negatives embedded in the prompt:

```
Do not use 3D shading, cast shadows, or gradients.
Do not apply western linear perspective or foreshortening.
Do not use anime, cartoon, or fantasy illustration styles.
Do not depict naturalistic western anatomy or contrapposto poses.
Do not include atmospheric sky, receding landscape, or depth-of-field blur.
Avoid Greek, Roman, Byzantine, or medieval European visual conventions.
```

### Flux / Flux.1 — Negative Guidance
Flux models respond well to direct style-negative phrasing:

```
western realism, photographic, 3d cg render, shaded volumes, perspective depth,
naturalistic figure, dynamic action pose, modern composition, fantasy default,
anime influenced, painterly texture default, soft lighting mood
```

---

## 7. Why Each Category Breaks Egyptian Style — Summary Table

| Negated element | Why it violates Egyptian canon |
|---|---|
| 3D shading / chiaroscuro | Egyptian form is defined by contour line, not by light-modeling volume |
| Cast shadows | Shadows imply a single light source and 3D space; Egyptian space is flat and timeless |
| Linear perspective | Egyptian spatial logic uses hierarchical scale and register bands, not vanishing points |
| Foreshortening | Every body part must be shown in its most informative aspect; foreshortening hides parts |
| Naturalistic anatomy | Canon proportions are mathematical, not observational; musculature follows convention |
| Contrapposto | The canonical pose is a formal, static, bilateral composite; weight shift implies transience |
| Anime/manga | Expressive eyes, speed lines, exaggerated features all violate the canon's timeless restraint |
| Fantasy RPG art | Dramatic lighting, dynamic action, invented iconography displace the strict symbolic system |
| Greek/Roman style | Naturalism and idealized 3D form are the structural opposite of Egyptian flatness |
| Byzantine | Gold ground and frontal icons are superficially similar but use perspective modeling and differ in every symbol |
| Medieval European | Completely different symbolic register, no shared iconographic vocabulary |
| Atmospheric horizon | Egyptian backgrounds are flat colored bands or absent; no sky gradient, no landscape recession |
| Floating figures | Egyptian figures always stand on explicit groundlines within registers |
| Diagonal composition | Egyptian formal compositions are register-based and axis-symmetrical, not diagonally dynamic |
