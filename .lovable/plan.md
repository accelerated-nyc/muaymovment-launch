

## Add Icons to Spectrum Section Nodes

### Changes to `src/components/sections/SpectrumSection.tsx`

**Icons for each node (from Lucide React):**
- Seated Adaptive Work: `Armchair` (seated/supported position)
- Assisted Standing: `HandHelping` (guided support)
- Independent Balance: `Scale` (balance/equilibrium)
- Controlled Striking: `Target` (precision and aim)
- Full Pad Combinations: `Zap` (full power/energy)

**Layout changes:**

- Import the 5 Lucide icons and add an `icon` field to each node in the `nodes` array
- Increase section vertical padding from `py-28 md:py-40` to `py-32 md:py-48` for more breathing room
- **Desktop:** Place each icon centered above its dot, inside a subtle circular container (e.g., `w-12 h-12 rounded-full border border-gold/20 bg-gold/5`) with the icon rendered in gold at 20px. Icons will fade/scale in with staggered delays before the dots appear.
- **Mobile:** Place each icon to the left of or above the text block next to each dot, using the same circular container style.
- Icons will animate in using Framer Motion with the same stagger pattern as the existing nodes (`delay: 0.3 + i * 0.2`), appearing slightly before the dot and label.

### Technical Details

- Only `SpectrumSection.tsx` needs editing
- Icons imported individually from `lucide-react` (tree-shakable)
- No new dependencies required

