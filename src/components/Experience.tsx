"use client";

import React from "react";

export default function Experience() {
  return (
    <>
      {/* ========================================================================= */}
      {/* EXPERIENCE SECTION (ROW STYLE)                                            */}
      {/* ========================================================================= */}
      <section id="experience" className="py-28 px-6 max-w-7xl mx-auto relative bg-beige">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 relative items-start">

          {/* Left Sticky Title */}
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <h2 className="text-terracotta font-display font-semibold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-terracotta" />
              02 / JOURNEY
            </h2>
            <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-charcoal uppercase leading-[0.9]">
              Experience
            </h3>
            <p className="text-muted mt-5 font-light text-base leading-relaxed">
              My professional journey and practical learning experience applying AI, automation, and data models to practical challenges.
            </p>
          </div>

          {/* Right Rows */}
          <div className="w-full md:w-2/3 border-t-2 border-charcoal">
            
            {/* Experience Row 1 */}
            <div className="border-b border-charcoal/20 group hover:bg-white transition-colors duration-400 py-10 px-6 -mx-6 md:px-8 md:-mx-8">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-5">
                <div>
                  <span className="text-terracotta font-bold tracking-widest text-xs font-mono mb-2 block uppercase">
                    [START DATE — END DATE]
                  </span>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl group-hover:text-emerald transition-colors uppercase text-charcoal">
                    AI Developer Intern
                  </h4>
                  <p className="text-base text-muted mt-1 uppercase tracking-wider font-mono">
                    [ORGANIZATION NAME — PLACEHOLDER]
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald font-mono text-xs font-semibold">
                  Practical Internship
                </span>
              </div>

              <p className="text-charcoal/80 font-light text-base leading-relaxed mb-4">
                Hands-on development of automated data pipelines, prompt engineering workflows, and interactive analytical tooling.
              </p>

              <ul className="text-base font-light text-charcoal/80 space-y-2.5 max-w-2xl">
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0" />
                  <span>Assisting in the design and evaluation of prompt engineering frameworks and LLM-assisted knowledge extraction pipelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0" />
                  <span>Developing automated data transformation, extraction, and validation scripts using Python and SQL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0" />
                  <span>Building responsive frontend components and integrating internal APIs for data visualization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0" />
                  <span>Collaborating on practical automation projects combining business logic with AI.</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-charcoal/5 text-charcoal">Python</span>
                <span className="px-2.5 py-1 rounded bg-charcoal/5 text-charcoal">SQL</span>
                <span className="px-2.5 py-1 rounded bg-charcoal/5 text-charcoal">Generative AI</span>
                <span className="px-2.5 py-1 rounded bg-charcoal/5 text-charcoal">Data Analytics</span>
                <span className="px-2.5 py-1 rounded bg-charcoal/5 text-charcoal">Prompt Engineering</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EDUCATION SECTION (ROW STYLE)                                             */}
      {/* ========================================================================= */}
      <section id="education" className="py-28 px-6 max-w-7xl mx-auto relative bg-beige border-t border-charcoal/10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 relative items-start">

          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <h2 className="text-emerald font-display font-semibold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald" />
              03 / ACADEMICS
            </h2>
            <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-charcoal uppercase leading-[0.9]">
              Education
            </h3>
            <p className="text-muted mt-5 font-light text-base leading-relaxed">
              Grounding technical AI development in commercial strategy, statistics, and mathematics.
            </p>
          </div>

          <div className="w-full md:w-2/3 border-t-2 border-charcoal">
            
            {/* Education Row 1: DU SOL */}
            <div className="border-b border-charcoal/20 group hover:bg-white transition-colors duration-400 py-10 px-6 -mx-6 md:px-8 md:-mx-8">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
                <div>
                  <span className="text-emerald font-bold tracking-widest text-xs font-mono mb-2 block uppercase">
                    2025 — PRESENT (PURSUING)
                  </span>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl group-hover:text-terracotta transition-colors uppercase text-charcoal">
                    Bachelor of Commerce (B.Com)
                  </h4>
                  <p className="text-base text-muted mt-1 uppercase tracking-wider font-mono">
                    Delhi University — School of Open Learning (DU SOL)
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald font-mono text-xs font-semibold">
                  Undergraduate Degree
                </span>
              </div>
              <p className="text-base font-light text-charcoal/80 max-w-2xl leading-relaxed">
                Focused on business administration, corporate economics, business statistics, and financial accounting—establishing a strong quantitative foundation for commercial decision modeling.
              </p>
            </div>

            {/* Education Row 2: CBSE Class XII */}
            <div className="border-b border-charcoal/20 group hover:bg-white transition-colors duration-400 py-10 px-6 -mx-6 md:px-8 md:-mx-8">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
                <div>
                  <span className="text-muted font-bold tracking-widest text-xs font-mono mb-2 block uppercase">
                    COMPLETED 2025
                  </span>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl group-hover:text-emerald transition-colors uppercase text-charcoal">
                    Senior Secondary (Class XII)
                  </h4>
                  <p className="text-base text-muted mt-1 uppercase tracking-wider font-mono">
                    Central Board of Secondary Education (CBSE)
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-charcoal/5 text-charcoal font-mono text-xs font-semibold">
                  Commerce + Math
                </span>
              </div>
              <p className="text-base font-light text-charcoal/80 max-w-2xl leading-relaxed">
                Specialized in Commerce with Mathematics, establishing core proficiency in advanced algebra, calculus, probability, and microeconomic analysis.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
