import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, PlayCircle, Star, GitFork, Calendar, User, Code2, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { getDictionary } from "@/lib/dictionaries";
import { projects, getProject } from "@/lib/projects";
import { isLocale } from "@/lib/i18n";

export async function generateStaticParams() {
  return projects.flatMap((p) => [
    { locale: "en", slug: p.slug },
    { locale: "es", slug: p.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const dict = await getDictionary(locale as "en" | "es");
  return {
    title: project.title,
    description: project.tagline[locale as "en" | "es"],
  };
}

const linkIcon = {
  repo: Github,
  itch: PlayCircle,
  play: PlayCircle,
  demo: PlayCircle,
  video: PlayCircle,
  store: ArrowUpRight,
  other: ArrowUpRight,
} as const;

const statusLabel: Record<string, { en: string; es: string }> = {
  released: { en: "Released", es: "Publicado" },
  "in-development": { en: "In development", es: "En desarrollo" },
  prototype: { en: "Prototype", es: "Prototipo" },
  maintained: { en: "Actively maintained", es: "Mantenido activamente" },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  const dict = await getDictionary(rawLocale);
  const locale = rawLocale as "en" | "es";

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <article className="pt-28 sm:pt-32 pb-20">
      <div className="container-narrow">
        <FadeIn>
          <Link
            href={`/${locale}/projects`}
            className="btn-link text-fg-dim"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {dict.projects.caseStudy.backToProjects}
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6 flex items-center gap-2">
            <span className="chip-accent">
              {dict.projects.filters[project.category]}
            </span>
            {project.license && <span className="chip">{project.license}</span>}
            {project.status && (
              <span className="chip text-success border-success/30">
                {statusLabel[project.status]?.[locale] ?? project.status}
              </span>
            )}
          </div>
          <h1 className="mt-4 heading-1 text-balance">{project.title}</h1>
          <p className="mt-4 text-lg text-fg-muted text-balance">
            {project.tagline[locale]}
          </p>
        </FadeIn>

        {project.cover && (
          <FadeIn delay={0.1}>
            <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-2xl border border-bg-line bg-bg-soft">
              {project.cover.startsWith("http") || project.cover.startsWith("/") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full grid place-items-center bg-gradient-to-br from-accent/10 to-accent-warm/5">
                  <span className="font-display text-7xl font-bold text-fg/20">
                    {project.title.slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            <FadeIn>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="mt-4 text-fg-muted whitespace-pre-line text-balance">
                {project.description[locale]}
              </p>
            </FadeIn>

            <FadeIn>
              <h2 className="text-2xl font-semibold">
                {dict.projects.caseStudy.highlights}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-fg-muted">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-accent-glow shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {project.gallery && project.gallery.length > 0 && (
              <FadeIn>
                <h2 className="text-2xl font-semibold">Gallery</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.gallery.map((src, i) => (
                    <div
                      key={src}
                      className="relative aspect-[16/10] overflow-hidden rounded-xl border border-bg-line bg-bg-soft"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <FadeIn delay={0.1}>
              <div className="card p-5">
                <dl className="space-y-4 text-sm">
                  <DetailRow
                    icon={<User className="h-4 w-4" />}
                    label={dict.projects.caseStudy.role}
                    value={project.role[locale]}
                  />
                  <DetailRow
                    icon={<Calendar className="h-4 w-4" />}
                    label={dict.projects.caseStudy.year}
                    value={String(project.year)}
                  />
                  <DetailRow
                    icon={<Code2 className="h-4 w-4" />}
                    label={dict.projects.caseStudy.stack}
                    value={
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                          <span key={s} className="chip text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    }
                  />
                  {project.metrics?.map((m) => (
                    <DetailRow
                      key={m.label}
                      icon={
                        m.label.toLowerCase().includes("star") ? (
                          <Star className="h-4 w-4" />
                        ) : m.label.toLowerCase().includes("fork") ? (
                          <GitFork className="h-4 w-4" />
                        ) : null
                      }
                      label={m.label}
                      value={<span className="font-mono">{m.value}</span>}
                    />
                  ))}
                </dl>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="card p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-fg-dim">
                  {dict.projects.caseStudy.links}
                </p>
                <div className="mt-3 space-y-2">
                  {project.links.map((l) => {
                    const Icon = linkIcon[l.kind];
                    return (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-ghost w-full justify-between"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {l.label}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-fg-dim" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-bg-line">
            <FadeIn>
              <p className="eyebrow">{dict.projects.caseStudy.otherProjects}</p>
            </FadeIn>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <FadeIn key={p.slug}>
                  <Link
                    href={`/${locale}/projects/${p.slug}`}
                    className="card-hover p-4 h-full flex flex-col"
                  >
                    {p.cover.startsWith("http") || p.cover.startsWith("/") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="aspect-[16/10] w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="aspect-[16/10] w-full rounded-lg grid place-items-center bg-gradient-to-br from-accent/10 to-accent-warm/5">
                        <span className="font-display text-3xl font-bold text-fg/20">
                          {p.title.slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <h3 className="mt-3 font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-fg-muted line-clamp-2">
                      {p.tagline[locale]}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-mono uppercase tracking-wider text-fg-dim inline-flex items-center gap-1.5">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 text-fg">{value}</dd>
    </div>
  );
}
