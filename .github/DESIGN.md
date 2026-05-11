---
name: Monochrome
colors:
  surface: "#ffffff"
  surface-dim: "#f5f5f5"
  surface-bright: "#ffffff"
  surface-container-lowest: "#fafafa"
  surface-container-low: "#f5f5f5"
  surface-container: "#eeeeee"
  surface-container-high: "#e0e0e0"
  surface-container-highest: "#d3d3d3"
  on-surface: "#000000"
  on-surface-variant: "#333333"
  inverse-surface: "#000000"
  inverse-on-surface: "#ffffff"
  outline: "#666666"
  outline-variant: "#999999"
  surface-tint: "#000000"
  primary: "#000000"
  on-primary: "#ffffff"
  primary-container: "#1a1a1a"
  on-primary-container: "#ffffff"
  inverse-primary: "#ffffff"
  secondary: "#4d4d4d"
  on-secondary: "#ffffff"
  secondary-container: "#808080"
  on-secondary-container: "#ffffff"
  tertiary: "#666666"
  on-tertiary: "#ffffff"
  tertiary-container: "#999999"
  on-tertiary-container: "#ffffff"
  error: "#ff5252"
  on-error: "#ffffff"
  error-container: "#cc0000"
  on-error-container: "#ffffff"
  primary-fixed: "#1a1a1a"
  primary-fixed-dim: "#000000"
  on-primary-fixed: "#ffffff"
  on-primary-fixed-variant: "#e0e0e0"
  secondary-fixed: "#f5f5f5"
  secondary-fixed-dim: "#e0e0e0"
  on-secondary-fixed: "#000000"
  on-secondary-fixed-variant: "#4d4d4d"
  tertiary-fixed: "#d3d3d3"
  tertiary-fixed-dim: "#999999"
  on-tertiary-fixed: "#000000"
  on-tertiary-fixed-variant: "#4d4d4d"
  background: "#ffffff"
  on-background: "#000000"
  surface-variant: "#f0f0f0"
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  mono-label:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.0"
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: "1.4"
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  section-gap: 8rem
  stack-gap: 1.5rem
  grid-gutter: 2rem
  edge-margin: 2rem
---

## Brand & Style

The brand personality is rooted in technical authority and structural precision, tailored for a Backend Software Engineer. This design system evokes a sense of "stability under load" and architectural clarity. The aesthetic combines **Minimalism** with **Glassmorphism**, emphasizing high-density information presented through low-friction interfaces.

Targeted at technical recruiters and engineering leads, the UI avoids superficial decoration in favor of functional elegance. The emotional response should be one of "Premium Technical Reliability"—where the interface feels as robust and well-optimized as the code it showcases.

## Colors

The palette is centered on deep obsidian foundations to reduce eye strain and emphasize depth.

- **Primary (#10B981):** A vibrant Emerald Green reserved for terminal-style highlights, success states, and primary calls to action.
- **Secondary (#1E293B):** Used for elevated surfaces, card backgrounds, and navigation elements.
- **Tertiary (#0F172A):** The base "Obsidian" background for the entire application.
- **Neutral (#94A3B8):** A cool-toned slate gray for body copy, ensuring high readability without the harshness of pure white.

## Typography

This design system utilizes **Inter** for its systematic, utilitarian precision across all functional text. To lean into the "high-tech" requirement, **Space Grotesk** is introduced as a label font for technical metadata, tags, and small identifiers, providing a geometric, futuristic contrast to the clean body copy.

Headlines use tight letter-spacing and heavy weights to ground the sections, while body text maintains generous line heights to ensure long-form technical descriptions remain digestible.

## Layout & Spacing

The layout follows a **Fixed Grid** model centered on a 1200px container for desktop. A rhythm of 8px increments (0.5rem) governs all spacing. Generous whitespace between sections (8rem) is intentional, allowing each project or technical deep-dive to exist in its own focus area.

Content is organized using a 12-column grid. Complex backend diagrams or code snippets should span 8-10 columns for readability, while sidebars or metadata columns occupy 2-4 columns.

## Elevation & Depth

Depth is communicated through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

- **Layer 0 (Background):** #0F172A.
- **Layer 1 (Glass Cards):** Background #1E293B at 60% opacity with a `backdrop-filter: blur(12px)`.
- **Borders:** Every card and interactive element features a crisp, 1px solid border (#1E293B) or a subtle gradient border that catches "light" from the top left.
- **Active States:** Elements being interacted with should glow subtly with an Emerald (#10B981) outer shadow with a large 20px blur and low (0.2) opacity.

## Shapes

The shape language is "Soft-Technical." Using a **0.25rem (4px)** base radius creates a precise, architectural feel that is more approachable than sharp corners but more serious than highly rounded "consumer" apps.

- **Buttons and Chips:** 4px radius.
- **Large Project Cards:** 8px radius (rounded-lg).
- **Progress Indicators:** Linear bars with flat ends to maintain the structural grid.

## Components

- **Project Cards:** Semi-transparent glass containers with a 1px border. Feature a title in H3, a short description in body-md, and a horizontal row of "Tech Tags."
- **Tech Tags (Chips):** Use Space Grotesk labels. Background: #1E293B, Text: #10B981. No border, tight padding.
- **Vertical Timelines:** A 2px solid line in #1E293B. Milestones are marked by 8px Emerald circles. Content is offset to the right with clear date labels in mono-label style.
- **Progress Indicators:** Horizontal bars for skill proficiency. The track is #1E293B; the fill is a solid #10B981. Use labels to the right of the bar rather than on top.
- **Buttons:**
  - _Primary:_ Solid #10B981 background, black text for high contrast.
  - _Outline:_ 1px #10B981 border, Emerald text, no background.
- **Input Fields:** Obsidian background, 1px slate border, Emerald focus ring.
