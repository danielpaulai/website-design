---
name: seedance-loop-prompt
description: Use when generating a Seedance 2 video prompt for a seamless looping background video. Trigger when the user describes a product, scene, or concept for a website background loop, mentions Seedance, asks for a looping video prompt, background video, or provides a product with headlines for a cinematic background. Also trigger on phrases like "loop video", "website background video", "product loop", "endless loop video", or any visual concept intended for continuous playback on a webpage.
---

# Seedance Loop Prompt Builder

Generate hyper-detailed, structured video prompts for Seedance 2 that produce seamless looping background videos. Forces exhaustive specificity on camera, lighting, timing, text choreography, and loop mechanics — the details humans leave vague.

## Operating principle

A great Seedance prompt is not a description — it is a **shooting script written by a cinematographer**. It tells the model what lens, what light, what frame rate, what stock, what beat, what motion curve, what surface physics, what atmosphere, and exactly how the final frame becomes the first frame again. Every word earns its place. Every vague adjective ("nice", "cool", "beautiful") is replaced with a concrete cinematographic decision.

The prompt is treated as a **technical spec sheet, not creative writing**. Numbers beat adjectives. References beat moods. Beats beat vibes.

## Input expectations

**Required:**
- Product or subject (what's on screen)

**Optional (infer if missing — never block on these):**
- Brand or company name
- Headline / tagline / overlay text
- Loop duration (default: 5–7 seconds)
- Camera direction or movement style
- Lighting mood
- Color palette
- Aspect ratio (default: 16:9 for hero, 21:9 for cinematic banner, 9:16 for mobile/vertical)
- Reference films, directors, or brand campaigns
- Audio intent (silent loop vs. paired with score — affects pacing)

## Confidence gate

- Has product/subject → generate immediately
- Missing product/subject → ask ONE focused question, then generate
- Never over-interrogate. Make creative decisions where the user hasn't specified.

## Pre-flight reasoning protocol

Before writing a single word of the prompt, work through these in order. Surface the conclusions in a short "Creative direction" preamble so the user can redirect before the prompt is committed to:

1. **Subject taxonomy** — What product family is this? (See Direction inference table.)
2. **Loop topology** — Which of the five loop classes fits best? (See Loop topology classifier.)
3. **Genre anchor** — Pick ONE genre lane: luxury cinema / tech-minimal / editorial fashion / gourmet sensory / abstract motion / documentary-real / surreal-poetic. This locks color science, lens choice, and pacing.
4. **Reference triangulation** — Name 1–3 specific references (DP, film, ad campaign, brand) that anchor the look. Never use vague references like "Apple-style" — name the specific Apple film (e.g. "Shot on iPhone — *Midnight*" by Damien Chazelle, 2020).
5. **Hero moment** — In a 6-second loop, which 1.5-second window is the "hero beat"? The rest of the loop serves it.
6. **Loop-point engineering** — Decide BEFORE writing the prompt how frame N matches frame 0. This is non-negotiable.

## Loop topology classifier

Every seamless loop belongs to one of these five classes. Pick deliberately — mixing them produces visible seams.

| Class | Mechanic | Best for | Example |
|---|---|---|---|
| **Rotational** | Subject completes exactly 360° (or 180° with mirror symmetry) | Products, vehicles, jewelry | Watch on turntable, full orbit |
| **Breathing** | Scene scales/pulses in–out around a neutral state | Abstract, brand, atmospheric | Particle cloud expanding then contracting |
| **Particle-cycle** | Particles flow off-frame and replacement particles enter at opposite edge | Liquid, smoke, data, snow | Steam rising; cyan data ribbons |
| **Palindrome** | Motion plays forward then reverses; cut at midpoint | Materials, fabric, soft motion | Silk unfurling and re-furling |
| **Masked-transition** | Visible element (subject, light beam, dust burst) wipes across frame and resets state behind it | Product reveals, hero shots | Light streak passes; product re-assembled |

State the chosen class explicitly inside the prompt's loop block.

## Direction inference

When the user doesn't specify a loop direction, infer from the product type:

| Product Type | Default Direction | Why |
|---|---|---|
| Mechanical / tech / electronics | Deconstruction reveal | Shows engineering, internals, precision |
| Vehicles / transportation | Motion flythrough or speed orbit | Emphasizes movement and power |
| Fashion / wearables / accessories | Slow orbit with material/texture focus | Highlights craft and surface detail |
| Food / beverage | Pour, swirl, steam, or ingredient drop | Captures sensory appeal |
| Software / SaaS / digital tools | Abstract data flow or UI parallax | Conveys system intelligence |
| Beauty / skincare / cosmetics | Macro texture reveal with light play | Premium tactile feel |
| Architecture / real estate / interiors | Slow dolly through space | Spatial storytelling |
| Lifestyle / wellness / health | Ambient drift with soft parallax | Calm, aspirational tone |
| Furniture / homeware | 360° turntable or rotating pedestal | Form-first product showcase |
| Jewelry / luxury / watches | Macro orbit with caustic light | Precision and prestige |
| Abstract / brand / no product | Generative geometry or fluid morph | Pure mood and identity |
| Pharmaceuticals / supplements | Capsule dissolve or molecular bloom | Efficacy + science cue |
| Sports / fitness / athletics | Hero rotation with motion-trail energy | Power and dynamism |
| Spirits / wine / cocktails | Pour-and-splash with caustic refraction | Liquid as luxury object |

## The 12-block prompt architecture

Every Seedance 2 prompt MUST contain all twelve blocks in this exact order. Skip none. If the user gave nothing for a block, fill it with a deliberate creative decision (and note it in the breakdown so they can override).

1. **Genre anchor** — single phrase that locks tone (e.g. *luxury cinema, tech-minimal, editorial fashion*).
2. **Scene** — subject + environment + framing (close-up, medium, wide, macro).
3. **Subject anatomy** — exhaustive physical description: form, finish, micro-detail, scale.
4. **Camera** — lens (mm), aperture (T-stop or f-stop), movement type, movement speed, focus behavior, frame rate.
5. **Lighting** — key direction, key quality, color temperature (Kelvin), fill ratio, rim/back, practicals, contrast.
6. **Color science** — film stock or LUT reference + 3–5 named tones with hex codes.
7. **Material & physics** — BRDF cues (matte, satin, specular, anisotropic, subsurface scattering), material weight, gravity behavior.
8. **Atmospheric layer** — haze, particulate, lens flare, gate weave, grain stock and grain size.
9. **Timing** — total duration in seconds + ≥3 named beats with timestamps.
10. **Text choreography** — overlay copy, font, weight, tracking, position, in/hold/out animation with timing. Omit entire block if no text.
11. **Loop mechanics** — explicit topology class + literal sentence describing how the last frame matches the first.
12. **Negative prompts** — exhaustive exclusion list (see taxonomy).

## Camera language library

**Lens choice by intent:**
- 14–24mm — environmental, epic scale, architecture, slight distortion, immersive
- 35mm — documentary-real, natural human eye, environmental product
- 50mm — neutral, editorial, balanced compression
- 85mm — flattering portrait, isolated subject, luxury product hero
- 100–180mm macro — texture, detail, jewelry, food, beauty
- Anamorphic 1.8x or 2x — cinematic flare, oval bokeh, 2.39:1 frame, prestige
- Tilt-shift — miniature effect, architectural, deliberate plane manipulation

**Movement vocabulary (use the precise term):**
- *Dolly in / out* — physical track, parallax through depth
- *Push / pull* — subtler version of dolly, psychological intensify/release
- *Truck* — lateral track, camera moves left/right while staying parallel to subject
- *Pan / tilt* — camera rotates on a fixed point
- *Crane / jib* — vertical sweep
- *Orbit / arc* — camera circles subject (specify degrees and seconds-per-revolution)
- *Roll* — camera rotates on its lens axis
- *Whip* — fast pan with motion blur
- *Handheld* — operator presence, micro-shake
- *Steadicam float* — gliding, organic, weightless
- *Drone glide* — slow forward/upward, smooth on all axes
- *Probe-lens dive* — Laowa-style macro intrusion through small spaces
- *Snorricam / body-mount* — locked to subject
- *Bullet-time freeze* — multi-camera array feel, time slows or stops

**Movement speed must be numeric or named:**
- "60° per second" / "8 seconds per full orbit" / "0.3 m/s push-in" / "imperceptibly slow drift"

**Focus behavior:**
- Locked focus / rack focus / focus pulls (start→end with subject) / focus breathing / split diopter / shallow f/1.4 / deep focus f/8

**Frame rate intent:**
- 24fps — cinematic standard, 180° shutter (motion blur natural)
- 30fps — broadcast, slightly more "real"
- 48–60fps — smooth, soap-opera or sports feel
- 120–240fps — slow-motion intent, freezes detail

## Lighting language library

**Setups by mood (name the setup explicitly):**
- *Rembrandt* — single key at 45° camera-side, fill at 1:8, classic portrait
- *Butterfly / paramount* — key directly above and slightly forward, beauty standard
- *Split lighting* — key at 90° side, half face/subject in shadow, drama
- *Loop lighting* — key at 30–45°, creates loop shadow under nose
- *Hard rim / kicker* — single backlight, silhouettes subject, premium product cue
- *Motivated practical* — visible source in frame is the key (lamp, neon, screen, candle)
- *Soft top-down softbox* — overcast feel, e-commerce default, no shadow drama
- *Ring light* — even circular catchlight, beauty/digital
- *Chiaroscuro* — deep shadows, single light, Caravaggio reference
- *High-key* — wash of light, minimal shadow, bright editorial
- *Low-key* — predominantly shadow, single bright accent, moody
- *Day-for-night* — blue grade over daylight footage, surreal
- *Magic hour / golden hour* — 3200K key from low angle, long shadows
- *Blue hour* — 6500K ambient, deep blue sky, neon practicals
- *Volumetric god rays* — visible light shafts through atmosphere

**Color temperature:**
- 2700K — candle, very warm
- 3200K — tungsten, warm
- 4300K — neutral warm
- 5600K — daylight
- 6500K — overcast
- 10000K — deep blue, cold
- *Mixed temperature* — name the contrast (e.g. "5600K key, 2700K practicals in background — warm/cool split")

**Quality descriptors:**
- Hard / soft-diffused / specular / volumetric / dappled / fractal-broken (window blinds, foliage)

**Contrast ratios (key:fill):**
- 1:1 — flat, beauty
- 2:1 — gentle
- 4:1 — standard cinema
- 8:1 — dramatic
- 16:1+ — chiaroscuro

## Color science library

**Film stock / LUT references (anchor the grade with a real name):**
- *Kodak Vision3 250D / 500T* — modern cinema, natural skin
- *Kodak Portra 400* — soft warm pastels, fashion editorial
- *Kodak Ektar 100* — saturated, high-contrast, landscapes
- *Fuji Eterna 250D* — desaturated cool, *Skyfall*-era
- *Fuji Pro 400H* — pastel cyan-leaning, wedding/fashion
- *Cinestill 800T* — tungsten-balanced, halated highlights, neon nights
- *ARRI K1S1* — modern digital cinema standard
- *Teal & orange* — Hollywood action default (pushing skin warm, shadows cool)
- *Bleach bypass* — desaturated, high contrast, *Saving Private Ryan*
- *Day-for-night blue* — deep navy shadow, silver moonlight
- *Sodium-vapor amber* — urban night, single-hue
- *Technicolor 3-strip* — saturated reds/cyans/yellows, mid-century

**Palette templates (always specify 3–5 tones with hex):**
- *Apple cinematic* — `#000000` true black, `#1A1A1A` charcoal, `#F5F5F7` paper white, `#86868B` mid-grey, `#0071E3` accent blue
- *Rolex luxury* — `#0F1419` deep navy, `#C9A961` champagne gold, `#1F2A3D` midnight blue, `#E8DCC4` ivory, `#3A2E1F` bronze
- *Tesla minimal* — `#000000`, `#FFFFFF`, `#CC0000` brand red, `#737373` aluminum
- *Aesop botanical* — `#3D3D2E` olive, `#A89B7C` linen, `#6B5D45` walnut, `#D4CFC0` parchment
- *Cyberpunk neon* — `#0A0E27` ink, `#FF006E` magenta, `#00F5FF` cyan, `#8338EC` violet, `#FFBE0B` amber
- *Editorial pastel* — `#F4E4DA` shell, `#E8B4B8` rose, `#A4C3B2` sage, `#6B9080` deep sage

## Material & physics rendering

Always describe material in BRDF (bidirectional reflectance) terms — the model knows these:
- *Matte / Lambertian* — flat, even diffusion, no highlight
- *Satin / soft specular* — gentle highlight roll-off
- *Specular / mirror* — sharp reflection, high gloss
- *Anisotropic* — directional reflection (brushed metal, hair, vinyl record grooves)
- *Subsurface scattering* — light penetrates and scatters (skin, wax, milk, jade, leaves backlit)
- *Translucent* — light passes with diffusion (frosted glass, paper)
- *Refractive* — bends light (water, crystal, lens)
- *Iridescent / thin-film* — color shifts with angle (oil slick, soap bubble, beetle wings)
- *Retroreflective* — bounces light back to source (road signs, eye shine)

For physics behavior, specify gravity, viscosity, and momentum:
- "Liquid pours at 0.5x real-time, surface tension forms a Worthington jet on impact"
- "Components float in zero-gravity, subtle 3° rotation per second around their own centers"
- "Fabric falls under 1g with 200gsm silk drape behavior, 24fps captured at 120fps and conformed"

## Atmospheric & post-processing layers

Always include at least two atmospheric layers — they are what separate cinematic from generic:

- **Particulate** — dust motes, pollen, water vapor, pollen, sparks, cigarette smoke (specify density: sparse / moderate / dense)
- **Volumetric** — visible light shafts, god rays, fog banks, haze depth
- **Lens artifacts** — anamorphic horizontal flare, ghosting, bokeh shape (circular, octagonal, hexagonal, oval), chromatic aberration on edges, vignette strength
- **Film grain** — name the stock (Kodak 5219 grain, 35mm grain medium), grain size (fine / medium / coarse)
- **Gate weave / instability** — slight frame-edge wobble for shot-on-film realism
- **Halation** — warm orange bleed around bright highlights (Cinestill signature)
- **Bloom** — soft light bleed around brights, separate from halation

## Subject anatomy templates

When describing the subject, hit at minimum:
- **Macro form** — overall geometry, silhouette
- **Material breakdown** — every distinct surface and its BRDF
- **Micro-detail** — engraving, weave, grain, polish marks, condensation
- **Scale signal** — what makes the eye understand size (background reference, depth-of-field)
- **Imperfection / authenticity cue** — fingerprint, dust, patina, water bead — never sterile-CGI

## Text choreography (when overlay copy is provided)

- **Font feel** — geometric sans (Inter, Söhne), editorial serif (GT Sectra, Tiempos), mono (JetBrains, Söhne Mono), condensed display (BC Hairline, Druk), handwritten script
- **Weight** — thin / regular / medium / bold / black
- **Tracking** — tight (-20) for display, wide (+120) for luxury caps
- **Size as % of frame height** — e.g. "12% of frame height"
- **Position** — centered / lower-third / upper-left / kinetic-following-subject / cropped-edge
- **Animation in** — fade / slide / type-on / mask-reveal / character-by-character / morph-from-shape (specify duration in seconds)
- **Hold duration**
- **Animation out** — MUST complete before frame ~90% of total duration
- **Color & treatment** — solid / outlined / gradient / blended / drop-shadow

If user did NOT provide text, omit the entire block — never invent overlay copy.

## Loop mechanics rules

- Last frame MUST visually match first frame in subject position, lighting angle, motion vector, and atmospheric state
- State the topology class name in-prompt (rotational / breathing / particle-cycle / palindrome / masked-transition)
- Prefer cyclical motion (orbit, drift, pulse, particle flow) over linear motion
- Reserve the final 0.3–0.5s for loop-resolution easing
- Text overlays MUST fade out before the loop point — never pop
- For mechanical reveals: subject should be fully assembled at frame 0 AND frame final
- For particle systems: density and distribution at frame 0 = density and distribution at frame final
- Lighting: the key light angle at frame 0 = key light angle at frame final (do not let the sun "rotate")
- Camera: end the camera move at the exact pose where it began

## Reference invocation library

Anchor every prompt to 1–3 specific references. Vague references ("Apple-style", "cinematic") do nothing. Specific references ("shot like Hoyte van Hoytema's *Interstellar* docking sequence") give the model a concrete target.

**Cinematographers worth invoking:**
- Roger Deakins — naturalistic, motivated, soft contrast (*Blade Runner 2049*, *1917*)
- Hoyte van Hoytema — anamorphic, IMAX, atmospheric (*Interstellar*, *Oppenheimer*)
- Emmanuel Lubezki — single-take, natural light, wide ('Birdman', *The Revenant*)
- Bradford Young — low-light, painterly shadows (*Arrival*, *Selma*)
- Christopher Doyle — handheld, color-saturated, kinetic (*In the Mood for Love*)
- Greig Fraser — clean luxury contrast (*Dune*, *The Batman*)

**Reference film/ad anchors:**
- Apple "Shot on iPhone" series — clean grade, minimal text
- Rolex "Perpetual" campaigns — macro craftsmanship, golden warm grade
- Nike "Dream Crazy" — bleach-bypass desaturation, hero rim
- Aesop print campaigns — botanical, editorial, soft daylight
- Kubrick — symmetric framing, single-point perspective
- Wong Kar-wai — neon, slow-motion, saturated, intimate
- Denis Villeneuve — wide, monumental, minimal palette

When invoking, name the project and DP: "Lit and graded in the manner of Greig Fraser's *Dune* (2021) — desaturated ochre, hard rim from a high-Kelvin practical, rich black shadows with no fill."

## Negative prompt taxonomy

Always append unless the user explicitly overrides. Group by category:

**Identity / artifacts:**
- no warped logos, no unreadable text, no extra fingers or limbs, no malformed hands, no merged subjects

**Motion / cuts:**
- no hard cuts, no jump frames, no flicker, no frame stuttering, no motion blur on overlay text, no unintentional camera shake

**Composition:**
- no watermarks, no UI chrome, no captions, no subtitles, no signatures, no logos other than [user-specified brand]

**Subject control:**
- no people in frame (if product-only), no children, no animals, no crowds, no unintended hands or reflections of operator

**Aesthetic floor:**
- no plastic CGI feel, no over-saturation, no HDR clipping, no banding in gradients, no posterization, no heavy compression artifacts, no AI-generated face hallucinations

## Output format

Return the prompt as a single dense paragraph optimized for Seedance 2 ingestion, followed by a structured breakdown the user can edit, plus 2 alternate variants.

```
CREATIVE DIRECTION:
Genre: [genre anchor]
Topology: [loop class]
References: [DP / film / brand — 1-3 specific names]
Hero beat: [the 1.5-second window the loop is built around]

PROMPT (primary):
[one dense paragraph, comma-separated descriptors, 100–200 words, all 12 blocks present]

BREAKDOWN:
1. Genre anchor: ...
2. Scene: ...
3. Subject anatomy: ...
4. Camera: ...
5. Lighting: ...
6. Color science: ...
7. Material & physics: ...
8. Atmospheric layer: ...
9. Timing: ...
10. Text: ...
11. Loop mechanics: ...
12. Negative: ...

ALT VARIANT A — [name the lever changed, e.g. "tighter framing + harder light"]:
[short paragraph noting only the changed elements]

ALT VARIANT B — [different lever, e.g. "different topology class"]:
[short paragraph noting only the changed elements]

GENERATION NOTES:
- Recommended Seedance 2 settings: [duration, aspect, resolution, seed strategy]
- Re-roll trigger words if first generation fails: [3-5 keyword swaps]
```

## Self-critique pass (run before delivering)

Verify ALL of these. If any fails, fix before returning the prompt:

- [ ] All 12 blocks present (or text omitted only because user gave none)
- [ ] Topology class explicitly named in prompt and breakdown
- [ ] At least one specific reference invoked (DP, film, ad, or stock)
- [ ] Camera block has lens-mm + aperture + movement-type + numeric-speed + focus + framerate
- [ ] Lighting block has named setup + Kelvin + ratio + quality
- [ ] Color block has stock/LUT name + 3–5 hex codes
- [ ] Material block uses BRDF terminology
- [ ] Atmospheric block has ≥2 layers
- [ ] Timing block has total + ≥3 beats with seconds
- [ ] Loop block contains a literal sentence: "Frame N matches frame 0 because…"
- [ ] Negative prompts span all 5 taxonomy groups
- [ ] No vague adjectives survived ("nice", "beautiful", "epic", "amazing", "stunning")
- [ ] Single-paragraph prompt is 100–200 words, dense, no filler
- [ ] Two alt variants change ONE lever each (not full rewrites)

## Examples

### Example 1 — Mechanical watch (luxury cinema)

**Input:** "Looping background video of a luxury mechanical watch for a homepage hero. Headline: 'Engineered for forever.'"

**Output:**

```
CREATIVE DIRECTION:
Genre: luxury cinema
Topology: masked-transition (light streak resets state)
References: Greig Fraser's macro work in *Dune* + Rolex "Perpetual" campaign
Hero beat: 3.2s — components suspended at peak dispersion, light catches escapement

PROMPT (primary):
Luxury cinema, 6-second masked-transition seamless loop of a Swiss mechanical watch on matte black volcanic stone, exploded-view deconstruction in zero gravity revealing escapement, balance wheel, mainspring, and ruby jewels, components drifting with 3° per-second self-rotation then reassembling into the complete watch by frame final. Subject: 41mm rose gold case with sunburst champagne dial, applied indices in polished gold (anisotropic specular), brushed bezel (anisotropic), domed sapphire crystal (refractive with subtle distortion), oyster bracelet links with end-link micro-engraving. 100mm macro lens at T2.0, slow 8-second-per-revolution orbit, locked focus on dial center with components passing through plane of focus, 24fps with 180° shutter. Hard rim key from camera-back-right at 4300K (Rembrandt-adjacent, 8:1 ratio), warm fill from below at 3200K, single specular catchlight raking the brushed bezel. Graded as Kodak Vision3 250D pushed half-stop, palette: graphite #0F1014, polished platinum #C8C9CB, warm brass #B8915E, sapphire-blue accent #1B3A6B, ivory dial #F1E8D2. Subsurface scattering on rubies, anisotropic on brushed metal, refractive on crystal. Atmospheric: sparse dust motes catching the rim light, anamorphic horizontal flare at 0.4s and 4.8s, fine 35mm grain, slight halation on champagne highlights. Timing: 0.0s assembled → 1.0s explosion begins → 3.2s peak dispersion (hero beat) → 4.5s reassembly initiates → 6.0s fully assembled identical to frame 0. Headline "Engineered for forever." in thin geometric sans (Söhne Light), +140 tracking, 4% frame-height, lower-center, mask-reveal in over 0.4s starting at 1.6s, fades out over 0.4s ending at 4.4s. Loop mechanics: masked-transition class — the rim light streak crosses frame at 5.7s, behind it the watch is fully reassembled at the exact orbit angle and lighting angle as frame 0. Negative: no warped logos, no extra components, no UI chrome, no watermarks, no human hands, no plastic CGI feel, no motion blur on text, no over-saturation, no HDR clipping.

BREAKDOWN:
1. Genre anchor: luxury cinema
2. Scene: 41mm rose-gold mechanical watch, matte black volcanic stone, macro framing
3. Subject anatomy: case + dial + indices + bezel + crystal + bracelet (each with surface)
4. Camera: 100mm macro, T2.0, 8-sec orbit, locked focus, 24fps/180°
5. Lighting: Rembrandt-adjacent rim, 4300K key + 3200K fill, 8:1 ratio
6. Color science: Kodak Vision3 250D push, 5-tone palette with hex
7. Material: anisotropic metals, refractive crystal, subsurface rubies
8. Atmospheric: dust motes, anamorphic flare, 35mm grain, halation
9. Timing: 6.0s with 5 beats
10. Text: "Engineered for forever." — Söhne Light, mask-reveal 1.6–2.0s, out 4.0–4.4s
11. Loop: masked-transition — rim streak at 5.7s resets state to frame 0
12. Negative: 9 specific exclusions across 4 categories

ALT VARIANT A — tighter framing + harder light:
Push to 180mm probe macro, T1.4, single hard kicker at 5600K with no fill, drop ratio to 16:1 chiaroscuro, palette deepens to graphite + brass only.

ALT VARIANT B — different topology class:
Switch to rotational class — full 360° turntable, watch never disassembles, 8-sec single revolution, macro orbit catches each component face once.

GENERATION NOTES:
- Recommended Seedance 2: 6s duration, 16:9, 1080p, run 4 seeds and pick cleanest reassembly
- Re-roll if first fails: swap "exploded-view" → "component-suspension", "deconstruction" → "disassembly bloom"
```

### Example 2 — Abstract SaaS hero (tech-minimal)

**Input:** "Background loop for an AI analytics SaaS landing page. Brand colors: deep indigo and electric cyan."

**Output:**

```
CREATIVE DIRECTION:
Genre: tech-minimal
Topology: particle-cycle
References: Hoyte van Hoytema's data-flow sequences in *Interstellar* + Apple Vision Pro launch film
Hero beat: 2.6s — ribbon splits into pulsing node lattice

PROMPT (primary):
Tech-minimal, 5-second particle-cycle seamless loop of luminous data ribbons flowing through deep indigo void, ribbons composed of fine particle strands that fragment into a constellation of pulsing nodes mid-frame then reconverge into a single ribbon at frame final. Subject: self-illuminated data ribbons 4–6 pixels thick, particles trailing with 0.3s persistence, nodes 2% frame-height with soft cyan cores and indigo halos. Virtual 35mm lens equivalent, T2.0, slow constant-velocity forward dolly at 0.2 m/s, locked focus, 30fps. Self-illuminated key — the ribbons and nodes are the only light source, casting cyan rim against indigo ambient at infinite-distance fall-off, 16:1 contrast. Graded as ARRI K1S1 with cyan-shifted shadows, palette: deep indigo #0B0F2C, electric cyan #00E5FF, midnight black #04050D, soft violet #4B3F8C, white-hot core #F2FBFF. Subsurface-emissive material on nodes, refractive halation around brightest cores, anamorphic 1.8x horizontal flare on each peak pulse. Atmospheric: dense volumetric haze fog at 30% density, anamorphic flare on every node pulse, fine digital grain, soft bloom around nodes, gate stillness (no shake). Timing: 0.0s single ribbon enters from frame-bottom-left at 22% from edge → 1.4s ribbon begins fragmenting → 2.6s peak node lattice (hero beat) → 3.8s reconvergence initiates → 5.0s single ribbon at identical entry position and luminosity as frame 0. No overlay text. Loop mechanics: particle-cycle class — particles that exit frame top-right at 4.2s are visually replaced by particles entering frame bottom-left between 4.4–5.0s, forming the same ribbon at identical position and brightness as frame 0. Negative: no warped logos, no readable text artifacts, no UI chrome, no human figures, no hard cuts, no flicker, no banding in indigo gradient, no over-saturated cyan clipping, no plastic CGI sheen, no watermarks.

BREAKDOWN:
1. Genre anchor: tech-minimal
2. Scene: data ribbons in indigo void, mid-frame
3. Subject anatomy: ribbons (4-6px particles) + nodes (2% frame-height, cyan core)
4. Camera: virtual 35mm, T2.0, 0.2 m/s dolly, locked focus, 30fps
5. Lighting: self-illuminated emissive, 16:1 contrast, cyan-on-indigo
6. Color science: ARRI K1S1, 5-tone palette with hex
7. Material: subsurface-emissive nodes, refractive halation
8. Atmospheric: 30% volumetric haze, anamorphic flare, digital grain, bloom
9. Timing: 5.0s with 5 beats
10. Text: omitted (user provided none)
11. Loop: particle-cycle — exit/entry particle balance returns ribbon to frame 0 state
12. Negative: 10 exclusions across 5 categories

ALT VARIANT A — warmer accent:
Swap cyan #00E5FF for amber #FFBE0B, shift palette toward "data + warmth" — same topology, different brand emotional register.

ALT VARIANT B — different topology class:
Switch to breathing class — single ribbon expands into volumetric cloud at 2.5s, contracts back to ribbon at 5.0s, no fragmentation.

GENERATION NOTES:
- Recommended Seedance 2: 5s, 21:9 cinematic banner, 1080p, dense haze can confuse some seeds — re-roll if banding appears
- Re-roll if first fails: swap "data ribbons" → "luminous filaments", "nodes" → "light points", reduce haze to 20%
```

### Example 3 — Pour shot (gourmet sensory)

**Input:** "Whisky brand homepage loop. Bottle pouring into a tumbler. Brand: Ardbrek (fictional). Headline: 'From the cold north.'"

**Output:**

```
CREATIVE DIRECTION:
Genre: gourmet sensory
Topology: palindrome (pour forward, then reverse to refill)
References: Bradford Young's low-light interiors in *Arrival* + Aesop product macro campaigns
Hero beat: 2.8s — whisky stream impacts tumbler base, splash crowns

PROMPT (primary):
Gourmet sensory, 6-second palindrome seamless loop of a whisky bottle pouring into a heavy crystal tumbler on dark slate, then time-reversing so the liquid returns to the bottle by frame final. Subject: 700ml hand-blown bottle with embossed thistle motif and aged paper label "Ardbrek" in letterpress, dark amber whisky with copper viscosity (slow 0.6 m/s pour rate), 10oz double-walled crystal tumbler with hand-cut diamond facets refracting amber. 85mm lens at T1.8, locked tripod, no movement (subject motion drives the frame), shallow focus on tumbler base, 60fps captured and conformed to 24fps for liquid clarity. Single hard rim from camera-back-left at 3200K through frosted-window practical, 8:1 ratio with negative-fill camera-right (deep shadow), single specular kick on bottle shoulder. Graded as Cinestill 800T with halation, palette: peat-black #1A1410, deep amber #B8651F, copper highlight #D49654, slate cool-grey #4A4F55, paper label cream #E8DFC8. Subsurface scattering through whisky volume (caustics on slate beneath), refractive index shifts on crystal facets, surface tension creates Worthington jet on impact at 2.8s, micro-droplets at 1mm scale. Atmospheric: faint cool breath-vapor on whisky surface (cold-room cue), anamorphic 2x horizontal flare on rim kick, medium 35mm grain, strong halation on amber highlights (Cinestill signature). Timing: 0.0s bottle vertical, no liquid in tumbler → 0.8s pour begins → 2.8s splash crown (hero beat) → 3.0s pour midpoint, tumbler 60% full → reverse begins → 5.2s splash crown reverses → 6.0s bottle vertical, tumbler empty, identical to frame 0. Headline "From the cold north." in editorial serif (GT Sectra Light), 5% frame-height, lower-third, fade-in over 0.5s starting at 1.5s, holds, fade-out over 0.5s ending at 4.5s. Loop mechanics: palindrome class — frames 0–3.0s play forward, frames 3.0–6.0s play time-reversed; frame 6.0s is identical to frame 0 because of the reversal symmetry. Negative: no warped label text, no extra glasses, no human hands, no UI chrome, no watermarks, no motion blur on overlay text, no over-saturation, no HDR clipping on amber highlights, no plastic CGI liquid feel, no flicker.

BREAKDOWN:
1. Genre anchor: gourmet sensory
2. Scene: whisky pour into crystal tumbler, dark slate surface
3. Subject anatomy: bottle (700ml, embossed, paper label) + tumbler (cut crystal) + liquid (amber, copper viscosity)
4. Camera: 85mm, T1.8, locked tripod, shallow focus, 60→24fps conform
5. Lighting: hard rim from frosted window, 3200K, 8:1, negative fill
6. Color science: Cinestill 800T, halation, 5-tone amber-slate palette
7. Material: subsurface caustics, refractive crystal, surface-tension Worthington jet
8. Atmospheric: vapor breath, anamorphic flare, 35mm grain, halation
9. Timing: 6.0s palindrome with 6 beats
10. Text: "From the cold north." — GT Sectra Light, lower-third, 1.5–4.5s window
11. Loop: palindrome — second half is first half reversed, frame 0 = frame 6
12. Negative: 10 exclusions across 5 categories

ALT VARIANT A — warmer practical:
Swap window-light rim for warm 2700K candle practical visible in deep background bokeh, push amber saturation, drop to 24fps native.

ALT VARIANT B — different topology class:
Switch to rotational — bottle and filled tumbler on slow turntable, no pour action; 360° in 6s, hero beat at 50% rotation when label faces camera.

GENERATION NOTES:
- Recommended Seedance 2: 6s, 16:9, 1080p, palindrome class can produce ghosting at the reversal point — render at 8s and trim if needed
- Re-roll if first fails: swap "Worthington jet" → "splash crown", "time-reversing" → "reverse-playback symmetry"
```

### Example 4 — Calfskin tote (editorial fashion)

**Input:** "Looping product video for a quiet-luxury bag brand homepage. Structured leather tote, soft minimalist mood."

**Output:**

```
CREATIVE DIRECTION:
Genre: editorial fashion
Topology: rotational (clean 360°)
References: The Row Spring 2024 campaign films + Sølve Sundsbø's editorial motion work for Vogue Italia
Hero beat: 4.0s — brass D-rings catch the specular kick as the bag passes 180°

PROMPT (primary):
Editorial fashion, 8-second rotational seamless loop of a structured calfskin tote on a polished travertine pedestal in a softly diffused white room, single take, full 360° clockwise revolution. Subject: 32cm wide × 28cm tall hand-stitched calfskin tote in muted sand, French seams with raw edges, bridle-leather rolled handles attached to antique brass D-rings, top-stitching at 6 stitches per inch in tonal waxed thread, faint pebbled surface grain catching directional light, single 8mm-height embossed monogram low-front-center. 85mm lens at T2.8, slow 8-second-per-revolution turntable orbit, locked focus on the tote's center plane, shallow depth of field with the pedestal edges drifting out of focus, 24fps with 180° shutter. Top-down butterfly key from a 6-foot diffused softbox at 5600K (paramount setup, 2:1 ratio), warm bounce fill from below via white card at 4300K, a single hero specular kick on the brass D-rings as they rotate through 180° at the 4.0s mark. Graded as Kodak Portra 400 desaturated half-stop, palette: muted sand #C9B89A, polished travertine #DDD6C3, antique brass #8E6F3E, soft shadow #6B5F4D, ivory backdrop #F4EFE3. Anisotropic sheen on the calfskin grain (directional highlight shifts as the surface rotates), specular on brass hardware, satin BRDF on the rolled handles, matte travertine with sub-millimeter pitting under diffuse fill. Atmospheric: extremely fine dust motes drifting in the side fill, no lens flare, fine 35mm grain (Kodak 5219 size), no halation, gentle 15% vignette. Timing: 0.0s tote frontal to camera, monogram centered → 2.0s 90° right profile, full edge-stitching reveal → 4.0s 180° back view, brass D-rings catch hero specular (hero beat) → 6.0s 270° left profile → 8.0s frontal, identical pose, lighting, and shadow as frame 0. No overlay text. Loop mechanics: rotational class — the turntable completes exactly 360° in 8.0 seconds, so frame 8.0s pose is geometrically identical to frame 0 because the rotation closes the cycle; lighting angle is fixed (rig is static, only the subject rotates), so key, fill, and shadow positions match between first and last frame. Negative: no warped logos, no extra hardware, no human hands, no UI chrome, no watermarks, no over-saturation, no plastic CGI sheen, no motion blur on the brass kick, no flicker, no banding in the soft gradient backdrop, no harsh contact shadow on travertine.

BREAKDOWN:
1. Genre anchor: editorial fashion
2. Scene: structured calfskin tote on travertine pedestal, soft-diffused white room
3. Subject anatomy: tote (32×28cm, calfskin, French seams, bridle handles, brass D-rings, 8mm monogram)
4. Camera: 85mm, T2.8, 8-sec turntable, locked focus, shallow DOF, 24fps/180°
5. Lighting: paramount butterfly, 5600K key + 4300K bounce fill, 2:1 ratio, hero brass kick at 4.0s
6. Color science: Kodak Portra 400 desaturated, 5-tone sand-and-brass palette
7. Material: anisotropic calfskin grain, specular brass, satin handles, matte travertine
8. Atmospheric: fine dust motes, 35mm Kodak 5219 grain, 15% vignette, no flare/halation
9. Timing: 8.0s with 5 quarter-rotation beats (0/2/4/6/8)
10. Text: omitted (user provided none)
11. Loop: rotational — exact 360° closes the cycle; static lighting rig, only subject rotates
12. Negative: 11 exclusions across 5 categories

ALT VARIANT A — harder light + tighter framing:
Swap soft butterfly for a hard kicker from camera-back-left at 4300K, drop ratio to 8:1 for chiaroscuro, push to 100mm lens for tighter compression, deepen shadow on pedestal.

ALT VARIANT B — different topology class:
Switch to breathing class — tote stays static, camera dollies in from 1.2m to 0.5m over 4.0s and pulls back over 4.0s, palette unchanged, hero beat shifts to 4.0s closest approach where brass D-rings fill the frame.

GENERATION NOTES:
- Recommended Seedance 2: 8s, 16:9, 1080p, run 3 seeds and pick the one where the brass kick lands cleanly at 4.0s and the monogram doesn't warp at 0/8s
- Re-roll if first fails: swap "calfskin" → "smooth grain leather", "French seams" → "edge-stitched seams", reduce monogram height to 6mm
```

### Example 5 — Spa atrium (surreal-poetic, breathing)

**Input:** "Atmospheric homepage hero loop for a wellness brand. Empty, meditative, architectural — no product, just a feeling."

**Output:**

```
CREATIVE DIRECTION:
Genre: surreal-poetic (architectural cinema)
Topology: breathing
References: Bradford Young's interior atmospherics in *A Most Violent Year* + Aman Tokyo brand films
Hero beat: 4.0s — single light shaft hits the cedar bench at the camera's closest approach, mist at thinnest

PROMPT (primary):
Surreal-poetic architectural cinema, 8-second breathing seamless loop of an unoccupied wabi-sabi spa atrium, single take, slow push-in then symmetrical pull-back. Subject: a 3.2m hand-adzed cedar bench floating above a still 4×4m black-volcanic-stone reflecting pool, travertine wall behind with vertical timber slats spaced 8cm apart, single linear slot skylight directly above the bench, no occupants, no objects, no signage. 24mm lens at T4.0, slow forward dolly from 6.0m to 4.0m by frame 4.0s and symmetrical pull-back to 6.0m by frame 8.0s, locked focus on bench, deep focus throughout, 24fps with 180° shutter. Single hard volumetric god ray descending through the slot skylight at 5600K, no fill light, ambient bounce only off the travertine wall (4:1 contrast), specular glints where the shaft meets the still pool surface. Graded as Fuji Eterna 250D desaturated, palette: deep charcoal #1F1E1B, cedar honey #8B6F47, bone-white travertine #E8E0D2, water shadow-grey #2A2D2F, diffuse mist #C9CFCF. Anisotropic adze grain on cedar (directional sheen as the camera approaches), refractive still-water surface with sub-millimeter tension ripples, matte porous travertine, rough matte volcanic-stone pool basin. Atmospheric: dense volumetric mist at 50% density that breathes in sync with the camera move — densest at frames 0 and 8, thinnest at frame 4 to expose the god ray at peak intensity — slow drifting dust motes inside the shaft, fine 35mm grain, gentle bloom on the shaft edge, no lens flare, faint gate weave for shot-on-film realism. Timing: 0.0s wide framing 6.0m back, mist dense, god ray diffused → 2.0s mid-push at 5.0m, mist clearing, ray sharpening → 4.0s closest approach at 4.0m, mist thinnest, ray peak intensity raking the cedar grain (hero beat) → 6.0s mid-pullback at 5.0m, mist re-densifying → 8.0s wide framing at 6.0m, mist density, ray softness, and camera position identical to frame 0. No overlay text. Loop mechanics: breathing class — camera position, mist density, and god-ray intensity all describe a sinusoidal cycle with a single peak at 4.0s and identical neutral states at 0.0s and 8.0s; frame 8.0s matches frame 0 because every parameter has completed exactly one full cycle and returned to its starting value. Negative: no people, no animals, no warped lines on travertine, no UI chrome, no watermarks, no over-saturation, no flicker, no plastic CGI feel, no motion blur on still water surface, no banding in the mist gradient, no harsh edges on the god ray, no camera-operator reflection in the pool.

BREAKDOWN:
1. Genre anchor: surreal-poetic (architectural cinema)
2. Scene: minimalist Japanese-inspired spa atrium, cedar bench above still black-stone reflecting pool
3. Subject anatomy: cedar bench (3.2m, hand-adzed) + travertine wall + 8cm timber slats + slot skylight + 4×4m volcanic-stone pool
4. Camera: 24mm, T4.0, breathing dolly 6→4→6m, locked focus, deep DOF, 24fps/180°
5. Lighting: single 5600K hard god ray through slot skylight, ambient bounce only, 4:1 contrast
6. Color science: Fuji Eterna 250D desaturated, 5-tone earth-and-mist palette
7. Material: anisotropic cedar adze grain, refractive water surface, matte travertine + volcanic stone
8. Atmospheric: 50% volumetric mist breathing in sync, drifting motes in shaft, 35mm grain, bloom, gate weave
9. Timing: 8.0s sinusoidal breathing cycle with 5 beats (0/2/4/6/8)
10. Text: omitted (user provided none)
11. Loop: breathing — camera, mist, and light each complete exactly one sinusoidal cycle, frame 8.0s = frame 0
12. Negative: 12 exclusions across 5 categories

ALT VARIANT A — warmer practical:
Swap 5600K daylight god ray for 3200K tungsten light through the skylight (golden-hour cue), push palette toward amber, deepen contrast to 8:1, increase grain coarseness to medium.

ALT VARIANT B — different topology class:
Switch to particle-cycle — fix the camera at 5.0m and stop the dolly, mist particles drift downward through the god ray and exit through the pool surface while replacement particles enter from the skylight; frame 0 and frame final particle distributions are statistically identical even though no individual particle persists across the loop.

GENERATION NOTES:
- Recommended Seedance 2: 8s, 21:9 cinematic banner, 1080p, breathing-class motion can produce a visible push-pull seam — render at 9s and trim 0.5s from each end if needed
- Re-roll if first fails: swap "wabi-sabi" → "Japanese minimalist", "slot skylight" → "single linear roof opening", reduce mist density to 35%, drop "adze marks" if cedar surface is rendering as plastic
```

## Generation checklist (final pre-flight)

Before sending to user, confirm:

- [ ] Creative direction preamble written
- [ ] All 12 blocks present in primary prompt
- [ ] Self-critique pass items all checked
- [ ] Two alt variants present, each changing exactly one lever
- [ ] Generation notes include re-roll trigger words
- [ ] No vague adjectives anywhere in the output
- [ ] Loop topology explicitly named and explained
- [ ] At least one specific reference (DP, film, or ad) invoked
- [ ] Negative prompt covers all 5 taxonomy groups
