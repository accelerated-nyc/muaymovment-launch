

## Add Meaningful Micro-Animations and Transitions

After reviewing every section of the codebase, here's where impactful animations can be added without over-cluttering the experience.

---

### 1. Hero Section -- Parallax Background and Animated Accent Line

- Add a subtle parallax scroll effect to the hero background image (moves slower than content) using `useScroll` and `useTransform` from Framer Motion.
- Animate the diagonal gold accent line to slowly "draw" downward on page load.
- Add a staggered letter or word reveal on the main headline ("Rewiring Movement. Reclaiming Power.") instead of a simple fade-up.

### 2. Logo -- SVG Draw Animation

- Animate the hexagonal logo SVG paths to "draw" themselves on page load using Framer Motion's `pathLength` animation (stroke-dasharray technique).
- Add a subtle continuous rotation or pulse on the inner circle.

### 3. Nav Links -- Underline Sweep on Hover

- Add a gold underline that sweeps in from left on hover for each nav link, using a CSS `::after` pseudo-element with `scaleX` transform.

### 4. Problem Section -- Stat Number Glow Pulse

- After the count-up completes, add a brief gold glow/pulse on each stat number to draw the eye.
- Add staggered scale-in on the stat cards (slight `scale(0.95)` to `scale(1)` alongside the existing fade).

### 5. Method Section -- Card Stagger with Slide-In

- Change the method cards from a simple fade-up to a slide-in from the right (`x: 40` to `x: 0`) to create directional movement that contrasts with the left-column text.
- Animate the gold top-bar (`w-8 h-px`) inside each card to draw itself (width from 0 to full) on scroll reveal.
- Animate the blockquote with a left-border that draws downward.

### 6. Video Showcase -- Ambient Drift on Thumbnails

- Add a slow CSS ambient float animation with staggered `animation-delay` on each video placeholder so they gently drift when idle (already partially defined in CSS but not applied in `VideoShowcase.tsx`).

### 7. About Section -- Image Reveal and Frame Offset Animation

- Add a clip-path or mask reveal on the trainer image (reveal from bottom to top on scroll).
- Animate the gold offset frame: it starts overlapping the image and shifts to its offset position on scroll-reveal.
- Animate the grayscale-to-color transition on scroll into view (not just hover).

### 8. Pricing Section -- Featured Card Scale Entrance

- Give the featured "Most Popular" card a slightly different entrance: scale from `0.95` to `1.0` with a brief delay, making it feel like it "pops" into prominence.
- Animate the "Most Popular" badge with a shimmer/glow pulse after it enters.
- Add a subtle vertical translate on hover for all pricing cards (lift effect, e.g., `translateY(-4px)`).

### 9. Scheduling Section -- Interactive Micro-Feedback

- Add a brief scale bounce (`1.0 -> 1.05 -> 1.0`) on calendar date and time slot selection.
- Animate the Zoom/In-Person toggle with a sliding background indicator (gold bar slides between the two options) rather than an instant swap.
- Add a gold ripple effect on the "Confirm Booking" button click.

### 10. Testimonials Section -- Quote Mark Fade-In and Card Stagger

- Add an animated oversized gold quotation mark (`"`) that fades in behind each testimonial quote with a slight scale-up.
- Add a subtle left-border draw animation on each card (thin gold line draws top-to-bottom on entry).

### 11. Footer Section -- Ambient Glow Pulse

- Make the existing ambient gold glow blob at the bottom pulse slowly (opacity oscillation).
- Add a staggered fade-in on the social links and contact info (currently they have no animation).

### 12. Section Dividers -- Enhanced Line Draw

- Upgrade the gold gradient `h-px` dividers between sections to animate on scroll (draw from center outward to both edges) using Framer Motion, similar to what `LineDraw` already does.

---

### Technical Approach

- Most animations will use **Framer Motion** (`motion.div`, `useScroll`, `useTransform`, `useInView`), extending patterns already in `ScrollReveal.tsx`.
- CSS-only animations for hover states (underlines, lifts, glows) using Tailwind utilities and custom classes in `index.css`.
- All animations will respect `prefers-reduced-motion` via the existing media query in `index.css`.
- No new dependencies needed.

