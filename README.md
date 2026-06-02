# Shapes Lab

Website for [shapeslab.design](https://shapeslab.design) — an independent product design studio led by Dan.

## Pages

- **Homepage** (`index.html`) — Sticky sidebar with studio info + scrollable portfolio grid
- **Pricing** (`pricing.html`) — Subscription plan, features, testimonials, and FAQ

## Stack

- HTML
- CSS
- Vanilla JavaScript

No frameworks. No dependencies.

## Project Structure

```
shapeslab-rebuild-v2/
├── index.html          # Homepage
├── pricing.html        # Pricing page
├── styles.css          # All styles
├── animations.css      # Entrance animation classes
├── script.js           # FAQ accordion + visitor location
├── robots.txt
├── sitemap.xml
├── favicon.png
└── images/
    ├── og-image.png    # Open Graph image (1200×630)
    ├── andrew.png      # Testimonial avatar
    ├── ejyke.png       # Testimonial avatar
    └── ...             # Portfolio images
```

## Fonts

The site uses [Open Runde](https://github.com/lauridskern/open-runde). Font files are not included in this repo.

To enable:
1. Add `OpenRunde-Regular.woff2`, `OpenRunde-Medium.woff2`, and `OpenRunde-SemiBold.woff2` to a `/fonts` folder
2. Uncomment the `@font-face` block at the top of `styles.css`

Until then, the site falls back to the system font stack.

## Running Locally

No build step needed — open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

## Deployment

Deployed via [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Point either platform at the repo root — no configuration required.
