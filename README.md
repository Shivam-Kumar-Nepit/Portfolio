# Shivam Kumar Nepit — Portfolio

A one-page developer portfolio built with **React.js + Vite + Tailwind CSS**, generated entirely from
the CV content in `src/data/portfolioData.js`.

## Run it locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production files are output to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## Project structure

```text
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── Shivam_Kumar_Nepit_Resume.pdf   ← "Download CV" button links here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolioData.js            ← single source of truth for all content
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Updating content

Everything text-based lives in `src/data/portfolioData.js`. Update the CV there and every
section (Hero, About, Skills, Experience, Projects, Education, Contact, Footer) updates
automatically — no need to touch the components.

- **GitHub / LinkedIn / portfolio links**: these were not present in the source CV, so the
  corresponding icons/buttons are hidden. Fill in `profile.github` / `profile.linkedin` /
  `profile.portfolio` in `portfolioData.js` once available, and they'll appear automatically
  in the Navbar, Hero, Contact, and Footer.
- **Download CV**: replace `public/Shivam_Kumar_Nepit_Resume.pdf` with an updated PDF (keep the
  same filename, or update `profile.resumeFile` in `portfolioData.js`).
- **Project links**: `projects[].github` / `projects[].demo` are left empty since no repository
  or live-demo links were provided in the CV. Add real URLs there when available — the modal
  will automatically show the corresponding buttons.

## Design notes

The visual language leans into the CV's own "real-time production" theme: a dark console/IDE
aesthetic, a signature teal "live" signal color for the pulsing status indicator, monospace
(JetBrains Mono) for timestamps, tags, and code-styled labels, paired with Space Grotesk for
display headings and Inter for body copy. Experience and Projects use expandable
cards/modals so the detail is available without cluttering the page.
