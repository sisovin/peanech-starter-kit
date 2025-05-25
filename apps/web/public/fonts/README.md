# Local Fonts Directory

This directory contains local font files for the project. The following fonts are referenced in `styles/fonts.css`:

## Required Font Files:

### Premium Fonts (Download separately)
- `Satoshi-Variable.woff2` - Modern sans serif
- `GeneralSans-Variable.woff2` - Versatile sans serif  
- `ClashDisplay-Variable.woff2` - Bold display font
- `CabinetGrotesk-Variable.woff2` - Geometric sans serif
- `Lexend-Variable.woff2` - Reading-optimized font
- `BricolageGrotesque-Variable.woff2` - Unique display font

## How to add fonts:

1. Download the font files in WOFF2 format
2. Place them in this `/public/fonts/` directory
3. The fonts will automatically be available via the CSS `@font-face` definitions

## Alternative: Use Fontsource (Already Set Up)

The project is already configured with Fontsource versions of these fonts:
- Inter
- DM Sans  
- Lexend
- Playfair Display
- Source Serif Pro
- Crimson Text
- JetBrains Mono
- Fira Code

These are loaded via the imports in `lib/fonts.ts` and work without requiring local files.

## Font Testing

Visit `/fonts` to see all available fonts in action.
