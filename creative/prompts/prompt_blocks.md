---
id: prompt_blocks
title: "AI Prompt Blocks — Ancient Egyptian Style"
category: prompts
---

# AI Prompt Blocks — Ancient Egyptian Style

This document is a modular library of prompt fragments for AI image generation tools (Stable Diffusion, Midjourney, DALL-E, Flux, and similar). Each block is designed to be combined with others. Blocks are tested for specificity — they reference the canonical visual vocabulary of Egyptian art rather than vague genre labels.

**How to use this file:** Start with a Base Style Anchor, add a Figure Block, add a Deity or Scene Block as appropriate, and optionally append modifiers from other blocks. See composite recipe examples at the end.

---

## 1. Base Style Anchors

These fragments establish the fundamental visual register. Include at least one in every prompt.

**Block A — Canonical Flatness**
```
ancient Egyptian wall painting style, canonical composite pose, flat color fills,
bold black contour outline, no shading, no gradients, no western perspective,
hieroglyphic register composition
```

**Block B — Relief Carving**
```
ancient Egyptian limestone relief carving, sunk relief, bas-relief texture,
monochromatic stone tones, deeply incised outlines, shallow modeled surface,
New Kingdom temple wall style
```

**Block C — Papyrus Manuscript**
```
Egyptian papyrus manuscript illustration style, aged amber papyrus ground,
earthy ink tones, loose painterly line, vignette scene, Book of the Dead style,
hieroglyphic columns flanking image
```

**Block D — New Kingdom Tomb Painting**
```
New Kingdom Egyptian tomb painting, Theban necropolis style,
vivid polychrome palette, Egyptian blue and ochre, strong black outline,
flat figure fills, groundline composition, multi-register wall scene
```

**Block E — Amarna Style (deliberate deviation)**
```
Amarna Period Egyptian art style, elongated skulls, naturalistic informal pose,
rounded soft forms, Aten sun disk with rays ending in hands,
18th Dynasty, Tell el-Amarna aesthetic
```

**Block F — Late Period / Saite**
```
Late Period Egyptian art, Saite canon proportions, elongated slender figure,
21-square grid, high polish stone statue style, slight archaic smile,
26th Dynasty, deliberate archaism
```

**Block G — Ptolemaic Temple Style**
```
Ptolemaic Period Egyptian temple relief, dense hieroglyphic columns,
colossal scale figures, vivid paint traces on raised relief,
Greco-Egyptian synthesis, Dendera or Edfu temple style
```

**Block H — Painted Wooden Object**
```
ancient Egyptian painted wood, cartonnage or wooden coffin panel style,
dense iconographic program, protective deity figures, bands of text,
black and gold palette with red accents
```

---

## 2. Figure Prompt Blocks

### Standing Figure
```
standing figure in canonical Egyptian pose, strict profile head with frontal eye,
shoulders shown frontally, torso frontal, hips in profile, feet in profile on groundline,
arms at sides or one arm raised, 18-square canon proportions, no foreshortening
```

### Seated Figure
```
seated figure on cubic throne, hands flat on thighs, strict profile head,
frontal eye, shoulders frontal, feet flat on groundline, canonical throne proportions,
14-square seated canon, formal stiff posture
```

### Striding Figure
```
striding figure, left leg advanced, weight equally distributed, canonical composite pose,
profile head with frontal eye, frontal torso, profile feet on groundline,
formal stride, no dynamic lean or twist, Egyptian canon proportions
```

### Kneeling Figure
```
kneeling figure, one knee on ground, profile head, frontal torso,
arms raised in adoration or holding offerings, canonical proportion,
worshipper or subordinate pose, reverential context
```

### Offering Bearer
```
offering bearer figure, carrying tray of offerings at chest height,
profile pose, one arm raised, items depicted in x-ray view showing contents,
servants dress, white linen kilt, New Kingdom tomb painting style
```

### Scribe Figure
```
seated cross-legged scribe, papyrus roll across lap, stylus in hand,
profile head, eyes frontal, canonical pose, New Kingdom civil official dress,
white kilt, shaved head or short wig
```

---

## 3. Deity-Specific Prompt Blocks

### Ra (Sun God)
```
Ra, Egyptian god of the sun, falcon head, red and gold sun disk with uraeus,
divine gold skin, white linen kilt with gold trim, was scepter, ankh,
solar barque context, hieroglyphic cartouche, New Kingdom style
```

### Ra-Horakhty (Ra as Horizon Horus)
```
Ra-Horakhty, falcon-headed solar deity, double feather plume atop sun disk,
gold and lapis lazuli palette, striding figure, was scepter and ankh,
Theban New Kingdom style, solar hymn composition context
```

### Osiris (Lord of the Dead)
```
Osiris, Egyptian god of resurrection, mummiform standing figure, green or black skin,
white mummy wrappings, Atef crown (white crown flanked by ostrich feathers),
crook and flail crossed at chest, djed pillar background element,
Duat underworld context
```

### Isis (Mother Goddess)
```
Isis, Egyptian goddess of magic and motherhood, throne hieroglyph crown atop head
(or Hathor crown: horns + sun disk), white and turquoise garments, broad collar necklace,
arms spread wide as wings (in protective context) or arms extended holding ankh,
gold-yellow divine skin, New Kingdom style
```

### Anubis (God of Embalming)
```
Anubis, Egyptian jackal-headed god, jet black jackal head with pointed ears,
gold collar and earrings, white or red and gold kilt, holding crook or imiut fetish,
tending to a mummy on a funerary bier, canopic jars at foot,
weighing of the heart scene context, dark underworld palette
```

### Horus (Falcon God / Divine Kingship)
```
Horus, Egyptian falcon-headed god, falcon head with double crown or Double Pschent crown,
blue and gold striped nemes headcloth, divine gold skin, was scepter, ankh,
standing striding figure, formal royal presentation pose,
New Kingdom Theban style
```

### Thoth (God of Writing and Wisdom)
```
Thoth, Egyptian ibis-headed god of writing, long curved ibis bill,
white plumage head, white kilt, scribal palette and reed pen, papyrus scroll,
or holding was scepter and ankh, crescent moon and full moon crown,
scribal and judgment scene context, flat Egyptian palette
```

### Hathor (Goddess of Love, Music, Beauty)
```
Hathor, Egyptian goddess of love and beauty, fully human form or cow-headed,
horned sun disk crown, broad collar of turquoise and gold,
menat necklace, sistrum rattle, white linen sheath dress,
warm golden skin, New Kingdom Theban style
```

### Sekhmet (Goddess of War and Healing)
```
Sekhmet, Egyptian lioness-headed goddess of war and plague,
fierce lioness head, red garment (color of blood and desert),
sun disk with uraeus, was scepter, seated or standing,
intense expression, ochre and red palette, protective or destructive scene context
```

---

## 4. Scene Prompt Blocks

### Offering Scene
```
Egyptian offering scene, offering table heaped with bread loaves, haunches of meat,
jars of wine and oil, lotus flowers, the deceased seated or standing before the table,
offerings labeled in hieroglyphs, table shown in elevation (orthographic),
hetep di nesu formula text columns, New Kingdom tomb style
```

### Judgment Scene (Weighing of the Heart)
```
Egyptian judgment scene, Hall of Two Truths, Anubis tending balance scale,
heart of the deceased on one pan, feather of Ma'at on the other,
Thoth recording with stylus, the Devourer (Ammit, crocodile-lion-hippo composite) waiting,
the deceased led by hand, forty-two assessors seated in registers above,
Book of the Dead Papyrus of Ani style
```

### Battle Scene
```
Egyptian royal battle scene, pharaoh colossal in scale in war chariot,
bow drawn, enemies shattered at horses' hooves, fallen enemy figures small and chaotic,
Egyptian army in ordered registers below, hieroglyphic columns identifying pharaoh,
Ramesside style, Karnak pylon composition
```

### Funerary Scene
```
Egyptian funerary scene, the Opening of the Mouth ceremony,
sem priest in leopard-skin robe, mummy upright before tomb entrance,
canopic jars arranged before it, family members in white linen mourning,
incense burners, natron bowls, sacred implements on offering mat,
New Kingdom Theban necropolis style
```

### Temple Ritual Scene
```
Egyptian temple ritual scene, pharaoh presenting offerings to a seated deity,
incense burner in outstretched hands, pharaoh in white kilt and blue crown,
deity on throne with full divine regalia, flanking columns of protective text,
naos (sanctuary) architectural setting implied, Ptolemaic or New Kingdom style
```

---

## 5. Composite Recipe Examples

### Royal Portrait (Standing Pharaoh)
Combine: **Block D** + **Standing Figure** + **Horus block** (as the deity present) + royal regalia modifiers
```
New Kingdom Egyptian tomb painting, vivid polychrome palette, Egyptian blue and ochre,
strong black outline, flat figure fills, groundline composition —
pharaoh Ramesses II standing, striding figure, left leg advanced,
canonical composite pose, profile head with frontal eye, frontal torso, profile feet,
blue Khepresh war crown with uraeus, white kilt with gold apron, crook and flail,
cartouche inscribed above, Horus falcon behind, was scepter offered by falcon-headed deity,
no shading, no perspective, register composition
```

### Funerary Papyrus Scene (Judgment)
Combine: **Block C** + **Judgment Scene** + **Anubis block** + **Thoth block**
```
Egyptian papyrus manuscript illustration style, aged amber papyrus ground,
Book of the Dead style, hieroglyphic columns flanking image —
judgment scene, Hall of Two Truths, Anubis jackal-headed tending balance scale,
heart vs feather of Ma'at, Thoth ibis-headed recording with reed pen,
Ammit the devourer waiting, the deceased in white linen led forward,
flat Egyptian palette, bold black contour, no western shading
```

### Deity Shrine Painting (Isis)
Combine: **Block D** + **Isis block** + kneeling figure + offering scene elements
```
New Kingdom Egyptian tomb painting, Theban necropolis style, vivid polychrome palette —
Isis standing, fully human form, throne crown (hieroglyph of throne on head),
white sheath dress, broad collar of faience beads, arms extending forward holding ankh,
kneeling worshipper at smaller hierarchical scale before her,
lotus-topped offering table between them, protective text columns flanking,
flat color, bold outline, no shading or gradients
```

---

## 6. Tips on Weighting and Ordering

**Ordering matters.** Most AI tools weight earlier tokens more heavily. Structure prompts as:

1. **Style anchor** (establishes the visual regime)
2. **Primary subject** (the most important figure)
3. **Specific attributes** (crown, color, held objects)
4. **Scene context** (what is happening, what surrounds the figure)
5. **Technical negative prompt** (what to exclude)

**Weighting syntax (Stable Diffusion / AUTOMATIC1111):**
- Increase emphasis: `(canonical composite pose:1.4)`
- Decrease emphasis: `(western perspective:0.2)` *(better in negative prompt)*
- For Midjourney, use `::2` weight syntax: `flat color fills::2 Egyptian style::2`

**Avoid vague labels.** "Egyptian style" is not enough — it may invoke Hollywood film aesthetics, theme park Egypt, or Orientalist fantasy. Always append specific canonical attributes.

**Use negative prompts aggressively.** See [`negative_prompts.md`](./negative_prompts.md) for a full library. At minimum always include:
```
no 3D shading, no perspective, no western anatomy, no foreshortening,
no gradients, no photorealism, no anime, no medieval, no fantasy-generic
```
