# matiyos-portfolio

> Personal portfolio and engineering showcase for **Matiyos Bizuneh** — Information Systems Graduate, Flutter & Full-Stack Developer.

[![Live](https://img.shields.io/badge/Live-matiyos--portfolio.vercel.app-4f46e5?style=flat-square)](https://matiyos-portfolio.vercel.app)
[![Stack](https://img.shields.io/badge/Stack-React%2019%20%2B%20TypeScript%20%2B%20Vite-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://vitejs.dev)
[![Mobile](https://img.shields.io/badge/Mobile-Flutter%20%26%20Dart-02569B?style=flat-square&logo=flutter&logoColor=white)](https://flutter.dev)
[![Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

---

## Overview

Production-grade developer portfolio built with React 19, TypeScript, and Tailwind CSS. Features live GitHub REST API integration, an interactive CLI terminal modal, printable CV/PDF export, and project architecture breakdowns.

**Live:** [matiyos-portfolio.vercel.app](https://matiyos-portfolio.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion (`motion/react`) |
| Charts | Recharts |
| Icons | Lucide React |
| Deployment | Vercel Edge CDN |
| API | GitHub REST API v3 |

---

## Features

- **Hero section** with interactive multi-language code simulator (TypeScript, Dart, SQL)
- **Projects gallery** with real-time search, category filters, language distribution charts, and project timeline analytics
- **Skills matrix** with proficiency levels and searchable filter tabs
- **Education timeline** with coursework breakdown and capstone project detail
- **GitHub Explorer** — live fetch of public repos, languages, and activity heatmap
- **CLI Terminal modal** — in-browser developer console with custom commands (`help`, `about`, `skills`, `projects`, `contact`)
- **CV / Resume modal** — formatted resume with one-click PDF print (popup-isolated, CV-only) and plain-text copy
- **Contact section** with pre-filled mailto form
- **Print media queries** — clean A4 PDF export of portfolio or CV independently

---

## Local Development

```bash
git clone https://github.com/nafiijun/matiyos-portfolio.git
cd matiyos-portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── EducationTimeline.tsx
│   ├── GitHubExplorer.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ResumeModal.tsx      # CV print/PDF export
│   ├── TerminalModal.tsx    # CLI terminal emulator
│   ├── ProjectModal.tsx     # Project architecture detail
│   └── ProfileModal.tsx
├── data/
│   └── portfolioData.ts     # All content — projects, skills, education
├── types.ts
├── App.tsx
├── main.tsx
└── index.css                # Tailwind + print media queries
```

---

## Author

**Matiyos Bizuneh**
B.Sc. Information Systems — Haramaya University
[github.com/nafiijun](https://github.com/nafiijun) · officialnafii671@gmail.com
