export interface ToolItem {
  name: string;
  category: "Language" | "Data & BI" | "Generative AI" | "Analytics";
  color: string;
  iconType: "sql" | "excel" | "python" | "numpy" | "powerbi" | "googlesheets" | "looker" | "chatgpt" | "gemini" | "claude";
}

export const toolsList: ToolItem[] = [
  {
    name: "Python",
    category: "Language",
    color: "#3776AB",
    iconType: "python",
  },
  {
    name: "SQL",
    category: "Language",
    color: "#3563FF",
    iconType: "sql",
  },
  {
    name: "Microsoft Excel",
    category: "Data & BI",
    color: "#107C41",
    iconType: "excel",
  },
  {
    name: "NumPy",
    category: "Analytics",
    color: "#4DABCF",
    iconType: "numpy",
  },
  {
    name: "Power BI",
    category: "Data & BI",
    color: "#F2C811",
    iconType: "powerbi",
  },
  {
    name: "Google Sheets",
    category: "Data & BI",
    color: "#34A853",
    iconType: "googlesheets",
  },
  {
    name: "Looker Studio",
    category: "Data & BI",
    color: "#4285F4",
    iconType: "looker",
  },
  {
    name: "ChatGPT",
    category: "Generative AI",
    color: "#10A37F",
    iconType: "chatgpt",
  },
  {
    name: "Google Gemini",
    category: "Generative AI",
    color: "#8E75FF",
    iconType: "gemini",
  },
  {
    name: "Claude",
    category: "Generative AI",
    color: "#D97706",
    iconType: "claude",
  },
];
