import { FadeIn } from "@/components/motion/FadeIn";
import { Layers, Compass, GitBranch, BookOpen } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

const iconMap = {
  Layers,
  Compass,
  GitBranch,
  BookOpen,
} as const;

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-narrow">
        <FadeIn>
          <p className="eyebrow">{dict.about.eyebrow}</p>
          <h2 className="mt-3 heading-2 text-balance">{dict.about.title}</h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="mt-6 text-lg text-fg-muted text-balance">{dict.about.lead}</p>
        </FadeIn>

        <div className="mt-6 space-y-4 text-fg-muted text-balance">
          {dict.about.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <p>{p}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14">
          <FadeIn>
            <p className="eyebrow">{dict.about.principles.title}</p>
          </FadeIn>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {dict.about.principles.items.map((item, i) => {
              const Icon = iconMap[Object.keys(iconMap)[i % 4] as keyof typeof iconMap];
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="card p-5 h-full">
                    <Icon className="h-5 w-5 text-accent-glow" />
                    <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-fg-muted">{item.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
