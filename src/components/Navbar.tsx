"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F1EB]/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm py-3.5"
          : "bg-[#F4F1EB]/80 backdrop-blur-sm border-b border-charcoal/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-display font-bold text-xl md:text-2xl tracking-tight text-charcoal flex items-center gap-2 group"
          aria-label="Arman Ali Homepage"
        >
          <span>ARMAN ALI</span>
          <span className="w-2.5 h-2.5 rounded-full bg-terracotta block transition-transform group-hover:scale-125" />
          <span className="hidden sm:inline-block text-[11px] font-mono text-muted pl-1 border-l border-charcoal/20">
            AI DEV
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-charcoal">
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "#skills")}
            className="hover:text-emerald transition-colors py-1"
          >
            Skills
          </a>
          <a
            href="#tools"
            onClick={(e) => handleNavClick(e, "#tools")}
            className="hover:text-emerald transition-colors py-1"
          >
            Stack
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, "#work")}
            className="hover:text-emerald transition-colors py-1"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, "#experience")}
            className="hover:text-emerald transition-colors py-1"
          >
            Experience
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="hover:text-emerald transition-colors py-1"
          >
            About
          </a>
          <a
            href="#github"
            onClick={(e) => handleNavClick(e, "#github")}
            className="hover:text-emerald transition-colors py-1"
          >
            Activity
          </a>
          <a
            href="#resume"
            onClick={(e) => handleNavClick(e, "#resume")}
            className="hover:text-emerald transition-colors py-1"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2 rounded-full bg-charcoal text-beige hover:bg-emerald transition-colors duration-300 shadow-sm"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-charcoal/5 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-terracotta" />
          ) : (
            <Menu className="w-6 h-6 text-charcoal" />
          )}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-beige border-b border-charcoal/10 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-widest text-charcoal">
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "#skills")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              01 — Skills
            </a>
            <a
              href="#tools"
              onClick={(e) => handleNavClick(e, "#tools")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              02 — Stack
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              03 — Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              04 — Experience &amp; Education
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              05 — About
            </a>
            <a
              href="#github"
              onClick={(e) => handleNavClick(e, "#github")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              06 — GitHub Activity
            </a>
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, "#resume")}
              className="hover:text-emerald py-2 border-b border-charcoal/5"
            >
              07 — Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-block text-center mt-2 px-6 py-3 rounded-full bg-emerald text-white hover:bg-terracotta transition-colors"
            >
              Contact Arman
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
