import Link from "next/link";
import { Youtube, Github, Music2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { contentChannels } from "@/lib/skills";
import { SITE } from "@/lib/site";

const platformIcon = {
  youtube: Youtube,
  tiktok: Music2,
  github: Github,
} as const;

export function Content({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="content" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-page">
        <FadeIn>
          <p className="eyebrow">{dict.content.eyebrow}</p>
          <h2 className="mt-3 heading-2 text-balance">{dict.content.title}</h2>
          <p className="mt-4 max-w-2xl text-fg-muted text-balance">
            {dict.content.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contentChannels.map((channel, i) => {
            const Icon = platformIcon[channel.platform];
            return (
              <FadeIn key={channel.platform} delay={i * 0.05}>
                <Link
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card-hover p-6 h-full flex flex-col group"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-mono text-fg-dim">{channel.handle}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">
                    {channel.platform === "youtube" && (locale === "es" ? "YouTube" : "YouTube")}
                    {channel.platform === "tiktok" && "TikTok"}
                    {channel.platform === "github" && "GitHub"}
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted flex-1">
                    {channel.description[locale]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {channel.focus.map((f) => (
                      <span key={f} className="chip">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-xs text-fg-dim">
                    {channel.url.replace("https://", "")} →
                  </p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
