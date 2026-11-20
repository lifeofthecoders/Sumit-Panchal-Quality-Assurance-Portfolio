<div align="center">

# SUMIT PANCHAL | SENIOR QUALITY ANALYST - Quality Assurance Portfolio

### A cinematic, interactive portfolio showcasing 5+ years of software quality assurance experience, manual testing expertise, project case studies, and professional credentials.

[![Portfolio](https://img.shields.io/badge/Portfolio-Sumit%20Panchal-e5132b?style=for-the-badge&logo=vercel&logoColor=white)](https://sumit-panchal-quality-assurance-por.vercel.app/)
[![React](https://img.shields.io/badge/React-19-20232a?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat-square&logo=framer)](https://motion.dev/)
[![Lucide](https://img.shields.io/badge/Lucide%20React-Icons-f56565?style=flat-square&logo=lucide)]

**Designed, developed, and maintained by <span style="color: #2563EB;"><strong>Sumit Panchal</strong></span>.**

[Overview](#-overview) · [Features](#-portfolio-highlights) · [QA Focus](#-manual-qa-focus) · [Projects](#-project-case-studies) · [Technology](#-technology-stack) · [Setup](#-getting-started) · [Structure](#-project-structure) · [Deployment](#-deployment) · [Ownership](#-authorship--ownership)

</div>

---

## 🎯 Overview

This is my personal **Senior Quality Analyst | Manual QA Engineer portfolio**, built to present my professional journey, testing expertise, project case studies, education, certifications, and resume in a cinematic and interactive web experience.

I have 5+ years of experience in software quality assurance, testing web and mobile applications, and supporting reliable software releases. My work focuses on functional quality, usability, risk identification, clear defect reporting, and validating important user journeys.

The portfolio uses a dark visual identity with red accents, expressive typography, a large portrait-led hero section, motion-based transitions, interactive project case studies, searchable credentials, and a dedicated contact experience.

The project content highlights Functional, Regression, Smoke, Sanity, Exploratory, Black-Box, and Risk-Based Testing, along with requirement analysis, test design, test execution, defect lifecycle management, and collaboration within Agile teams.

> **Testing that protects. Quality that builds confidence.**

## ✨ Portfolio Highlights

| Area | What it provides |
|---|---|
| Hero section | Animated portfolio introduction, professional title, portrait, experience statistics, and featured-project action |
| About | Professional summary, QA approach, and testing interests |
| Selected work | Eight QA project case studies with category filters and text search |
| Project detail pages | Dedicated project pages with overview, role, domain, platforms, testing coverage, visual references, contributions, and workflows |
| QA comparison | Dedicated comparison/quality-focused content section |
| Professional journey | Education and professional experience timeline |
| Credentials | 31 certificate and learning records with category filters, search, and an image lightbox |
| Contact | Email, phone, WhatsApp, LinkedIn, GitHub, and project enquiry form |
| Resume | View/download access to the PDF resume |
| Motion preferences | Motion setting persisted in local storage and reduced-motion support |
| Responsive design | Layouts and interactions designed for desktop, tablet, and mobile screens |
| Visual details | Smooth motion, hover interactions, custom typography, iconography, and animated visual elements |

## 🧪 Manual QA Focus

My professional experience and portfolio highlight the following areas of software quality assurance.

### Manual Testing

- Functional Testing
- Regression Testing
- Smoke Testing
- Sanity Testing
- Exploratory Testing
- Black-Box Testing
- Retesting and Verification
- Web and Mobile Application Testing
- End-to-End Workflow Validation
- Usability and Compatibility Testing
- Security and Performance Testing awareness
- Risk-Based Testing

### Test Design and Documentation

- Requirement Analysis
- Test Planning
- Test Scenario Design
- Test Case Design
- Test Data Preparation
- Requirement Traceability
- Test Execution and Result Documentation
- Positive and Negative Test Scenarios
- Boundary and Edge Case Validation

### Defect Management

- Bug Identification and Reporting
- Defect Reproduction and Documentation
- Defect Lifecycle Management
- Severity and Priority Assessment
- Retesting and Regression Verification
- Root Cause Analysis support
- Clear Reproduction Steps and Evidence
- Defect Tracking and Follow-up using Jira

### QA Delivery Practices

- Risk-Based Testing
- Critical User Journey Validation
- Cross-Platform Testing
- Release-Focused Validation
- Requirement Clarification
- SDLC and STLC
- Agile Methodologies
- Developer and Project Manager Collaboration
- Continuous Quality Improvement

## 🗂️ Project Case Studies

The portfolio includes eight project case studies from different application domains. Each project detail page presents its available project overview, role, platforms, testing coverage, visual references, QA contributions, and key user workflows.

| Project | Domain / Application |
|---|---|
| **LYMÜV** | Taxi Booking Application |
| **Dap Me** | Professional Networking Application |
| **Kinzwin** | Multiplayer Gaming Platform |
| **Bunny Books** | Photo Book E-Commerce Application |
| **Health-E** | Digital Health & Medical Records Application |
| **reGive** | Community Sharing & Gift Transaction Application |
| **ShopZone** | E-Commerce Web Application |
| **Playwright** | E-Commerce End-to-End Test Automation |

### Project Detail Navigation

Each case study is accessible from the Selected Work section.

- Select a project card to open its dedicated project detail page.
- Project details are represented through the `project` URL query parameter.
- Use the **Back** control, browser Back, or supported keyboard/touch gestures to return to the portfolio.
- Project visual references can be opened at full size in a separate browser tab.
- Project data, content, image references, and testing coverage are maintained in `src/data/portfolio.ts`.

Project descriptions and testing details are presented as portfolio case-study material. They should not be interpreted as independently audited product specifications or claims about production ownership of the referenced applications.

## 🧰 Technology Stack

### Frontend

- **React 19** - Component-based user interface.
- **JavaScript (ES Modules)** - Application logic and component implementation.
- **Vite 6** - Local development server and production bundler.
- **CSS** - Responsive layouts, design system, typography, and visual effects.
- **Framer Motion 12** - Component transitions, entrance animations, and interactive motion.
- **Lucide React** - Consistent interface icons.

### Interaction and Experience

- **React Hooks** - Component state, effects, and lifecycle behavior.
- **URL Query Parameters** - Project detail navigation and direct project links.
- **Browser History API** - Back/forward navigation synchronization.
- **Local Storage** - Persisted motion preference.
- **CSS Media Queries** - Responsive layouts and reduced-motion handling.
- **Google Fonts** - Allura, Anton, Caveat, and Manrope typography.

### Contact Form and Email

- **Google Apps Script** - Contact form submission endpoint.
- **GmailApp** - Sends project enquiry notifications to the portfolio owner's inbox.
- **HTML and Plain-Text Email** - Formatted enquiry notification with visitor and project details.
- **mailto fallback** - Opens the visitor's configured email application if the endpoint is not configured.

### Build and Deployment

- **Vite Production Build** - Generates the optimized static site in `dist/`.
- **Vercel** - Portfolio hosting target configured in the contact email service URL.
- **npm** - Dependency installation and project scripts.

## 📁 Project Structure

```text
Sumit-Panchal-Quality-Assurance-Portfolio/
├── google-apps-script/
│   └── Code.gs                    # Contact form email handler
├── public/
│   ├── certificates/              # Certificate preview images
│   ├── project/                   # Project banners and detail/gallery images
│   ├── resume/
│   │   └── Sumit_Panchal_Resume.pdf
│   ├── favicon.svg                # Browser icon
│   └── sumit-panchal-portrait.png # Portfolio portrait
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── CertificateGallery.jsx
│   │   ├── Compare.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ProjectPage.jsx
│   │   ├── ToolsMarquee.jsx
│   │   └── Work.jsx
│   ├── config/
│   │   └── contact.js             # Google Apps Script endpoint configuration
│   ├── data/
│   │   └── portfolio.ts           # Profile, education, experience, projects, credentials
│   ├── styles/
│   │   └── app.css                # Main portfolio styles
│   ├── App.jsx                    # Application composition and project navigation
│   ├── AppErrorBoundary.jsx       # Application error boundary
│   ├── main.jsx                   # React application entry point
│   ├── motion.js                  # Motion preference context and hook
│   └── vite-env.d.ts
├── index.html                     # Document metadata, fonts, startup loading screen
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- **Node.js:** Use a current supported Node.js LTS release compatible with Vite 6.
- **npm:** Included with Node.js.
- **Git:** Required to clone the repository.

### 1. Clone the repository

```bash
git clone https://github.com/lifeofthecoders/Sumit-Panchal-Quality-Assurance-Portfolio.git
cd Sumit-Panchal-Quality-Assurance-Portfolio
```

> Replace the repository URL and folder name above if your GitHub repository uses a different name.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal. Vite commonly uses:

```text
http://localhost:5173/
```

### 4. Build and preview

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` directory.

### Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server on the network interface |
| `npm run build` | Create the optimized production bundle |
| `npm run preview` | Preview the production build locally |

## 🔎 Project Navigation

Project details are presented as dedicated pages rather than relying only on an in-page popup. The selected project is represented in the URL query string.

Examples:

```text
/?project=lymuv
/?project=dap-me
/?project=playwright-e2e
```

The project identifiers are defined in `src/data/portfolio.ts`.

- Selecting a project opens its dedicated detail page.
- The **Back** control returns to the main portfolio.
- Browser Back and Forward navigation synchronize with the selected project.
- Project detail pages include the banner, overview, role, domain, platforms, testing coverage, visual references, QA contributions, and key user workflows.
- Project screenshots and banners can be opened in a separate browser tab.

## 🚀 Deployment

The current project uses **Vite** to build a static frontend application. The contact form is connected to a Google Apps Script web app endpoint.

The portfolio URL configured in the contact email service is:

[Live Portfolio](https://sumit-panchal-quality-assurance-por.vercel.app/)

### Deploying to Vercel

1. Push the portfolio source code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and import the repository.
3. Select **Vite** as the framework preset if Vercel does not detect it automatically.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy the project.
7. Open the deployed URL and verify the home page, project detail pages, images, resume, and contact form.

No custom Vite base path or repository-specific GitHub Pages workflow is included in this project configuration. For a standard Vercel deployment, use the site root as the deployment base.

### Contact Form Service

The contact form is wired through `src/config/contact.js` to a Google Apps Script web app.

The Apps Script source is maintained in:

```text
google-apps-script/Code.gs
```

The script validates the submitted fields and email address, escapes visitor-provided content before inserting it into the HTML email, and sends the enquiry to the configured recipient using `GmailApp`.

If you change or redeploy the Apps Script web app, update `GOOGLE_APPS_SCRIPT_URL` in `src/config/contact.js` with the active `/exec` endpoint. The Apps Script deployment must be configured to execute as the owner and be accessible to the intended portfolio visitors.

The frontend currently uses `fetch` with `mode: 'no-cors'`; the browser cannot read the response body in this mode. Test the end-to-end email delivery using a real submission after deployment.

## 🧭 Main Code Reference

| Area | Main File |
|---|---|
| Application composition and project URL state | `src/App.jsx` |
| Profile, education, experience, skills, projects, and credentials | `src/data/portfolio.ts` |
| Hero introduction and entrance animations | `src/components/Hero.jsx` |
| Project listing, category filters, and search | `src/components/Work.jsx` |
| Dedicated project detail page | `src/components/ProjectPage.jsx` |
| Project detail modal component | `src/components/ProjectModal.jsx` |
| Certificate filters, search, and lightbox | `src/components/CertificateGallery.jsx` |
| Contact links and enquiry form | `src/components/Contact.jsx` |
| Google Apps Script endpoint | `src/config/contact.js` |
| Contact email handler | `google-apps-script/Code.gs` |
| Motion preference context | `src/motion.js` |
| Global styles and design tokens | `src/styles/app.css` |
| Browser title, metadata, fonts, startup loading screen | `index.html` |
| Vite build configuration | `vite.config.js` |

## ♿ Accessibility and Performance

- The application includes a skip-to-content link.
- Motion preferences are stored in local storage and initialized with the browser's reduced-motion preference.
- The Hero component also checks the operating system's reduced-motion setting.
- Project and credential images use lazy loading where appropriate.
- Project detail pages support keyboard navigation for returning to the portfolio.
- The project detail modal includes Escape handling, focus management, and a keyboard focus loop.
- Certificate previews provide a lightbox interaction with keyboard controls.
- Responsive CSS supports different screen sizes and pointer capabilities.

## 🔐 Privacy and Security

- The portfolio is a static frontend application; it does not include a database, user account system, or private server API.
- Contact form submissions are processed by the configured Google Apps Script service and emailed to the portfolio owner.
- Visitor-provided form content is HTML-escaped in the Apps Script email template.
- Do not add private credentials, access tokens, or personal secrets to frontend source files.
- Review public contact details and third-party links before publishing the repository.
- Keep private configuration and local environment files out of Git.
- Review third-party package, font, icon, and media licenses before redistribution.

## 🧑‍💻 Authorship & Ownership

This is my personal **Senior Quality Analyst | Manual QA Engineer portfolio**, designed and developed by **Sumit Panchal** to present my professional profile, 5+ years of experience, software testing expertise, project case studies, education, certifications, and resume.

The portfolio source code, page composition, custom styling, project navigation, responsive presentation, animations, and project-specific implementation are maintained as my personal portfolio project. The QA content reflects my professional background, testing approach, and experience represented in the portfolio.

Names, logos, trademarks, and product visuals appearing within individual case studies are used to identify the referenced applications and do not imply that I own those third-party products.

React, Vite, Framer Motion, Lucide React, Google Fonts, Google Apps Script, and other third-party services and packages remain the property of their respective authors and are governed by their own terms and licenses. Third-party media and materials remain subject to the rights of their respective owners.

## 📜 License

The custom portfolio source and design implementation are maintained by **Sumit Panchal**. Unless a separate license is included with a specific asset or dependency, permission is not granted to reproduce or redistribute the custom portfolio implementation as someone else's work. Third-party libraries, fonts, icons, and media remain subject to their respective license terms.

## 📫 Connect With Me

If you'd like to connect, collaborate, or discuss Quality Assurance and software testing, feel free to reach out.

**Sumit Panchal**  
**Senior Quality Analyst | Manual QA Engineer | Software Testing | 5+ Years Experience**

📍 **Location:** Ahmedabad, Gujarat, India

🌐 **Portfolio:** [https://sumit-panchal-quality-assurance-por.vercel.app/](https://sumit-panchal-quality-assurance-por.vercel.app/)

💻 **GitHub:** [https://github.com/lifeofthecoders](https://github.com/lifeofthecoders)

📧 **Email:** sumitpanchal5225@gmail.com

🔗 **LinkedIn:** [linkedin.com/in/sumit-panchal-b790a8236](https://www.linkedin.com/in/sumit-panchal-b790a8236/)

## ⭐ Support

If you found this portfolio useful, please consider giving the repository a ⭐ star. Your support and feedback are greatly appreciated and help encourage continuous improvement.

<div align="center">

**QUALITY IS MY COMMITMENT.  
RELIABILITY IS MY STANDARD.**

Thank you for visiting my portfolio!

---

**Designed and developed by Sumit Panchal.**

**PRECISION. QUALITY. TRUST. DELIVERED.**

© 2026 Sumit Panchal. All rights reserved for the custom portfolio implementation, subject to the notices above.

</div>
