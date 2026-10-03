# Vagwiin

Marketing website for **Vagwiin**, an enterprise IT infrastructure and multi-service solutions provider based in Jodhpur, Rajasthan, India.

The site is a client-side-rendered React single-page application built with Vite and Tailwind CSS.

---

## Services

The site presents eight service lines:

| Service | Summary |
| --- | --- |
| IT Infrastructure | Enterprise servers, networking, and compute hardware |
| Automation & Smart Solutions | Building and process automation |
| Security & Surveillance | Access control, CCTV, and monitoring systems |
| Construction & Infrastructure | Physical infrastructure build-out |
| Food & Catering Services | Industrial and site catering |
| CSR & Social Projects | Corporate social responsibility initiatives |
| Bulk Supply & Procurement | Scaled hardware sourcing and supply |
| Consulting & Support | Advisory, deployment, and ongoing technical support |

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| UI library | React 19 |
| Routing | React Router 7 |
| Animation | Framer Motion 12 |
| Icons | lucide-react |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 3 |
| Linting | ESLint 9 |

---

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server with HMR (http://localhost:5173)
npm run build    # produce a production build in dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

---

## Routes

All routing is handled client-side by React Router.

| Path | Page | File |
| --- | --- | --- |
| `/` | Home | `src/pages/Home.jsx` |
| `/services` | Our Services | `src/pages/ServicesPage.jsx` |
| `/about` | About Us | `src/pages/AboutPage.jsx` |
| `/contact` | Contact | `src/pages/ContactPage.jsx` |
| `/privacy` | Privacy Policy | `src/pages/PrivacyPolicyPage.jsx` |
| `/terms` | Terms of Use | `src/pages/TermsOfServicePage.jsx` |

> **Note:** `/privacy` and `/terms` are plain-language policies written for visitors, not formal legal instruments. Both follow the laws of India — the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 for the Privacy Policy; the Indian Contract Act, 1872, the Sale of Goods Act, 1930, and the Consumer Protection Act, 2019 for the Terms of Use. Both are prepared and maintained by Visuark, and both render through `src/components/LegalLayout.jsx`. Before going live, Vagwiin should have Indian counsel review them, and the commercial terms that Vagwiin must set for itself (payment terms, warranty periods, liability cap) are currently written as general statements rather than figures.

---

## Project Structure

```
├── public/                  # Static assets (favicon, service imagery)
├── src/
│   ├── components/          # Reusable sections and widgets
│   │   ├── LegalLayout.jsx  # Shared shell for the Privacy and Terms pages
│   │   ├── Footer.jsx       # Site-wide footer, contact links, Visuark credit
│   │   └── ...
│   ├── pages/               # Route-level page components
│   ├── App.jsx              # Router and route definitions
│   └── main.jsx             # React entry point
├── DEPLOYMENT.md            # SPA routing and hosting guide
├── netlify.toml             # Netlify config + SPA rewrite
├── vercel.json              # Vercel config + SPA rewrite
└── .htaccess                # Apache SPA rewrite (copy to dist/ on deploy)
```

---

## Deployment

This is a single-page application, so the host must rewrite all routes to `index.html`. Configuration files for Netlify, Vercel, and Apache are already included.

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the full guide, including Nginx configuration and troubleshooting.

---

## Known Issues

- **Contact and newsletter forms are not yet connected to a backend.** The contact form validates input and then displays a confirmation alert without transmitting anything; the newsletter form has no submit handler. A backend endpoint (for example Netlify Forms, Formspree, or a webhook) needs to be wired in before these forms can collect real enquiries. The Privacy Policy's "Information We Collect" section records how data is handled.
- **Legal pages have no company identifiers.** `/privacy` and `/terms` do not list a CIN, GSTIN, or grievance officer. Add these and have Indian counsel review both pages before going live.
- **No 404 route is defined.** Any unmatched URL renders an empty shell with a 200 response instead of a not-found page. Consider adding a catch-all route.
- **`npm run lint` currently fails repo-wide** with `no-unused-vars` false positives on the lowercase `motion` import. `eslint.config.js` enables JSX syntax but applies no JSX-aware rule, so ESLint cannot see that `<motion.div>` consumes the identifier. The `varsIgnorePattern: '^[A-Z_]'` exemption spares capitalised names, which is why only `motion` is flagged. Add `eslint-plugin-react` with `react/jsx-uses-vars` to resolve it properly.
- **Minor horizontal overflow on mobile** (~390px) caused by a decorative blur element in `src/components/Hero.jsx` and the form panel in `src/components/Contact.jsx`.

---

## License

Released under the [MIT License](./LICENSE).

Copyright © 2026 Visuark. Note that the MIT Licence covers the source code only — it does not extend to the Vagwiin name, logo, trade marks, written content, or third-party assets.

---

## Credits

Designed & developed by **[Visuark](https://visuark.com)** — made with ❤️
