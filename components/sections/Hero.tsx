"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg mask-fade-y opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-2xl" />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent-glow">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            {dict.hero.status}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 heading-1 text-balance"
        >
          <span className="gradient-text">{dict.hero.headline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-fg-muted text-balance"
        >
          {dict.hero.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base text-fg-dim text-balance"
        >
          {dict.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href={`/${locale}#projects`} className="btn-accent group">
            {dict.hero.primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href={`/${locale}#contact`} className="btn-ghost">
            <Mail className="h-4 w-4" />
            {dict.hero.tertiaryCta}
          </a>
          <a
            href="/resume.pdf"
            className="btn-ghost"
            download
            aria-label="Download résumé PDF"
          >
            <Download className="h-4 w-4" />
            {dict.hero.secondaryCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-dim"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {SITE.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Unity · C# · VR/XR
          </span>
        </motion.div>

        <HeroOrb />
      </div>
    </section>
  );
}

function HeroOrb() {
  // Purely decorative. Rendered as static divs (not motion.*) so the
  // server and client produce identical HTML — no hydration mismatch.
  // The blur-3xl gradients are already soft enough that subtle CSS
  // motion is unnecessary; the section has the grid-bg for texture.
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-accent/30 to-accent-warm/10 blur-3xl" />
      <div className="absolute left-[-15%] bottom-[-15%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-accent-warm/20 to-accent/5 blur-3xl" />
    </div>
  );
}
