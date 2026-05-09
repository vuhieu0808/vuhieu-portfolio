import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#051424",
        "obsidian-dark": "#010f1f",
        surface: "#122131",
        "surface-low": "#0d1c2d",
        "surface-high": "#1c2b3c",
        "surface-highest": "#273647",
        emerald: "#4edea3",
        "emerald-dark": "#10b981",
        "text-light": "#d4e4fa",
        "text-muted": "#bbcabf",
        "on-primary-fixed": "#002113",
        "primary-fixed": "#6ffbbe",
        "surface-tint": "#4edea3",
        "on-secondary-container": "#aeb9d0",
        "on-error": "#690005",
        error: "#ffb4ab",
        "primary-container": "#10b981",
        "on-tertiary": "#283044",
        "surface-bright": "#2c3a4c",
        secondary: "#bcc7de",
        "on-primary-container": "#00422b",
        "tertiary-container": "#9ba2bb",
        "on-secondary": "#263143",
        "surface-dim": "#051424",
        background: "#051424",
        "on-tertiary-fixed-variant": "#3f465c",
        "on-secondary-fixed": "#111c2d",
        "surface-container-low": "#0d1c2d",
        "surface-container-high": "#1c2b3c",
        "outline-variant": "#3c4a42",
        "secondary-fixed": "#d8e3fb",
        "primary-fixed-dim": "#4edea3",
        "tertiary-fixed-dim": "#bec6e0",
        "on-tertiary-container": "#31394d",
        "error-container": "#93000a",
        "on-secondary-fixed-variant": "#3c475a",
        "tertiary-fixed": "#dae2fd",
        "on-error-container": "#ffdad6",
        primary: "#4edea3",
        "on-surface-variant": "#bbcabf",
        "inverse-on-surface": "#233143",
        "secondary-fixed-dim": "#bcc7de",
        "surface-variant": "#273647",
        "surface-container-lowest": "#010f1f",
        tertiary: "#bec6e0",
        "on-primary-fixed-variant": "#005236",
        "inverse-surface": "#d4e4fa",
        "on-surface": "#d4e4fa",
        "on-background": "#d4e4fa",
        "on-primary": "#003824",
        outline: "#86948a",
        "on-tertiary-fixed": "#131b2e",
        "inverse-primary": "#006c49",
        "surface-container": "#122131",
        "surface-container-highest": "#273647",
      },
      spacing: {
        "grid-gutter": "2rem",
        "stack-gap": "1.5rem",
        "section-gap": "8rem",
        "container-max": "1200px",
        "edge-margin": "2rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      fontSize: {
        h1: ["clamp(3rem, 5vw, 4.75rem)", { lineHeight: "1.1" }],
        h2: ["clamp(2rem, 3vw, 3rem)", { lineHeight: "1.2" }],
        h3: ["clamp(1.5rem, 2.5vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      maxWidth: {
        container: "1200px",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents }) {
      addBase({
        body: {
          "background-image":
            "radial-gradient(circle at top left, rgba(16, 185, 129, 0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(78, 222, 163, 0.08), transparent 26%), linear-gradient(180deg, #051424 0%, #010f1f 100%)",
          "background-attachment": "fixed",
        },
      });

      addComponents({
        ".app-shell": { "@apply relative overflow-clip": {} },
        ".page-content": { "@apply pt-[5.5rem]": {} },
        ".container": { "@apply w-full max-w-container mx-auto px-8": {} },
        ".section-block": { "@apply py-32": {} },
        ".eyebrow": {
          "@apply inline-flex items-center px-3 py-2 mb-6 text-emerald text-xs font-mono uppercase":
            {},
        },
        ".button-primary": {
          "@apply px-6 py-2 bg-emerald-dark text-obsidian font-semibold rounded transition-all":
            {},
        },
        ".button-outline": {
          "@apply px-6 py-2 border-2 border-emerald text-emerald font-semibold rounded transition-all":
            {},
        },
        ".hero-section": { "@apply flex flex-col gap-8 py-20 pb-8": {} },
        ".grid-12": { "@apply grid grid-cols-12 gap-8 items-center": {} },
        ".card-grid": { "@apply grid gap-8": {} },
        ".three-up": { "@apply grid-cols-3": {} },
        ".glass-card": {
          "@apply border border-slate-600 bg-slate-800 rounded-lg p-6": {},
        },
        ".project-card": {
          "@apply rounded-lg overflow-hidden transition-all border border-slate-600 bg-slate-800":
            {},
        },
        ".interactive-card": { "@apply cursor-pointer": {} },
        ".project-image-wrap": {
          "@apply relative aspect-video overflow-hidden": {},
        },
        ".project-image-overlay": {
          "@apply absolute inset-0 bg-black bg-opacity-10": {},
        },
        ".project-body": { "@apply grid gap-2 p-6": {} },
        ".project-title": {
          "@apply text-lg font-semibold text-text-light": {},
        },
        ".project-description": { "@apply text-sm text-text-muted": {} },
        ".tag-row": { "@apply flex flex-wrap gap-2": {} },
        ".tech-chip": {
          "@apply inline-flex items-center px-3 py-1 rounded text-xs font-mono bg-emerald-dark text-emerald border border-emerald":
            {},
        },
        ".skill-item": {
          "@apply flex flex-col gap-3 p-5 rounded-lg border border-slate-600 bg-slate-800 backdrop-blur-glass transition-all":
            {},
        },
        ".section-header": {
          "@apply grid grid-cols-[auto_1fr_auto] items-end gap-8 mb-12": {},
        },
        ".detail-modal-overlay": {
          "@apply fixed inset-0 z-50 flex items-center justify-center bg-obsidian backdrop-blur-lg p-4":
            {},
        },
        ".detail-modal-panel": {
          "@apply relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-lg border border-emerald bg-surface-low":
            {},
        },
        ".detail-modal-close": {
          "@apply absolute top-4 right-4 z-10 w-10 h-10 border border-emerald rounded-full bg-emerald-dark text-emerald font-mono text-lg cursor-pointer":
            {},
        },
        ".social-link": {
          "@apply w-11 h-11 flex items-center justify-center rounded border border-emerald bg-emerald-dark text-slate-400 transition-all hover:text-emerald":
            {},
        },
        ".contact-card": {
          "@apply relative grid p-12 rounded-lg overflow-hidden": {},
        },
        ".contact-form": { "@apply grid gap-5": {} },
        ".contact-form input": {
          "@apply w-full border border-slate-600 rounded bg-surface-low text-slate-100 p-4":
            {},
        },
        ".contact-form textarea": {
          "@apply w-full border border-slate-600 rounded bg-surface-low text-slate-100 p-4":
            {},
        },
        ".timeline-row": {
          "@apply relative grid grid-cols-2 gap-16 items-center": {},
        },
        ".timeline-node": {
          "@apply absolute left-1/2 top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2":
            {},
        },
        ".timeline-node span": { "@apply w-3 h-3 rounded-full bg-emerald": {} },
      });
    },
  ],
} satisfies Config;
