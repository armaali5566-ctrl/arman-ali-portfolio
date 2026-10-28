export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  isCurrent?: boolean;
  type: "experience" | "education";
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-ai-intern",
    role: "AI Developer Intern",
    organization: "[ORGANIZATION NAME — PLACEHOLDER]",
    duration: "[START DATE — END DATE]",
    location: "New Delhi, India (or Remote)",
    isCurrent: true,
    type: "experience",
    description:
      "Working on practical AI applications, automated data processing pipelines, and modern web interfaces to solve real operational bottlenecks.",
    responsibilities: [
      "Assisting in the design and evaluation of prompt engineering frameworks and LLM-assisted workflows.",
      "Developing automated data transformation, extraction, and validation scripts using Python and SQL.",
      "Building responsive frontend components and integrating internal APIs for data visualization.",
      "Collaborating on experiments evaluating model reliability, prediction accuracy, and usability.",
    ],
    skills: ["Python", "SQL", "Generative AI", "Data Analytics", "Prompt Engineering"],
  },
  {
    id: "edu-bcom",
    role: "Bachelor of Commerce (B.Com)",
    organization: "Delhi University — School of Open Learning (DU SOL)",
    duration: "2025 — Present (Pursuing)",
    location: "New Delhi, India",
    isCurrent: true,
    type: "education",
    description:
      "Undergraduate coursework with strong quantitative and analytical foundations in corporate financial reporting, business statistics, and management economics.",
    responsibilities: [
      "Acquiring domain expertise in quantitative financial models, balance sheet analysis, and statistical decision-making.",
      "Applying mathematical and commercial concepts directly to data analysis and business intelligence projects.",
    ],
    skills: ["Business Mathematics", "Financial Accounting", "Statistics", "Commercial Strategy"],
  },
  {
    id: "edu-cbse",
    role: "Senior Secondary Education (Class XII)",
    organization: "Central Board of Secondary Education (CBSE)",
    duration: "Completed 2025",
    location: "New Delhi, India",
    isCurrent: false,
    type: "education",
    description:
      "Specialized in Commerce with Mathematics, establishing fundamental proficiency in calculus, probability, statistics, and microeconomics.",
    responsibilities: [
      "Completed rigorous coursework in core mathematics, statistical methods, and economic data interpretation.",
      "Built a solid foundation for algorithmic thinking and machine learning models.",
    ],
    skills: ["Mathematics", "Calculus", "Probability", "Microeconomics"],
  },
];
