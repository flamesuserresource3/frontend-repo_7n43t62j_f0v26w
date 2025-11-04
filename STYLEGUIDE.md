ZapDM Landing Page Style Guide

Brand Essence
- Contemporary, minimal yet bold. Professional but approachable.
- Friendly copy, human-centric visuals, and confident CTAs.

Core Palette
- Primary Background: #FFFFFF
- Primary Text: #333333
- Brand Accent (Primary): #FF5A5F (CTA buttons, highlights, icons)
- Secondary Accent (Optional): Soft gray tints (#F9FAFB, #F3F4F6) and Emerald for success (#10B981)

Typography
- Headings: Inter / Geist / Manrope (Sans-Serif). Weight: 700–800. Tight tracking for hero.
- Body: Inter / Manrope. Comfortable size (16–18px base), 1.6 line-height.
- Eyebrow labels: uppercase, letter-spaced, accent color.

Layout & Spacing
- Section padding: 64–96px (mobile-first; larger on desktop).
- Max content width: 1200px. Use generous white space.
- Grid: 2–4 columns for cards on desktop, single column on mobile.

Imagery & Iconography
- Human-centric visuals of Instagram engagement.
- Icons: lucide-react (simple, outline). Use brand accent for icon foreground with subtle tinted background.
- 3D: Spline scene as the hero visual. Keep overlays pointer-events: none to preserve interaction.

Buttons & Interactions
- Primary: Background #FF5A5F, white text, medium radius, strong hover (opacity 95%).
- Secondary: Neutral backgrounds (white/gray/black depending on section), clear focus states.
- Cards: Subtle elevation. Hover: shadow-md, slight translate/scale is acceptable but keep it subtle.

Accessibility
- Color contrast AA+. Use dark text (#111–#333) on white.
- Focus rings visible: use accent ring where appropriate.
- Large touch targets (44px min height).

Navigation
- Sticky top navigation with minimal links: Features, Use Cases, Pricing, FAQ, Login, Get Started.
- Smooth scroll to anchors.

Content Blocks
- Hero: Headline, sub-head, primary + secondary CTAs, trust badge (Meta/Instagram API).
- How it Works: 3 steps with concise copy and icons.
- Features: 4 cards highlighting time savings, AI, compliance, 24/7.
- Use Cases: 3 cards (E‑commerce, Coaches, Creators).
- Pricing: 4 tiers + enterprise mention, 7-day trial, cancel anytime, yearly savings.
- FAQ: Accordion with 4–6 common questions.
- CTA: High-contrast full-width reminder with two CTAs.
- Footer: Product/Company/Legal links, social icons, contact email.

Analytics
- GA4 supported via env var VITE_GA_ID. When provided, snippet loads automatically in the app.

Tone of Voice
- Direct and second-person (you/your). Benefits-first. Short sentences. Avoid jargon.

Performance
- Mobile-first, lazy/async assets, small SVG icons, optimized 3D embed.
