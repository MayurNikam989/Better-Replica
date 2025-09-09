# Better Replica (Next.js + SCSS)

An educational multi-page web app that approximates the design and basic functionality of four Better.com pages:
- Home (`/`)
- About Us (`/about-us`)
- Mortgage Calculator (`/mortgage-calculator?taxes=265&zip=421005`)
- Start (`/start`)

## Tech
- Next.js App Router
- React 18
- SCSS modules + global SCSS
- Fully responsive layout

## Quick start
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev
# app runs at http://localhost:3000

# (Optional) Build for production
npm run build && npm start
```

## Notes
- This project intentionally avoids any Better.com trademarks, logos, or proprietary assets.
- The calculator uses the standard amortization formula to compute principal & interest, then adds taxes/insurance/HOA.
- URL query string stays in sync for `taxes` and `zip` on the calculator page.
