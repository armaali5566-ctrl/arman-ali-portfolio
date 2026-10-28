# Arman Ali — AI Developer Portfolio

A minimalist, high-performance personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for Arman Ali, an aspiring AI Developer specializing in Generative AI, Data Analytics, Python, Machine Learning, and web application development.

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/armaali5566-ctrl](https://github.com/armaali5566-ctrl)
- **LinkedIn:** [https://www.linkedin.com/in/arman-ali-111a83422/](https://www.linkedin.com/in/arman-ali-111a83422/)

---

## 🎨 Visual Identity & Color System
Theme: Minimalist dark mode with strong typography, controlled spacing, and clear visual hierarchy.

| Element | Color Name | Hex Code | Purpose |
|---|---|---|---|
| Main Background | **Midnight Navy** | `#0B1020` | Primary viewport background |
| Primary Interactive Accent | **Cobalt Blue** | `#3563FF` | Buttons, active navigation, focus rings |
| Secondary Accent | **Crimson Red** | `#DC264B` | Badges, indicator dots, subtle highlights |
| Primary Text | **Soft White** | `#F5F7FF` | Headings, high-contrast text |
| Secondary Text | **Muted Grey** | `#9BA5B7` | Subheadings, descriptions, meta items |
| Cards & Containers | **Card Background** | `#11182B` | Project cards, experience items, about blocks |
| Dividers & Outlines | **Border Color** | `rgba(255,255,255,0.10)` | Clean subtle borders |

**Typography:**
- **Headings:** `Space Grotesk` (Geometric sans loaded via `next/font/google`)
- **Body Text:** `Inter` (Legible sans-serif loaded via `next/font/google`)

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── arman-portrait.jpg        # Professional portrait
│   │   └── projects/                 # SVG project previews
│   │       ├── ai-fitness.svg
│   │       ├── donation-platform.svg
│   │       ├── bi-dashboard.svg
│   │       └── ai-portfolio.svg
│   ├── resume/
│   │   └── arman-ali-resume.pdf      # PDF resume file
│   └── favicon.svg                   # Browser icon
├── src/
│   ├── app/
│   │   ├── globals.css               # Design system & CSS tokens
│   │   ├── layout.tsx                # Fonts, SEO metadata & Open Graph
│   │   └── page.tsx                  # Main assembled single-page layout
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky top nav + mobile drawer
│   │   ├── Hero.tsx                  # Two-column hero with portrait
│   │   ├── Projects.tsx              # Selected projects responsive grid
│   │   ├── ToolsMarquee.tsx          # Seamless infinite-loop marquee
│   │   ├── Experience.tsx            # Internship & education timeline
│   │   ├── About.tsx                 # Bio & 3 focus pillar cards
│   │   ├── Resume.tsx                # Clean attachment card (View/Download)
│   │   ├── Contact.tsx               # Direct channels (LinkedIn, GitHub, WhatsApp, Email)
│   │   └── Footer.tsx                # Minimalist footer + Back to Top
│   └── data/
│       ├── siteConfig.ts             # Profile, socials, and contact config
│       ├── projects.ts               # Modular project showcase data
│       ├── experience.ts             # Internship and educational history
│       └── tools.ts                  # Tool list and brand specifications
├── tailwind.config.ts                # Tailwind theme customization
├── tsconfig.json                     # Strict TypeScript configuration
├── next.config.mjs                   # Next.js configuration
└── package.json
```

---

## 🛠️ Local Development

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To verify production bundle build:
```bash
npm run build
npm run start
```

---

## ✏️ How to Customize & Edit Content

All portfolio content is decoupled from UI components and cleanly structured in TypeScript files under `src/data/`:

### 1. General Profile & Social Links (`src/data/siteConfig.ts`)
Update your name, bio, social profile URLs, email, and WhatsApp number:
```typescript
export const siteConfig = {
  name: "ARMAN ALI",
  role: "AI Developer",
  contact: {
    email: "armaali5566@gmail.com",
    whatsappNumber: "918595458279",        // Replace with your international number
    whatsappDisplay: "+91 8595458279",
  },
  socials: {
    github: "https://github.com/armaali5566-ctrl",
    linkedin: "https://www.linkedin.com/in/arman-ali-111a83422/",
    whatsapp: "https://wa.me/918595458279",
  },
  // ...
};
```

### 2. Projects (`src/data/projects.ts`)
To add, remove, or modify a project, edit the `projects` array:
```typescript
{
  id: "my-new-project",
  title: "My Project Title",
  category: "Generative AI",
  shortDescription: "One to two sentences summarizing what the project does.",
  techTags: ["Python", "Next.js", "OpenAI"],
  image: "/images/projects/my-preview.jpg",
  githubUrl: "https://github.com/armaali5566-ctrl/repo-name",
  liveUrl: "https://my-live-demo.com", // Set to null if in progress
}
```

### 3. Experience & Education (`src/data/experience.ts`)
To update your internship, organization name, dates, or responsibilities:
```typescript
{
  id: "exp-ai-intern",
  role: "AI Developer Intern",
  organization: "Your Organization Name",
  duration: "Jan 2026 — Present",
  location: "New Delhi, India",
  description: "Summary of your day-to-day scope...",
  responsibilities: [
    "Key achievement or responsibility 1",
    "Key achievement or responsibility 2"
  ],
  skills: ["Python", "SQL", "Generative AI"]
}
```

### 4. Replace Portrait Photo
Place your high-resolution portrait at:
```
public/images/arman-portrait.jpg
```
The hero section automatically detects and renders this image.

### 5. Replace Resume PDF
Place your official resume PDF file at:
```
public/resume/arman-ali-resume.pdf
```
Both the `[View Resume]` (opens in new browser tab) and `[Download Resume]` buttons point directly to this file.

---

## 🚢 Deploying to Vercel

This repository is 100% standard Next.js App Router and is fully optimized for **Vercel**:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Arman Ali portfolio"
   git remote add origin https://github.com/armaali5566-ctrl/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in.
3. Click **Add New Project** and select your GitHub repository.
4. Framework Preset will automatically be detected as **Next.js**.
5. Click **Deploy**. Vercel will build and assign you a fast, global CDN URL with automatic SSL.

---

## 📄 License
MIT License. Built for Arman Ali.
