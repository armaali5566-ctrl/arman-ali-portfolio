"use client";

import React from "react";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-32 px-6 bg-charcoal text-beige text-center border-t-[8px] border-emerald relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-terracotta font-display font-semibold tracking-widest text-xs uppercase mb-3">
          06 / DOCUMENTATION
        </h2>
        <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase mb-6 text-beige">
          My Resume
        </h3>
        <p className="text-beige/70 font-light text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Explore my professional background, experience, skills, and education. Includes verified coursework and project summaries.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Download Resume Action */}
          <a
            href="/resume/arman-ali-resume.pdf"
            download="arman-ali-resume.pdf"
            className="group bg-emerald text-beige px-9 py-4 rounded-full font-medium hover:bg-terracotta transition-colors duration-400 overflow-hidden relative inline-flex items-center gap-3 shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Download Resume (PDF)</span>
          </a>

          {/* View in New Tab */}
          <a
            href="/resume/arman-ali-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-beige/30 text-beige hover:bg-beige/10 transition-colors text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2"
          >
            <span>View in Browser</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[11px] font-mono text-beige/40 mt-6">
          File target: <code className="text-beige/70">resume/arman-ali-resume.pdf</code> (Placeholder path ready for custom CV upload)
        </p>
      </div>
    </section>
  );
}
