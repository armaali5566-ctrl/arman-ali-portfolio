export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  techTags: string[];
  image: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "ai-fitness-tracker",
    title: "AI Fitness & Progress Tracker",
    category: "Generative AI & Health Tech",
    shortDescription:
      "An intelligent application that analyzes workout routines, tracks physical progression, and delivers personalized, context-aware training recommendations.",
    fullDescription:
      "Designed and developed a responsive web interface integrating AI-assisted workout log parsing, personalized progression metrics, and dynamic goal forecasting.",
    techTags: ["Next.js", "JavaScript", "AI", "Tailwind CSS"],
    image: "/images/projects/ai-fitness.svg",
    githubUrl: "https://github.com/armaali5566-ctrl",
    liveUrl: null, // Placeholder / In progress
    featured: true,
    highlights: [
      "Custom workout analysis and automated fatigue monitoring",
      "Dynamic data visualization for weekly strength progression",
      "Adaptive prompt logic for intelligent nutritional feedback",
    ],
  },
  {
    id: "intelligent-donation-platform",
    title: "Intelligent Donation Platform",
    category: "Web Development & Social Tech",
    shortDescription:
      "A seamless, transparent donation platform connecting donors directly with verified causes with smart categorization and impact reporting.",
    fullDescription:
      "Engineered an intuitive donation management portal with categorized campaigns, transparent fund allocation breakdowns, and real-time contribution confirmation.",
    techTags: ["JavaScript", "CSS", "Web Dev", "REST APIs"],
    image: "/images/projects/donation-platform.svg",
    githubUrl: "https://github.com/armaali5566-ctrl",
    liveUrl: null,
    featured: true,
    highlights: [
      "Categorized cause discovery with live goal funding progress",
      "Accessible and responsive interface optimized for all screens",
      "Clean transaction receipt generation and impact tracking",
    ],
  },
  {
    id: "business-intelligence-dashboard",
    title: "Business Intelligence Dashboard",
    category: "Data Analytics & BI",
    shortDescription:
      "An executive analytics dashboard transforming complex relational datasets into actionable KPI curves, margin variance analyses, and sales forecasts.",
    fullDescription:
      "Built multi-table relational models using SQL and Power BI with automated data cleansing in Excel to surface key business metrics and cohort trends.",
    techTags: ["Excel", "SQL", "Power BI", "Data Modeling"],
    image: "/images/projects/bi-dashboard.svg",
    githubUrl: "https://github.com/armaali5566-ctrl",
    liveUrl: null,
    featured: true,
    highlights: [
      "Calculated DAX measures for percentage variance against forecast",
      "Normalized SQL queries automating monthly cohort extractions",
      "Executive KPI summary cards for rapid decision-making",
    ],
  },
  {
    id: "ai-powered-portfolio",
    title: "AI-Powered Portfolio",
    category: "Frontend & Generative AI",
    shortDescription:
      "A modern, ultra-responsive digital portfolio designed with minimalist dark aesthetics, custom interactive showcases, and modular architecture.",
    fullDescription:
      "Crafted using Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, featuring smooth animations and data-driven modular sections.",
    techTags: ["React", "JavaScript", "Generative AI", "Next.js"],
    image: "/images/projects/ai-portfolio.svg",
    githubUrl: "https://github.com/armaali5566-ctrl",
    liveUrl: "https://github.com/armaali5566-ctrl",
    featured: true,
    highlights: [
      "Custom color system with Midnight Navy, Cobalt Blue, and Crimson Red",
      "Fully responsive architecture tested across all viewport dimensions",
      "Externalized TypeScript data layer for effortless maintenance",
    ],
  },
];
