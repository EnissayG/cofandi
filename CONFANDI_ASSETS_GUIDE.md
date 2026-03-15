# Confandi Brand Assets Integration Guide

This guide explains how to integrate your brand assets into the Confandi website.

## Assets to Upload

Place these files in the `/public` directory of your project:

1. **Copperplate Gothic Bold Regular.ttf** - Custom brand font
2. **logo.png** - Confandi logo (should have both blue and white versions)
3. **Colour-and-Font-Details.jpg** - Brand guidelines reference
4. **001.jpg** - Product/machine photo #1
5. **DSC02647.jpg** - Product/machine photo #2

## Integration Steps

### 1. Font File
- Place `Copperplate Gothic Bold Regular.ttf` in `/public/`
- The font is already configured in `/src/styles/fonts.css`

### 2. Logo
- Place `logo.png` in `/public/`
- Update `/src/app/components/Navigation.tsx`:
  ```tsx
  // Replace the text logo with:
  <img src="/logo.png" alt="Confandi" className="h-8 md:h-10" />
  ```

### 3. Hero Section Image
- Update `/src/app/components/Hero.tsx`:
  ```tsx
  // Replace the ImageWithFallback src with:
  src="/001.jpg"  // or DSC02647.jpg, whichever fits better for hero
  ```

### 4. Machine Showcase Images
- Update `/src/app/components/MachineShowcase.tsx`:
  ```tsx
  // Replace the placeholder images with:
  src="/001.jpg"
  src="/DSC02647.jpg"
  ```

### 5. Brand Color Verification
- Review `/src/styles/theme.css` to ensure `--primary: #2A3B8F` matches your brand blue
- Adjust if needed based on `Colour-and-Font-Details.jpg`

## Current Placeholder Images

The website currently uses Unsplash images as placeholders:
- Coffee machine images
- Coffee/beverage close-ups
- Product detail shots

Replace these with your actual brand photography for the best results.

## Typography Notes

- **Poppins Light (300)** is used for body text
- **Poppins Medium (500)** is used for headings
- **Poppins SemiBold (600)** is used for large titles
- **Copperplate Gothic Bold** is used sparingly for brand moments (logo, special accents)

## Responsive Breakpoints

The design is optimized for:
- Mobile: 390px (iPhone standard)
- Tablet: 768px
- Desktop: 1440px

All sections are fully responsive and mobile-first.

## Color Palette

- Primary Brand Blue: `#2A3B8F`
- White/Base: `#FFFFFF`
- Text Gray: `#717182` (muted)
- Dark Text: `oklch(0.145 0 0)`
- Light Background: `#F9FAFB`

## Questions?

Review the brand guidelines in `Colour-and-Font-Details.jpg` for any additional customization needs.
