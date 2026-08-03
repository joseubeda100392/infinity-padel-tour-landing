---
target: Landing-sergio/ipt_landing (1).html
total_score: 30
max_score: 36
na_heuristics: 7
p0_count: 2
p1_count: 2
timestamp: 2026-08-02T23-51-57Z
slug: landing-sergio-ipt-landing-1-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Scroll-linked station activation gives great progress feedback; no error/loading state if the lead form's future network call fails |
| 2 | Match System / Real World | 4/4 | Padel-native vocabulary (nivel, pareja, categoria) used naturally throughout |
| 3 | User Control and Freedom | 3/4 | No way to edit/return after form success; single anchor-nav only |
| 4 | Consistency and Standards | 4/4 | Buttons, cards, dot-color coding all consistent |
| 5 | Error Prevention | 3/4 | Disabled placeholder options, required+type on inputs, but no inline validation |
| 6 | Recognition Rather Than Recall | 4/4 | Pareja toggle shows selected state; stats surfaced up front |
| 7 | Flexibility and Efficiency | n/a | Not applicable to a single-pass teaser page |
| 8 | Aesthetic and Minimalist Design | 4/4 | Restrained palette, real whitespace, grain+gradient depth |
| 9 | Error Recovery | 2/4 | Relies on unstyled native reportValidity() bubbles - no themed inline error state |
| 10 | Help and Documentation | 3/4 | FAQ covers real objections, but positioned after the form instead of near it |
| **Total** | | **30/36** | **Good** (heuristic 7 n/a) |

## Design Specificity Verdict

**LLM assessment**: This is authored work, not a generic sports-league template wearing a skin. The strongest evidence: the stat block literally decodes the brand mark ("8 jugadores por jornada. El infinito de nuestra marca"), the hero isotype (infinity spiral, orange dot = ball) is echoed as the animated ball in the bespoke GSAP scrollytelling "race" section, and the SVG path itself loops at the Playoffs node - a deliberate visual rhyme with the infinity symbol, not a generic line chart. CSS variable names (vibora, willy, dormilona, bandeja, chiquita) map to a real internal "Logoteca 2026" brand system. Underneath the specific dressing, the section skeleton (hero, stats, 3-col features, scrollytelling, 3 cards, partner, urgency, form, FAQ, footer) is a conventional landing-page shape - but the execution earns its brand.

**Deterministic scan**: detect.mjs returned exit code 2 with 2 warnings, both likely false positives: dark-glow (line 74, the CTA button's orange box-shadow) and radial-halo (line 87-89, the hero's dual green radial gradient). Both use only the page's own defined brand palette rather than generic saturated neon, and the button shadow carries a real 8px directional offset (an elevation shadow, not a flat ambient halo). Kept as warnings, not treated as real defects.

**Visual overlays**: No live-server injection overlay was available for this single self-contained static file with no project scaffolding (live-server.mjs expects a dev-server-backed project); browser evidence instead came from direct screenshots and an axe-core accessibility audit, both of which surfaced real, independently-confirmed defects (below).

## Overall Impression

This is a genuinely well-crafted, on-brand teaser - the rarest compliment: it could not be repurposed for another sport or league without a rewrite. The single biggest opportunity is that its two most conversion-critical elements - the primary CTA button (used for every "Quiero informacion" action, including the actual form submit) and the flagship scroll animation's final beat - both ship with confirmed, fixable defects: an accessibility contrast failure on every button, and a legibility collision at the exact climax of the page's best interaction.

## What's Working

1. **Brand-mark literalism**: the "8 players = infinity" stat, the ball, and the isotype are the same idea told three ways - rare and deliberate, not decorative.
2. **Bespoke race section**: a pinned GSAP timeline with getPointAtLength-driven ball motion and per-station activation is custom-built, not a stock carousel or progress bar.
3. **Form defaults**: "Vengo con pareja" pre-checked matches the doubles-first reality of the sport, removing a decision for most visitors before they even see it.

## Priority Issues

**[P0] Primary CTA fails WCAG AA contrast on every instance**
- **Why it matters**: White text on --chiquita #FF7300 measures 2.72:1 - fails both the 4.5:1 (normal text) and 3:1 (UI component) AA thresholds. This exact button is the hero CTA, the urgency-section CTA, the orange category tag, *and the lead form's submit button* - the literal conversion action of the page is under-contrast for a meaningful share of visitors.
- **Fix**: Darken the orange (or switch to dark text on it) until it clears 4.5:1 - e.g. a deeper #D45C00-range orange with white text, or keep --chiquita and switch its button text to --dormilona (dark green), which is already the pattern used successfully on the --vibora tag.
- **Suggested command**: /impeccable audit

**[P0] Ball overlaps its own label at the animation's climax (desktop)**
- **Why it matters**: Confirmed by screenshot at 1440x900 - the final "03 Fase Final" ball sits directly on top of the word "campeones" in "El gran escenario - campeones infinito", the exact payoff moment of the page's signature interaction. Mobile stacks fine; this is desktop-only.
- **Fix**: Offset the ball's terminal resting position (translate a few px along the path normal) or shrink/fade it slightly once self.progress reaches 1, so it settles beside the station text instead of on it.
- **Suggested command**: /impeccable polish

**[P1] Numeric contradiction between "100 equipos" and "800 jugadores"**
- **Why it matters**: The urgency section says "Solo 100 equipos... ni uno mas" while the experience grid says "Comunidad: un vestuario de 800 jugadores." 100 teams as pairs is 200 players, not 800 - a sharp-eyed visitor (or journalist) catches this in seconds and it undercuts trust in every other number on the page.
- **Fix**: Reconcile the figures, or reword the community stat to avoid a hard player count if it's aspirational/multi-season.
- **Suggested command**: /impeccable clarify

**[P1] RGPD consent and footer legal/social links are all dead href="#" placeholders**
- **Why it matters**: The privacy-policy link sits inside the required RGPD consent checkbox - a legal-trust moment - and points nowhere. Footer Instagram/Aviso legal/Privacidad are the same. This is the worst possible place for a placeholder link.
- **Fix**: Wire real destinations before this ships, or visibly mark the page as pre-launch if it must go out with placeholders.
- **Suggested command**: /impeccable harden

**[P2] FAQ sits after the form instead of before/near it**
- **Why it matters**: The FAQ resolves exactly the doubts (level, cost, "no partner?") a first-timer hits while filling the form - nivel and pareja are both form fields - but a visitor only reaches the FAQ after already submitting or abandoning.
- **Fix**: Move the FAQ above the form, or surface 1-2 relevant answers as inline hints next to the nivel/pareja fields.
- **Suggested command**: /impeccable layout

## Persona Red Flags

**Riley (stress tester)**: Catches the 800-vs-200 player math within seconds of reading both stats, then clicks the privacy-policy link expecting to verify legitimacy and gets nothing - two credibility hits in the same short scroll distance.

**Jordan (confused first-timer)**: Reaches "Nivel Intermedio/3.0" and the pareja toggle in the form before ever seeing the FAQ that would explain both - the page's own reassurance content is sequenced after the point where a newcomer needs it.

**Casey (distracted mobile user)**: The 2400px pinned scroll section could read as "stuck" during a fast flick-scroll on a real phone (not fully verifiable from a static screenshot); the fixed topbar CTA wraps to two cramped lines on mobile and stays that way for the entire scroll.

## Minor Observations

- Mobile fixed topbar CTA ("Quiero informacion") wraps to two lines inside its pill at narrow widths - a persistent small cramp across the whole page.
- Missing <main> landmark and 21 nodes outside a landmark region (axe: moderate) - doesn't block sighted users but adds friction for screen-reader section navigation.
- Footer legal text (rgba(239,222,194,.6) on --dormilona) measures ~4.0:1, marginally under the 4.5:1 AA threshold for its 13px size.
- "Main Partner: LOK" alongside a title already reading "BY LOK" may read as circular sponsorship to a new visitor - worth a caption check.
- Native browser validation bubbles (unstyled) will look visually jarring against this dark, custom-styled form the one time they appear.

## Questions to Consider

1. Which number should a skeptical visitor believe - "100 equipos, ni uno mas" or the "800-player locker room"?
2. If the ball's final resting frame overlaps its own label, was this scroll animation ever watched all the way through before shipping?
3. Is a placeholder legal link under a required RGPD checkbox acceptable for the actual traffic this page will get, or does it risk costing exactly the careful, price-and-legal-conscious players the league most wants?
