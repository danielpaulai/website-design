# AURA BUILD — Remix Brief (paste this alongside the React component)

You are remixing a React component originally built for "TalentHub" (a job platform) into a single-page site for **AURA BUILD**, a Singapore architecture firm. Keep the structural skeleton. Strip every word of copy. Replace the personality entirely.

---

## The firm (use this for voice — do not put it on the page)

**Aura Build** — boutique architecture practice. Founded 2018, Singapore (with satellite studios in Dubai and Tokyo). Designs **integrated arenas + vertical sky-rise districts** for tier-1 city governments, sovereign wealth funds, sports league authorities, and cultural institutions. Hero project: **AURELIA ARENA** (Marina Bay, Singapore, 2026).

Voice: editorial monograph. Confident, cinematic, lightly poetic, technically grounded. Closer to a Phaidon book than a SaaS landing page. Closer to The Row than to Squarespace.

Tagline: *"We don't design buildings. We design how a city remembers itself."*

---

## What stays from the React reference component

- The rounded outer container with vertical-line spine in the background
- The thin top navigation bar
- The multi-section vertical flow (Hero → multi-section → Footer)
- The IntersectionObserver scroll-reveal animation system (slow it down — see Design rules)
- The footer columns layout

## What gets DELETED entirely

- All emerald, blue, purple, orange, pink color references
- All Iconify icons (`solar:*`, `simple-icons:*`)
- All `font-oswald`, `font-bricolage`, `font-space` references
- The marquee animations
- The animated SVG noodles in the Matching Engine section
- The conic-gradient beam-spin button
- The "75k+ talents" avatar pile
- The "Remote Friendly / Top Companies / New Offers Daily" floating badges
- The grayscale-to-color hover on investor cards
- The "Stripe / Vercel / Notion / Spotify" partner logo strip in the footer
- The custom dot cursor on nav links
- The 4-column "Design / Engineering / Creative / Marketing" inner marquee tags

---

## Section-by-section remix

### Nav (top bar)

- Logo: thin **AURA** wordmark, set in editorial serif (GT Sectra Light or Tiempos), tracking +200, never bold. No SVG with `group-hover:rotate-22.5deg` — keep it static.
- Links (3 only, all-caps tracking-widest): **Work** · **Studio** · **Contact**
- Right side: **nothing**. Delete the "Log In" button. Delete the white mobile hamburger badge. If a mobile menu is needed, render as a thin underline icon, monochrome.

### Hero — STRICT RULE

**Replace the ENTIRE hero block (everything from the avatar pile down through the three feature cards) with a single full-bleed looping muted autoplay video. Nothing else.**

```jsx
<section className="relative w-full h-[100vh] xl:rounded-[3.5rem] overflow-hidden">
  <video
    src="/aurelia-arena.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />
</section>
```

No headline. No subheadline. No badges. No CTA buttons. No scroll-down arrow. No overlay scrim. No floating labels. The video does the work; the viewer scrolls when they're ready.

### Section 2 — Manifesto (NEW — add this between Hero and Capabilities)

Single centered line of large editorial display type. Generous space (240px top and bottom).

> *We don't design buildings. We design how a city remembers itself.*

Two lines of body copy below it, smaller, max-width 60ch, centered:

> Aura Build is an architecture practice working at the scale where civic infrastructure becomes cultural symbol. Stadiums woven into vertical districts. Waterfronts that stop being edges and start being centers.

### Section 3 — What We Build (replaces "Intelligent Context Matching Engine")

Keep the section-header + grid pattern. Replace content.

Section label (tiny tracking-widest): `01 / Capabilities`
Headline: **What We Build**
Subhead: *Four disciplines, one architectural language.*

Replace the 2-card layout (Automated Tagging / Filter Rules) with a 4-card grid. Each card is a square with a number, discipline name, one-line description, and a single architectural photograph or thin line drawing. **No icons. No UI mockups. No animated SVG.**

| 01 | **Integrated Arenas** | Stadiums and pavilions designed as the keystone of the urban districts they sit inside, not the exception to them. |
| 02 | **Vertical Districts** | Mixed-use sky-rise clusters that share a podium, a public realm, and a single architectural language. |
| 03 | **Waterfront Masterplans** | Reclamation-scale projects where the brief is the city's relationship with its own water. |
| 04 | **Cultural Landmarks** | Buildings commissioned to carry meaning for fifty years — concert halls, museums, civic monuments. |

### Section 4 — Selected Work (replaces "Venture Backed")

Keep the 4-card grid. Replace investor cards with project cards.

Section label: `02 / Selected Work`
Headline: **Four projects in flight.**
Subhead: *A small practice with a small number of commissions at a time.*

| Project | Location | Year | Status |
|---|---|---|---|
| **AURELIA ARENA** | Marina Bay, Singapore | 2026 | Under construction |
| **HELIX PAVILION** | Dubai Creek, UAE | 2024 | Completed |
| **MERIDIAN QUARTER** | Tokyo Bay, Japan | 2025 | Completed |
| **CAUSEWAY HOUSE** | Liverpool, UK | 2023 | Completed |

Each card:
- Single full-bleed photograph (no overlay tints, no grayscale-to-color hover)
- Project name in editorial serif at the bottom of the card
- Metadata line below in tight uppercase tracking: `LOCATION · YEAR · STATUS`
- Hover: hairline outline appears, that's it

Strip: "Series A+", "$8B Funded", investor name labels, Sequoia/a16z/FoundersFund/YCombinator branding, "Portfolio Companies" footer counts.

### Section 5 — By the Numbers (replaces "Statistics")

Keep the split-panel structure. Left = dark intro panel, right = white stat panel with row dividers. Replace numbers and copy.

**Left panel (dark):**
- Tiny label: `03 / By the Numbers`
- Headline (two lines): **An eight-year practice.** *Built at landmark scale.*
- Body: *We do not pitch. New work comes by introduction. These are the numbers behind the practice today.*
- Link: `View the studio dossier →`

**Right panel (white):**
| 8 | Years since founding | Founded 2018 in Singapore. |
| 47 | Active commissions | Across four cities and three continents. |
| $4.2B | Project value under design | Total construction cost of works currently in the studio. |
| 12 | Awards | RIBA, AIA, Civic Trust, World Architecture Festival. |

Same large-number-on-left-small-description-on-right pattern as the original. Same hairline dividers.

### Section 6 — Studio (NEW — between By the Numbers and Footer)

Two paragraphs of plain prose. **No team grid. No headshots. No founder bios.** Discretion reads as luxury.

> Aura Build was founded in 2018 in Singapore by a small group of architects, structural engineers, and urbanists who had spent the preceding decade working at the largest practices on the largest projects — and had quietly concluded that scale and meaning were drifting apart.
>
> We work on a small number of commissions at a time. We do not pitch. New work comes by introduction. If you are reading this and we should be talking, the contact line is below.

### Footer (remix)

Strip the social-icon bubbles and the Stripe/Vercel/Notion/Spotify partner logo strip.

Keep:
- Wordmark on the left (AURA in the editorial serif)
- Three link columns:
  - **Work** — AURELIA ARENA, HELIX PAVILION, MERIDIAN QUARTER, CAUSEWAY HOUSE, All projects
  - **Studio** — About, Process, Press, Careers
  - **Contact** — `studio@aurabuild.co`, `+65 6 — — — — — —`, Tanjong Pagar Singapore
- Bottom line (single row): `AURA BUILD · 2026 · SINGAPORE / DUBAI / TOKYO`

No social icons. No newsletter capture. No "© All rights reserved" boilerplate.

---

## Design rules — short, mandatory

### Color (replace TalentHub's palette wholesale)

- Canvas: `#0E0F11` (NOT pure black, NOT `bg-neutral-900`)
- Type: bone white `#F1ECE2`
- Accent (one): brushed brass `#B8915E`
- Rare second accent (used once, sparingly): glass blue `#4A6B8A`
- DELETE: emerald `#10b981`, blue `#3b82f6`, purple `#a855f7`, orange `#f97316`, pink, all gradients on text

### Typography

- Display: `'GT Sectra Light'`, `'Tiempos Headline'`, or `'PP Editorial New'` — pick one, thin weight, **never bold**, never use `font-medium` on display type
- Body: `'Söhne Buch'`, `'Neue Haas Grotesk'`, or `'GT America'` — Regular only
- Section labels (all-caps): tracking +200, 11px, regular weight, opacity 60%
- **Strip every reference to `font-bricolage`, `font-oswald`, `font-space` in the original**
- Body line-height 1.6, max-width 65ch

### Layout

- Asymmetric editorial grid
- Section padding: 200–240px top and bottom (the original's `mt-32` is too tight)
- Max content width: 1200px (not the original's 90rem)
- **No card shadows.** No rounded corners above 4px on inner cards (the outer container's 3.5rem stays)
- Hairline dividers (1px, opacity 10%)

### Motion

- Keep the IntersectionObserver scroll-reveal but **slow it**: 800ms duration, 60ms stagger, ease-out
- Delete: levitate animations, beam-spin, dots-move, marquee-content keyframes, animated SVG noodles, conic-gradient buttons
- Hover states: hairline outline on cards. That's it. No scale, no lift, no glow.

### Hard NOTs

- No emoji, no Iconify icons anywhere
- No glassmorphism, no `backdrop-blur`, no `bg-*-900/40`
- No avatar piles, no "75k+" social proof
- No CTAs in the hero
- No newsletter capture, chat widget, cookie banner, popup
- No "Get Started" or "Start Searching" language anywhere
- No grayscale-to-color hovers
- No emerald check marks, no `solar:check-circle-bold-duotone`

---

## Asset pointers

- **Hero video:** `/aurelia-arena.mp4` — the 10-second AURELIA ARENA build-up clip (blueprint → construction → completed building at golden hour). Loops naturally because the build-up arc resolves to the held hero shot.
- **Project images:** replace TalentHub's Unsplash placeholders with architectural photography. For the workshop demo, Unsplash queries: `marina bay singapore`, `dubai harbour`, `tokyo bay`, `liverpool architecture`. Single image per card, no overlays.
- **Logo:** flat thin "AURA" wordmark in the chosen editorial serif. Replace the rotating SVG entirely.

---

## Build instruction for the AI builder

> Take the provided React component and remix it for AURA BUILD using this brief. Strip the hero to a single full-bleed looping video and nothing else. Replace all copy with the section content above. Replace TalentHub's color palette and typography with the Aura design rules. Delete every Iconify icon, every gradient text, every animated marquee, and every CTA. Output one clean React component, semantic HTML, with the Aura color and font tokens defined as CSS variables at the top.
