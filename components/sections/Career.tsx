"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { careerStats } from "@/lib/skills";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function Career({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="career" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-page">
        <FadeIn>
          <p className="eyebrow">{dict.career.eyebrow}</p>
          <h2 className="mt-3 heading-2 text-balance">{dict.career.title}</h2>
          <p className="mt-4 max-w-2xl text-fg-muted text-balance">
            {dict.career.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-bg-line bg-bg-line sm:grid-cols-2 lg:grid-cols-3">
          {careerStats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-bg-card/60 p-6 h-full hover:bg-bg-card transition-colors">
                <Counter value={stat.value} />
                <p className="mt-3 text-base font-semibold text-fg">
                  {stat.label[locale]}
                </p>
                {stat.description && (
                  <p className="mt-1.5 text-sm text-fg-muted">
                    {stat.description[locale]}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplay(value);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span
      ref={ref}
      className="block font-display text-4xl sm:text-5xl font-semibold gradient-text"
    >
      {display}
    </span>
  );
}
