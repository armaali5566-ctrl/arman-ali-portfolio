"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import {
  Linkedin,
  Github,
  MessageSquare,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-28 border-t border-white/10 bg-[#070C18] relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-cobalt uppercase tracking-widest mb-3">
              <span>[ 06 / TRANSMISSION ]</span>
              <span className="text-white/20">—</span>
              <span className="text-mutedgrey">INQUIRIES &amp; COLLABORATION</span>
            </div>

            <h2 className="font-heading font-extrabold text-display-section text-softwhite tracking-tight uppercase">
              LET&apos;S CONNECT
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-mutedgrey leading-relaxed">
            Have a project, opportunity, or idea in mind? I&apos;d be happy to connect.
          </p>
        </motion.div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* LinkedIn Channel */}
          <motion.a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group p-8 rounded-2xl bg-cardbg border border-white/10 hover:border-cobalt/50 transition-all duration-400 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-cobalt/10 text-cobalt border border-cobalt/25 group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-mutedgrey group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-heading font-bold text-xl text-softwhite mb-2 group-hover:text-cobalt transition-colors">
                LinkedIn
              </h3>
              <p className="text-xs sm:text-sm text-mutedgrey leading-relaxed">
                Connect professionally, discuss collaboration, or review endorsements.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-softwhite">
              <span className="text-mutedgrey">CHANNEL / 01</span>
              <span className="text-cobalt">arman-ali-111a83422 ↗</span>
            </div>
          </motion.a>

          {/* GitHub Channel */}
          <motion.a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group p-8 rounded-2xl bg-cardbg border border-white/10 hover:border-white/30 transition-all duration-400 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/[0.04] text-softwhite border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-mutedgrey group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-heading font-bold text-xl text-softwhite mb-2 group-hover:text-white transition-colors">
                GitHub
              </h3>
              <p className="text-xs sm:text-sm text-mutedgrey leading-relaxed">
                Explore repositories, active commits, code experiments, and side projects.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-softwhite">
              <span className="text-mutedgrey">CHANNEL / 02</span>
              <span>@armaali5566-ctrl ↗</span>
            </div>
          </motion.a>

          {/* WhatsApp Channel */}
          <motion.a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group p-8 rounded-2xl bg-cardbg border border-white/10 hover:border-emerald-500/50 transition-all duration-400 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-mutedgrey group-hover:text-white transition-colors" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-heading font-bold text-xl text-softwhite group-hover:text-emerald-400 transition-colors">
                  WhatsApp
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  DIRECT
                </span>
              </div>

              <p className="text-xs sm:text-sm text-mutedgrey leading-relaxed">
                Direct messaging for quick inquiries, project chats, or urgent questions.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-softwhite">
              <span className="text-mutedgrey">CHANNEL / 03</span>
              <span className="text-emerald-400">{siteConfig.contact.whatsappDisplay} ↗</span>
            </div>
          </motion.a>

        </div>

        {/* Direct Transmission Email Card (Two26 Architectural Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="p-8 sm:p-10 rounded-2xl bg-cardbg border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl"
        >
          <div className="flex items-start gap-5">
            <div className="p-3.5 rounded-xl bg-cobalt/10 border border-cobalt/25 text-cobalt shrink-0">
              <Mail className="w-6 h-6" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-mutedgrey block mb-1">
                DIRECT ELECTRONIC MAIL:
              </span>
              <div className="font-heading text-xl sm:text-2xl text-softwhite font-bold break-all">
                {siteConfig.contact.email}
              </div>
              <span className="text-xs font-mono text-mutedgrey/70 mt-1 block">
                Typical response latency: &lt; 24 hours
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 w-full lg:w-auto">
            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] text-softwhite border border-white/10 transition-colors active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-mutedgrey" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry%20for%20Arman%20Ali`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-cobalt hover:bg-cobalt-hover text-white transition-colors shadow-md shadow-cobalt/20 active:scale-95"
            >
              <span>Compose Dispatch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
