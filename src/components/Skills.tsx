"use client";

import React from "react";
import { BarChart3, PieChart, Code2, Brain } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-7xl mx-auto border-t border-charcoal/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-terracotta font-display font-semibold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-terracotta" />
            01 / EXPERTISE
          </h2>
          <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-charcoal">
            Core Skills
          </h3>
        </div>
        <p className="text-muted font-light text-base sm:text-lg max-w-sm mt-6 md:mt-0 md:text-right">
          Combining algorithmic reasoning, structured data engineering, and modern web application frameworks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Skill Bento 1: Data Analytics & BI */}
        <div className="group border border-charcoal/10 bg-beige-light p-8 rounded-2xl hover:border-emerald transition-all duration-400 relative overflow-hidden flex flex-col justify-between min-h-[310px] shadow-sm hover:shadow-xl">
          <div className="absolute inset-0 bg-emerald/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
          <div className="relative z-10 flex justify-between items-start">
            <span className="text-5xl font-display font-bold text-charcoal/15 group-hover:text-emerald/40 transition-colors">
              01
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <h4 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal group-hover:text-emerald transition-colors">
              Data Analytics
            </h4>
            <ul className="space-y-2 font-light text-muted text-sm tracking-wide">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Data Mining &amp; Cleaning</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Relational Modeling (SQL)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald" /> ETL Data Transformation</li>
            </ul>
          </div>
        </div>

        {/* Skill Bento 2: Visualization */}
        <div className="group border border-charcoal/10 bg-beige-light p-8 rounded-2xl hover:border-terracotta transition-all duration-400 relative overflow-hidden flex flex-col justify-between min-h-[310px] shadow-sm hover:shadow-xl">
          <div className="absolute inset-0 bg-terracotta/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
          <div className="relative z-10 flex justify-between items-start">
            <span className="text-5xl font-display font-bold text-charcoal/15 group-hover:text-terracotta/40 transition-colors">
              02
            </span>
            <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <PieChart className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <h4 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal group-hover:text-terracotta transition-colors">
              Visualization
            </h4>
            <ul className="space-y-2 font-light text-muted text-sm tracking-wide">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Power BI Dashboards</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Looker Studio Reports</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Advanced Excel &amp; Formulas</li>
            </ul>
          </div>
        </div>

        {/* Skill Bento 3: Programming & Engineering */}
        <div className="group border border-charcoal/10 bg-beige-light p-8 rounded-2xl hover:border-emerald transition-all duration-400 relative overflow-hidden flex flex-col justify-between min-h-[310px] shadow-sm hover:shadow-xl">
          <div className="absolute inset-0 bg-emerald/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
          <div className="relative z-10 flex justify-between items-start">
            <span className="text-5xl font-display font-bold text-charcoal/15 group-hover:text-emerald/40 transition-colors">
              03
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <h4 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal group-hover:text-emerald transition-colors">
              Programming
            </h4>
            <ul className="space-y-2 font-light text-muted text-sm tracking-wide">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Python (NumPy, Pandas)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Modern Web (JS, Next.js)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Automation Scripts &amp; APIs</li>
            </ul>
          </div>
        </div>

        {/* Skill Bento 4: AI & Generative Workflows */}
        <div className="group border border-charcoal/10 bg-beige-light p-8 rounded-2xl hover:border-terracotta transition-all duration-400 relative overflow-hidden flex flex-col justify-between min-h-[310px] shadow-sm hover:shadow-xl">
          <div className="absolute inset-0 bg-terracotta/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
          <div className="relative z-10 flex justify-between items-start">
            <span className="text-5xl font-display font-bold text-charcoal/15 group-hover:text-terracotta/40 transition-colors">
              04
            </span>
            <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5" />
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <h4 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal group-hover:text-terracotta transition-colors">
              AI &amp; Generative
            </h4>
            <ul className="space-y-2 font-light text-muted text-sm tracking-wide">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> Prompt Engineering Systems</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> ChatGPT, Gemini &amp; Claude</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-terracotta" /> ML Fundamentals &amp; Scikit-Learn</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
