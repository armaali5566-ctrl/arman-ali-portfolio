"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const elem = document.getElementById(targetId);
    if (elem) {
      const navOffset = 76;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Text & Headline Column */}
        <div className="md:col-span-7 lg:col-span-8 space-y-8 z-10">
          
          {/* Intro Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-terracotta"></span>
            <span className="text-terracotta font-display font-semibold tracking-widest text-xs sm:text-sm uppercase block">
              HELLO, I&apos;M ARMAN ALI
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.88] tracking-tighter text-charcoal uppercase">
            <div>DATA DRIVEN</div>
            <div className="flex items-baseline gap-2">
              INTELLIGENCE<span className="text-emerald">.</span>
            </div>
          </h1>

          {/* Headline & Bio Description */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-lg sm:text-xl font-medium text-emerald tracking-normal">
              AI Developer | Building Intelligent Digital Experiences
            </h2>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              &ldquo;I&apos;m an aspiring AI Developer interested in building practical applications using AI, data, and modern web technologies. I enjoy turning ideas into useful digital products and continuously improving my technical skills.&rdquo;
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button
              type="button"
              onClick={() => handleScrollTo("work")}
              className="group bg-emerald text-beige px-9 py-4 rounded-full font-medium hover:bg-terracotta transition-colors duration-400 shadow-md shadow-emerald/20 inline-flex items-center gap-3 cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Explore My Work</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="group border-2 border-charcoal text-charcoal px-9 py-4 rounded-full font-medium hover:bg-charcoal hover:text-beige transition-all duration-400 inline-flex items-center gap-3 cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Social Network Metadata Strip */}
          <div className="pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-6 text-xs font-mono uppercase text-muted">
            <span className="text-charcoal font-semibold">Channels:</span>
            <a
              href="https://github.com/armaali5566-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arman-ali-111a83422/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-muted/40">•</span>
            <span className="text-emerald font-semibold">New Delhi, IN</span>
          </div>

        </div>

        {/* Arman Ali Portrait / Visual Framing */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-t-full bg-beige-light group border-2 border-charcoal/15 shadow-2xl shadow-emerald/10">
            
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-terracotta/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            
            <Image
              src="/images/arman-portrait.jpg"
              alt="Arman Ali Portrait"
              width={600}
              height={800}
              priority
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
            />

            {/* Decorative Rotating Badge */}
            <div
              className="absolute bottom-6 right-6 z-20 bg-beige rounded-full p-3.5 animate-spin-slow shadow-lg border border-charcoal/10"
              title="AI & Analytics Systems"
            >
              <svg className="w-7 h-7 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 22l10-10L22 22 12 2z" />
              </svg>
            </div>

            {/* Bottom Label Badge */}
            <div className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-charcoal/90 text-beige text-[10px] font-mono">
              FIG. 01 — ARMAN ALI
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
