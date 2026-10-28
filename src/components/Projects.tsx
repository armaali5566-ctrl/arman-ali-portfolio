"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="bg-charcoal text-beige relative py-24 sm:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-terracotta font-display font-semibold tracking-widest text-xs uppercase mb-2">
            SELECTED WORK
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase text-beige">
              PROJECTS
            </h2>
            <p className="text-sm font-mono text-beige/60">
              A collection of projects exploring AI, data, and digital experiences.
            </p>
          </div>
        </div>

        {/* Projects Horizontal Showcase (Scrollable on desktop, stacked on mobile) */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 overflow-x-auto pb-8 pt-2 scrollbar-none md:snap-x md:snap-mandatory">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="w-full md:w-[480px] lg:w-[560px] flex-shrink-0 group md:snap-start bg-charcoal-card p-6 sm:p-7 rounded-2xl border border-beige/10 hover:border-beige/30 transition-all duration-400 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Framing */}
                <div className="w-full aspect-[16/10] bg-charcoal-light overflow-hidden relative mb-6 rounded-xl border border-beige/10 shadow-lg">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-emerald/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                  
                  <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-md text-xs font-mono bg-charcoal/90 text-beige border border-white/10">
                    {project.category}
                  </div>
                  
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-md text-xs font-mono text-terracotta bg-charcoal/90 border border-white/10 font-bold">
                    № 0{index + 1}
                  </div>
                </div>

                {/* Project Details */}
                <h4 className="font-display font-bold text-2xl sm:text-3xl mb-3 group-hover:text-emerald transition-colors uppercase text-beige">
                  {project.title}
                </h4>
                
                <p className="text-beige/70 font-light text-sm sm:text-base leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-beige/5 border border-beige/10 text-beige/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-beige/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-beige/5 hover:bg-beige/10 text-beige border border-beige/10 transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-emerald hover:bg-emerald-hover text-white transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-beige/40">
                      In Development
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono text-terracotta font-semibold">
                  0{index + 1} / 04
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
