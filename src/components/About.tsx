"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto border-t border-charcoal/10 bg-beige-light rounded-3xl my-12 border">
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-terracotta font-display font-semibold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full border-2 border-terracotta" />
          04 / PERSPECTIVE
        </h2>
        <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-charcoal mb-8">
          A Little About Me
        </h3>
        <div className="p-8 md:p-10 rounded-2xl bg-white border border-charcoal/10 shadow-sm relative">
          <p className="font-display text-lg sm:text-xl md:text-2xl text-charcoal/90 leading-relaxed font-normal">
            &ldquo;I&apos;m Arman Ali, a B.Com student at Delhi University School of Open Learning and an aspiring AI Developer. I&apos;m interested in the intersection of artificial intelligence, data, and software development. I enjoy exploring new technologies, experimenting with AI-assisted development, and building practical digital experiences. My goal is to strengthen my technical foundations and create useful products that solve real problems.&rdquo;
          </p>
        </div>
      </div>

      {/* 3 Compact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Card 01 */}
        <div className="p-8 rounded-2xl bg-white border border-charcoal/10 hover:border-emerald transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-emerald tracking-widest block mb-4">PILLAR 01</span>
            <h4 className="font-display font-bold text-xl uppercase text-charcoal mb-3">WHAT I DO</h4>
            <p className="text-sm font-light text-muted leading-relaxed">
              Explore AI applications, data analysis, and modern web development architectures.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-charcoal/5 text-[11px] font-mono text-emerald">● ACTIVE FOCUS</div>
        </div>

        {/* Card 02 */}
        <div className="p-8 rounded-2xl bg-white border border-charcoal/10 hover:border-terracotta transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-terracotta tracking-widest block mb-4">PILLAR 02</span>
            <h4 className="font-display font-bold text-xl uppercase text-charcoal mb-3">HOW I WORK</h4>
            <p className="text-sm font-light text-muted leading-relaxed">
              Learn through experimentation, practical projects, and continuous improvement cycles.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-charcoal/5 text-[11px] font-mono text-terracotta">● PRAGMATIC BUILD</div>
        </div>

        {/* Card 03 */}
        <div className="p-8 rounded-2xl bg-white border border-charcoal/10 hover:border-emerald transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-emerald tracking-widest block mb-4">PILLAR 03</span>
            <h4 className="font-display font-bold text-xl uppercase text-charcoal mb-3">WHAT I&apos;M WORKING TOWARDS</h4>
            <p className="text-sm font-light text-muted leading-relaxed">
              Building stronger technical skills and developing useful, reliable digital products.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-charcoal/5 text-[11px] font-mono text-emerald">● REAL IMPACT</div>
        </div>

      </div>
    </section>
  );
}
