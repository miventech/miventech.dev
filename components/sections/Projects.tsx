"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle, Star, Tag, Filter } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/types";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const linkIcon = {
  repo: Github,
  itch: PlayCircle,
  play: PlayCircle,
  demo: PlayCircle,
  video: PlayCircle,
  store: ArrowUpRight,
  other: ArrowUpRight,
} as const;

export function Projects({
  locale,
  dict,
  projects,
  showFilters = true,
  limit,
  showViewAll = true,
}: {
  locale: Locale;
  dict: Dictionary;
  projects: Project[];
  showFilters?: boolean;
  limit?: number;
  showViewAll?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, projects, limit]);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: dict.projects.filters.all },
    { id: "game", label: dict.projects.filters.game },
    { id: "tool", label: dict.projects.filters.tool },
    { id: "library", label: dict.projects.filters.library },
    { id: "jam", label: dict.projects.filters.jam },
    { id: "experiment", label: dict.projects.filters.experiment },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-page">
        <FadeIn>
          <p className="eyebrow">{dict.projects.eyebrow}</p>
          <h2 className="mt-3 heading-2 text-balance">{dict.projects.title}</h2>
          <p className="mt-4 max-w-2xl text-fg-muted text-balance">
            {dict.projects.subtitle}
          </p>
        </FadeIn>

        {showFilters && (
          <FadeIn delay={0.1}>
            <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Filter className="h-3.5 w-3.5 text-fg-dim shrink-0" />
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                    filter === f.id
                      ? "border-accent/50 bg-accent/10 text-accent-glow"
                      : "border-bg-line bg-bg-card/40 text-fg-muted hover:text-fg hover:border-fg-dim",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                dict={dict}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {showViewAll && (
          <FadeIn delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Link href={`/${locale}/projects`} className="btn-ghost group">
                {dict.projects.viewAll}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  locale,
  dict,
  index,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  index: number;
}) {
  const isRemote = project.cover.startsWith("http");
  const primaryLink = project.links[0];
  const Icon = primaryLink ? linkIcon[primaryLink.kind] : ArrowUpRight;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group card-hover overflow-hidden flex flex-col"
    >
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="block relative aspect-[16/10] overflow-hidden bg-bg-soft"
        aria-label={project.title}
      >
        {isRemote ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full grid place-items-center bg-gradient-to-br from-accent/10 to-accent-warm/5">
            <span className="font-display text-4xl font-bold text-fg/30">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-bg-card/20 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="chip-accent backdrop-blur">
            <Tag className="h-3 w-3" />
            {dict.projects.filters[project.category]}
          </span>
          {project.featured && (
            <span className="chip border-fg/20 bg-bg/60 backdrop-blur text-fg-muted">
              <Star className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight">
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="hover:text-accent-glow transition-colors"
            >
              {project.title}
            </Link>
          </h3>
          <span className="text-xs font-mono text-fg-dim shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-sm text-fg-muted line-clamp-3">
          {project.tagline[locale]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="chip text-fg-dim">+{project.stack.length - 3}</span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-bg-line/60">
          <span className="text-xs text-fg-dim">{project.role[locale]}</span>
          {primaryLink && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs font-medium text-fg-muted hover:text-fg"
            >
              <Icon className="h-3.5 w-3.5" />
              {primaryLink.label}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
