"use client";

import React, { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";

export default function GithubActivity() {
  // Generate a deterministic realistic activity pattern
  const gridWeeks = useMemo(() => {
    const weeks = [];
    const contributionClasses = [
      "bg-charcoal/5",     // 0
      "bg-emerald/30",     // 1-2
      "bg-emerald/60",     // 3-5
      "bg-emerald/85",     // 6-8
      "bg-emerald",        // 9+
    ];

    // Seeded random for consistent server/client hydration
    let seed = 42;
    function pseudoRand() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const r = pseudoRand();
        let level = 0;
        if (r > 0.82) level = 4;
        else if (r > 0.65) level = 3;
        else if (r > 0.45) level = 2;
        else if (r > 0.28) level = 1;
        days.push({
          level,
          className: contributionClasses[level],
          title: `Week ${w + 1}, Day ${d + 1}: ${level * 2 + 1} contributions`,
        });
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  return (
    <section id="github" className="py-28 bg-beige-light px-6 border-t border-charcoal/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-emerald font-display font-semibold tracking-widest text-xs uppercase mb-2">
              05 / CODE REPOSITORY
            </h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter uppercase text-charcoal">
              GitHub Activity
            </h3>
            <p className="text-muted font-light text-sm mt-1">
              Tracking ongoing contributions and software experiments at{" "}
              <span className="font-mono text-charcoal font-medium">@armaali5566-ctrl</span>.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <p className="text-terracotta font-mono font-bold tracking-widest text-xs uppercase">
              340+ Contributions This Year
            </p>
            <a
              href="https://github.com/armaali5566-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-charcoal/20 text-xs font-semibold hover:bg-charcoal hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/10 shadow-sm">
          <div className="flex gap-1 sm:gap-1.5 overflow-x-auto pb-4 cursor-crosshair w-full scrollbar-none">
            {gridWeeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1 sm:gap-1.5 flex-shrink-0">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    title={day.title}
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-all duration-200 hover:scale-150 hover:z-20 cursor-pointer ${day.className}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-muted uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
              <span>Active Repository Index: 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="w-3 h-3 bg-charcoal/5 rounded-sm" />
              <div className="w-3 h-3 bg-emerald/30 rounded-sm" />
              <div className="w-3 h-3 bg-emerald/60 rounded-sm" />
              <div className="w-3 h-3 bg-emerald/85 rounded-sm" />
              <div className="w-3 h-3 bg-emerald rounded-sm" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
