---
description: "Workspace instructions for the portfolio frontend. Always follow .github/DESIGN.md before coding."
---

# Copilot Instructions

- Before making any UI or code changes, read and follow [`DESIGN.md`](DESIGN.md). Treat it as the source of truth for colors, typography, spacing, layout, and component style.
- This is a frontend-only portfolio project. Prefer solutions built with React, TypeScript, and Vite. Do not add backend, server, database, or API infrastructure unless the user explicitly asks for it.
- Keep the implementation aligned with the "Obsidian Logic" design system in `DESIGN.md`: deep dark surfaces, emerald accents, glass-like cards, a centered desktop container, 8px spacing rhythm, Inter for body text, and Space Grotesk for labels and technical metadata.
- Favor reusable, accessible, responsive components that look polished in a personal portfolio setting. Keep the UI intentional and consistent across sections.
- When creating or refining pages, prioritize clear hierarchy, strong typography, and visual rhythm over generic boilerplate layouts.
- Use TypeScript types for component props and data structures where it improves clarity. Keep code simple and avoid unnecessary abstraction.
- Preserve existing conventions in the repo unless a change is needed to satisfy the design system or the user's request.
- If a request conflicts with `DESIGN.md`, follow `DESIGN.md` unless the user explicitly overrides it.