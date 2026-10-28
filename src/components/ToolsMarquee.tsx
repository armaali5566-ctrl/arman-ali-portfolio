"use client";

import React from "react";

const tools = [
  "SQL",
  "Microsoft Excel",
  "Python",
  "NumPy",
  "Power BI",
  "Google Sheets",
  "Looker Studio",
  "ChatGPT",
  "Google Gemini",
  "Claude",
  "Machine Learning",
];

export default function ToolsMarquee() {
  return (
    <section id="tools" className="py-12 bg-emerald border-y-4 border-charcoal text-beige overflow-hidden whitespace-nowrap relative shadow-2xl marquee-container">
      <div className="animate-marquee flex gap-12 sm:gap-16 items-center w-max font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase select-none">
        {tools.map((tool, idx) => (
          <React.Fragment key={`first-${idx}`}>
            <span>{tool}</span>
            <span className="text-terracotta font-serif">*</span>
          </React.Fragment>
        ))}

        {/* Duplicate Set for Seamless Infinite Loop */}
        {tools.map((tool, idx) => (
          <React.Fragment key={`second-${idx}`}>
            <span>{tool}</span>
            <span className="text-terracotta font-serif">*</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
