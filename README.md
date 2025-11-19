# Providence Living - Landing Page Demo

A modern, responsive landing page for Providence Living's new Prince George facility, showcasing the innovative Home for Us (H4U) care model.

## Overview

This is a front-end demo built with Next.js 15, React 18, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. The landing page features:

- **Hero Section** with animated gradient background and call-to-action buttons
- **Sticky Stats Bar** that follows users as they scroll
- **About Facility** section with image grid layout
- **Why Prince George** section highlighting the benefits of living in Prince George
- **Why Work With Us** tabbed section showcasing professional growth, culture, and compensation
- **Email Signup Form** with validation and success state (front-end only, no backend)
- **H4U Model** section with horizontal scroll cards explaining the care philosophy
- **FAQ Section** with accordion-style questions and answers
- **Footer** with navigation, social links, and indigenous land acknowledgment

## Brand Colors

The design uses Providence Living's brand colors:
- **Primary (Pantone 288c)**: `#003DA5` - Deep blue
- **Primary Light (Pantone 288c 70%)**: `#4A6FB5` - Lighter blue
- **Accent (Pantone 314c)**: `#00ABC8` - Teal/cyan

## Features

### Form Collection
The signup form collects three key pieces of information:
1. **Name** (First and Last)
2. **Email Address**
3. **Current Status** (dropdown with 3 options):
   - A student interested in healthcare
   - A current healthcare worker
   - Interested in changing careers to healthcare

### Animations
- Smooth scroll animations using Framer Motion
- Fade-in effects as sections enter the viewport
- Interactive hover states on cards and buttons
- Success animation on form submission
- Parallax effects and scroll indicators

### Responsive Design
- Mobile-first approach
- Horizontal scroll cards on mobile for the H4U Model section
- Hamburger menu ready (navigation structure in place)
- Optimized layouts for tablet and desktop

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
pl-landing-page/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Hero.tsx             # Hero section
│   ├── StatsBar.tsx         # Sticky stats bar
│   ├── AboutFacility.tsx    # About facility section
│   ├── WhyPrinceGeorge.tsx  # Why Prince George section
│   ├── WhyWorkWithUs.tsx    # Why work with us (tabbed)
│   ├── SignupForm.tsx       # Email signup form
│   ├── H4UModel.tsx         # Home for Us model section
│   ├── FAQ.tsx              # FAQ accordion
│   └── Footer.tsx           # Footer
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies

```

## Form Submission

**Note:** This is a front-end demo only. The form does not connect to a backend or database. When the form is submitted:

1. Client-side validation is performed
2. A success message is displayed with a checkmark animation
3. Form data is logged to the console (for demo purposes)
4. The form resets after 5 seconds

To integrate with a backend:
- Add API endpoint in `app/api/signup/route.ts`
- Update the form submission handler in `components/SignupForm.tsx`
- Connect to your email marketing service or database

## Customization

### Colors
Brand colors can be modified in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#003DA5",
    light: "#4A6FB5",
  },
  accent: {
    DEFAULT: "#00ABC8",
    light: "#E5F6F9",
  },
}
```

### Content
All content is hardcoded in the component files for easy customization:
- Hero messaging: `components/Hero.tsx`
- Stats: `components/StatsBar.tsx`
- Features: `components/AboutFacility.tsx`
- Benefits: `components/WhyPrinceGeorge.tsx`
- Testimonials: `components/WhyWorkWithUs.tsx`
- FAQs: `components/FAQ.tsx`

### Images
Replace placeholder gradients with actual images:
1. Add images to the `public/` folder
2. Update the background styles in relevant components
3. Use Next.js `<Image>` component for optimization

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended) - Zero configuration
- **Netlify** - Great for static sites
- **AWS Amplify** - Full-stack hosting
- **Self-hosted** - Any Node.js server

### Vercel Deployment

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

## Accessibility

The landing page includes:
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Screen reader friendly content

## Performance Optimizations

- Lazy loading for images (when implemented)
- Component-level code splitting
- Optimized animations with Framer Motion
- Minimal external dependencies
- CSS-in-JS for critical styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## Future Enhancements

- Backend integration for form submissions
- Email newsletter service integration
- CMS integration for content management
- Real image gallery with lightbox
- Video testimonials
- Multi-language support
- Analytics integration
- SEO optimization

## License

This project is proprietary to Providence Living.

## Contact

For questions or support, contact: careers@providenceliving.ca

---

**Built with ❤️ for Providence Living**
