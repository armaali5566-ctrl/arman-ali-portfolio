"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050812] border-t border-white/10 py-16 relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Left: Brand & Coordinates */}
          <div className="md:col-span-6 flex flex-col items-start gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cobalt" />
              <span className="font-heading font-bold text-xl text-softwhite tracking-tight">
                {siteConfig.name}
              </span>
              <span className="font-mono text-xs text-mutedgrey/70 pl-2 border-l border-white/10">
                PORTFOLIO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-mutedgrey max-w-md leading-relaxed mt-2">
              AI Developer specializing in Generative AI applications, structured data analytics, and modern web application development.
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-mutedgrey/70">
              <span>{siteConfig.location}</span>
              <span>•</span>
              <span>{siteConfig.coordinates}</span>
            </div>
          </div>

          {/* Right: Quick Channels & Back To Top */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-6">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-mutedgrey hover:text-softwhite border border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-mutedgrey hover:text-softwhite border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-mutedgrey hover:text-softwhite border border-white/10 transition-colors"
                aria-label="WhatsApp Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-white/[0.03] hover:bg-white/[0.07] text-softwhite border border-white/10 hover:border-white/20 transition-all active:scale-95"
              aria-label="Back to Top of Page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cobalt group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedgrey/80 text-center sm:text-left">
          <div>
            &copy; {currentYear} {siteConfig.name}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-2 text-mutedgrey/60">
            <span>BUILT WITH NEXT.JS · TYPESCRIPT · TAILWIND CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
