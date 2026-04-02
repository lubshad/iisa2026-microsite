<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# IISA 2026 UI Reference Rules

## Source of Truth

- The canonical visual reference for this landing page is `/Users/lubshad/Desktop/iisa2026/stitch_call_for_papers_iisa_2026/code.html`.
- The screenshot `/Users/lubshad/Desktop/iisa2026/stitch_call_for_papers_iisa_2026/screen.png` is a secondary visual check only.
- When there is any mismatch between the current app and the reference, match `code.html`.

## Typography

- Use the same font-role system as the reference:
  - `font-body` for default body text
  - `font-label` for small uppercase labels
  - `font-headline` for serif display headings
- Preserve `font-serif` specifically where the reference uses it literally, such as the navbar and footer `IISA 2026` brand.
- Do not replace these roles with ad hoc font choices unless the reference is changed too.

## Color Fidelity

- For reference-critical colors, prefer explicit hex values over indirect theme-token guesses.
- Important colors currently used by the approved UI:
  - Primary blue: `#00375e`
  - Brand blue variant: `#1E4E79`
  - Gold accent: `#745b04`
  - Light gold accent: `#ffe08d`
  - Light section background: `#f9f9f9`
  - Muted section background: `#f3f3f4`
- If a visual accent is missing or looks off, first check whether a token class should be replaced by the exact reference color.

## Decorative Details

- Preserve all reference accents exactly:
  - Gold underline below `About the Conference`
  - Gold left border on the hero theme block
  - Gold active underline in the navbar
  - Gold hero label text and hero metadata icons
  - Light gray/soft borders and footer rules matching the reference
- Do not simplify or remove decorative lines, underlines, accent borders, or subtle background shapes.

## Section Backgrounds

- Match section backgrounds to the reference explicitly:
  - `About the Conference`: `#f9f9f9`
  - `Organizers & Strategic Partners`: `#f3f3f4`
  - `Conference Tracks` cards: `#f3f3f4`
  - Footer background: `#F3F3F4`
- If a section background is visually important in `code.html`, preserve it with the exact color.

## Components

- Keep the page split into reusable Next.js components, but the rendered markup, spacing, text, and styling should stay aligned with the reference HTML.
- It is acceptable to use `next/image` and local SVG icons instead of raw HTML `img` tags or Material Symbols fonts, but the final appearance must still match the reference.
- Do not introduce new visual systems, alternative palettes, or re-interpretations of the design without being asked.

## Editing Guidance

- When updating this page, audit for:
  - font-family mismatches
  - accent color mismatches
  - background color mismatches
  - missing underlines, borders, or decorative rules
  - spacing drift in the navbar, hero, and section headers
- Before concluding a UI task, compare against `code.html` for exact classes, text roles, and visual accents.
