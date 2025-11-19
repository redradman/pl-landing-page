# Assets & Images Directory

This directory contains all static assets for the Providence Living landing page.

## Folder Structure

```
public/
├── images/
│   ├── hero/              # Hero section background images
│   ├── facility/          # Facility photos (bistro, art studio, etc.)
│   ├── prince-george/     # Prince George city/landscape photos
│   ├── team/              # Staff and team photos
│   └── logos/             # Company logos and branding assets
└── README.md
```

## How to Use Images in Next.js

### Option 1: Next.js Image Component (Recommended)
Provides automatic optimization, lazy loading, and responsive images.

```tsx
import Image from "next/image";

export default function Component() {
  return (
    <Image
      src="/images/hero/main-bg.jpg"
      alt="Providence Living facility"
      width={1920}
      height={1080}
      priority // Use for above-the-fold images
      className="object-cover"
    />
  );
}
```

### Option 2: Regular HTML img tag
For simple use cases or when you need more control.

```tsx
<img
  src="/images/facility/bistro.jpg"
  alt="Community bistro"
  className="w-full h-auto rounded-lg"
/>
```

### Option 3: Background Images (CSS)
```tsx
<div
  className="h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/prince-george/landscape.jpg')" }}
/>
```

## Image Naming Conventions

- Use lowercase with hyphens: `main-hero-bg.jpg`
- Be descriptive: `bistro-dining-area.jpg` not `img1.jpg`
- Include dimensions in filename if needed: `logo-512x512.png`

## Recommended Image Formats

- **Photos**: `.jpg` or `.webp` (for better compression)
- **Logos/Graphics**: `.png` or `.svg` (for transparency)
- **Icons**: `.svg` (scalable and small file size)

## Image Optimization Tips

1. Compress images before uploading (use tools like TinyPNG, ImageOptim)
2. Use appropriate dimensions (don't upload 4K images if displaying at 1080p)
3. Consider using `.webp` format for modern browsers (Next.js can auto-convert)
4. Use `priority` prop on above-the-fold images
5. Use `loading="lazy"` on below-the-fold images

## Example Placements

- **Hero Section**: `/images/hero/hero-bg.jpg`
- **About Facility Bento Cards**: `/images/facility/bistro.jpg`, `/images/facility/art-studio.jpg`
- **Prince George Carousel**: `/images/prince-george/city-view-1.jpg`
- **H4U Model Comparison**: `/images/facility/household-living.jpg`
- **Company Logo**: `/images/logos/providence-living-logo.svg`
