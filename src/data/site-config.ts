export interface NavItem {
  name: string;
  href: string;
  index: string;
}

export interface SocialLink {
  name: string;
  href: string;
  handle: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  headline: string;
  introLabel: string;
  location: string;
  coordinates: string;
  timezone: string;
  status: string;
  bio: string;
  aboutDescription: string;
  avatarUrl: string;
  resumeUrl: string;
  resumeFilename: string;
  contact: {
    email: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappUrl: string;
  };
  socials: {
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  navItems: NavItem[];
  aboutBlocks: {
    number: string;
    title: string;
    tagline: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "ARMAN ALI",
  title: "Arman Ali — AI Developer & Digital System Designer",
  role: "AI Developer",
  headline: "AI Developer | Building Intelligent Digital Experiences",
  introLabel: "PORTFOLIO & SYSTEM SPECIFICATION",
  location: "New Delhi, India",
  coordinates: "28.6139° N, 77.2090° E",
  timezone: "IST (UTC +5:30)",
  status: "Available for AI & Analytics Opportunities",
  bio: "I'm an aspiring AI Developer interested in building practical applications using AI, data, and modern web technologies. I enjoy turning ideas into useful digital products and continuously improving my technical skills.",
  aboutDescription:
    "I'm Arman Ali, a B.Com student at Delhi University School of Open Learning and an aspiring AI Developer. I'm interested in the intersection of artificial intelligence, data, and software development. I enjoy exploring new technologies, experimenting with AI-assisted development, and building practical digital experiences. My goal is to strengthen my technical foundations and create useful products that solve real problems.",
  avatarUrl: "/images/arman-portrait.jpg",
  resumeUrl: "/resume/arman-ali-resume.pdf",
  resumeFilename: "arman-ali-resume.pdf",
  contact: {
    email: "armaali5566@gmail.com",
    whatsappNumber: "[WHATSAPP NUMBER — TO BE ADDED]", // e.g., "918595458279"
    whatsappDisplay: "[WHATSAPP NUMBER — TO BE ADDED]",
    whatsappUrl: "https://wa.me/918595458279",
  },
  socials: {
    github: "https://github.com/armaali5566-ctrl",
    linkedin: "https://www.linkedin.com/in/arman-ali-111a83422/",
    whatsapp: "https://wa.me/918595458279",
  },
  navItems: [
    { name: "Index", href: "#home", index: "00" },
    { name: "Projects", href: "#projects", index: "01" },
    { name: "Stack", href: "#tools", index: "02" },
    { name: "Journey", href: "#experience", index: "03" },
    { name: "Profile", href: "#about", index: "04" },
    { name: "Curriculum", href: "#resume", index: "05" },
    { name: "Contact", href: "#contact", index: "06" },
  ],
  aboutBlocks: [
    {
      number: "01",
      title: "WHAT I DO",
      tagline: "Exploration & Implementation",
      description: "Explore AI applications, data analysis, and modern web development architectures.",
    },
    {
      number: "02",
      title: "HOW I WORK",
      tagline: "Pragmatic Iteration",
      description: "Learn through experimentation, practical projects, and continuous improvement cycles.",
    },
    {
      number: "03",
      title: "WHAT I'M WORKING TOWARDS",
      tagline: "Core Mastery & Utility",
      description: "Building stronger technical skills and developing useful, reliable digital products that solve real problems.",
    },
  ],
};
