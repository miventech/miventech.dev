import { FadeIn } from "@/components/motion/FadeIn";
import {
  Code2,
  Gamepad2,
  Sparkles,
  Wrench,
  Terminal,
  Glasses,
} from "lucide-react";
import { skillGroups } from "@/lib/skills";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

const iconMap = {
  Code2,
  Gamepad2,
  Sparkles,
  Wrench,
  Terminal,
  Glasses,
} as const;

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="skills" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-page">
        <FadeIn>
          <p className="eyebrow">{dict.skills.eyebrow}</p>
          <h2 className="mt-3 heading-2 text-balance">{dict.skills.title}</h2>
          <p className="mt-4 max-w-2xl text-fg-muted text-balance">
            {dict.skills.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Code2;
            return (
              <FadeIn key={group.id} delay={i * 0.05}>
                <div className="card p-6 h-full hover:border-accent/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent-glow">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-semibold">{group.title[locale]}</h3>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-fg-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-sm text-fg-dim">
            <span className="text-fg-muted">{dict.skills.currentlyLearning}</span>{" "}
            {dict.skills.learning}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
