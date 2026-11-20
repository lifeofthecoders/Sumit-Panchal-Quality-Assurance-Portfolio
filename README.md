# Sumit Panchal — Quality Assurance Portfolio

A responsive one-page QA portfolio for Sumit Panchal, built with **React 19, Vite, Framer Motion, Lucide React, and plain CSS custom properties**. The original near-black, off-white, crimson editorial design is retained.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Portfolio content

- **Profile:** Sumit Panchal — Manual QA Engineer / Quality Assurance Analyst
- **Experience:** Echo Innovate IT — June 2021 to Present
- **Location:** Ahmedabad, Gujarat, India
- **Email:** `sumitpanchal5225@gmail.com`
- **Phone / WhatsApp:** `+91 98998 99899`
- **LinkedIn:** `https://www.linkedin.com/in/sumit-panchal-b790a8236/`
- **GitHub:** `https://github.com/lifeofthecoders`

## Included sections and interactions

- Hero section with portrait, QA positioning, stats, reading progress, and anchor navigation.
- Eight detailed project case studies using the supplied project banners, card images, and gallery screenshots.
- Project category filters and live search.
- Each project opens as a dedicated full-page route (not a popup), with a clean full-width banner, a single category/title/domain heading, Project Overview, Testing Coverage, project links, three visual references, QA contributions, and key workflows.
- Tools strip with continuous horizontal scrolling, working pause/resume, previous/next controls, touch/trackpad scrolling, and an expanded grid.
- Before/after defect comparison slider with full 0–100% travel to both edges.
- Live-linked sample email/password values in both comparison states. The password is masked in the screenshots; sample values are fictional. The validation demo is local only and does not authenticate or send data.
- About section with education, skill categories, five-step QA workflow, and QA contribution highlights.
- Experience and education accordions.
- Searchable, filterable, numbered three-column certificate archive styled consistently with the project listing, with a high-contrast black image stage, readable metadata, full-size lightbox, and keyboard navigation. The archive contains 31 credential records and 32 certificate image files.
- Contact links, WhatsApp shortcut, resume download, and enquiry form prepared through the visitor's email application.
- Reading progress indicator, active six-link navigation (Home, Work, About, Journey, Certificates, Contact), responsive mobile menu, Framer Motion reveals, animated “TEST SMARTER” contact card, and persistent Motion On/Off preference.
- Green pulsing availability beacon, browser-history project navigation, Escape/Backspace return, and horizontal trackpad/touch swipe return from project detail pages.

## Where to update content

- `src/data/portfolio.ts` — profile, education, experience, project records, achievements, skills, and certificate records.
- `src/components/Contact.jsx` — contact form and animated showcase card.
- `src/components/Compare.jsx` — the before/after issue and the interactive validation example.
- `src/components/ToolsMarquee.jsx` — carousel controls and tool records.
- `src/components/ProjectPage.jsx` — dedicated project case-study page and back navigation.
- `src/styles/app.css` — colors, typography, layout, responsive styling, and effects.

## Supplied media

- `public/project/` — project banners, card artwork, and gallery screenshots.
- `public/certificates/` — certificate image files.
- `public/sumit-panchal-portrait.png` — portrait used in the hero.
- `public/resume/Sumit_Panchal_Resume.pdf` — supplied resume.

Keep asset filenames stable when changing portfolio records, or update the corresponding paths in `src/data/portfolio.ts`.

## Motion accessibility

Use the header's **Motion on/off** control to switch motion effects on or off. The preference is saved in browser local storage. When no preference exists, the page uses the visitor's `prefers-reduced-motion` setting. The continuous tools strip and contact showcase are also tied to this preference.

## Contact form behavior

The contact form validates required fields in the browser and then opens a pre-filled `mailto:` message. It does not store or transmit submissions to a server. Connect a form provider or backend endpoint if server-side submissions are required.

## Visual polish update (v5)

This update keeps the existing dark/red portfolio design and improves the requested interactions and section order:

- Rebuilt the homepage entrance sequence for the large `PORTFOLIO` title, portrait, intro copy, role, CTA, stats, and bottom navigation. The sequence runs on a page refresh while Motion is enabled.
- Connected the “FROM REQUIREMENT TO RELEASE” timeline to scroll progress. Its red line grows as the page scrolls down and reverses as the visitor scrolls upward; the node centers align with the line.
- Refined the before/after comparison so its divider can reach both exact ends. The handle is intentionally half-visible at the left and right edges. Email updates flow into both preview states and password values remain masked.
- Added clearer focus states and spacing to the demo and contact form fields.
- Moved `TESTING COVERAGE` and the available project links immediately below `PROJECT OVERVIEW`, followed by the three visual references and QA contributions.
- Kept the project detail view focused on the selected case study (no “Explore Other QA Projects” section).
- Reworked the footer using the three-column CTA/footer reference: brand and copyright, contact/social links and the Morse-code identity, plus quality commitment links.

### Run locally

```bash
npm install
npm run dev
```

The source JSX/TSX and CSS syntax were checked for this update, and the referenced project/certificate assets are present. A full Vite production build could not be run in the packaging environment because dependencies were not available in the local npm cache.


## Latest polish update (v10)

- Replaced the red availability marker with a green radar-style pulse that respects Motion Off.
- Added Home and Certificates links to the primary navigation so every main section is reachable from the navbar.
- Removed duplicated project headings from the banner; project category, title, and genre now appear once below the clean banner. The banner Back control reads “BACK”.
- Improved project-detail return behavior for browser history, keyboard shortcuts, horizontal trackpad wheel gestures, and touch swipes.
- Restyled certificates as numbered, image-led cards in the same three-column rhythm as the project listing and increased certificate metadata contrast and size.
- Made Back to Top match the Explore My GitHub link and refined the footer spacing, three-column alignment, and red-underlined Morse-code home link.
