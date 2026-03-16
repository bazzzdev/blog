# BD Favicon Design

## Goal

Replace the current site favicon with a square monogram that uses the lowercase letters `bd` in black on the same background color as the light theme.

## Agreed Design

- Use a square favicon with a solid `#fbf8f2` background.
- Center lowercase `bd` both horizontally and vertically.
- Keep the letters black and do not change them by theme.
- Use a calm bookish serif direction rather than a high-contrast editorial mark.
- Use the balanced square composition that preserves some margin around the letters for better small-size legibility.
- Keep the favicon visually consistent across SVG and ICO outputs.

## Delivery Approach

- Keep `SVG + ICO` as the delivery format.
- Update `public/favicon.svg` as the primary source asset.
- Update `public/favicon.ico` to match the same centered monogram for fallback support.
- Reuse the existing favicon links in the document head unless a minor cleanup is needed for explicitness.

## Files In Scope

- `public/favicon.svg`
- `public/favicon.ico`
- `src/layouts/SiteLayout.astro` if favicon link tags need adjustment

## Constraints

- No dark-mode-specific favicon.
- No border, badge, or additional symbol around the letters.
- The favicon should remain readable at browser-tab sizes such as `16x16` and `32x32`.
- Changes should stay limited to favicon assets and related head metadata.

## Validation

- Visual check of the monogram at small sizes.
- Confirm both favicon files exist and match the agreed design.
- `npm run build`
