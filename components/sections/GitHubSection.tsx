import Link from "next/link";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type PinnedRepo = {
  name: string;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics?: string[];
};

// Top repos curated from real data. We avoid GitHub API calls to keep
// the site static & API-key-free, but these are accurate to the latest snapshot.
const pinnedRepos: PinnedRepo[] = [
  {
    name: "NativeVoxReader",
    fullName: "miventech/NativeVoxReader",
    description:
      "High-performance native .vox importer for Unity. MagicaVoxel hierarchy, greedy meshing, texture baking. UPM-ready.",
    language: "C#",
    stars: 25,
    forks: 3,
    url: "https://github.com/miventech/NativeVoxReader",
    topics: ["unity", "voxel", "csharp", "package-manager", "greedy-meshing"],
  },
  {
    name: "ExperienceSystemForUnity",
    fullName: "miventech/ExperienceSystemForUnity",
    description:
      "Modular XP & leveling system. Linear, polynomial, exponential and time-based scaling. Event-driven.",
    language: "C#",
    stars: 1,
    forks: 0,
    url: "https://github.com/miventech/ExperienceSystemForUnity",
    topics: ["unity", "csharp", "scriptableobject", "rpg"],
  },
  {
    name: "Unity-Runtime-File-Packer",
    fullName: "miventech/Unity-Runtime-File-Packer",
    description:
      "Bundle thousands of loose files into encrypted, compressed binary containers. Stream-based, zero deps.",
    language: "C#",
    stars: 1,
    forks: 0,
    url: "https://github.com/miventech/Unity-Runtime-File-Packer",
    topics: ["unity", "csharp", "compression", "encryption"],
  },
  {
    name: "Vectorial-Simulador-de-Cargas-Electricas",
    fullName: "miventech/Vectorial-Simulador-de-Cargas-Electricas",
    description:
      "Interactive 3D electric charge simulator for university physics. Cross-platform Unity build.",
    language: "C#",
    stars: 0,
    forks: 0,
    url: "https://github.com/miventech/Vectorial-Simulador-de-Cargas-Electricas",
    topics: ["unity", "physics", "csharp", "education"],
  },
  {
    name: "Detective-96-Unity-Game-2D",
    fullName: "miventech/Detective-96-Unity-Game-2D",
    description:
      "2D mystery investigation game in Unity. Custom dialogue & evidence systems, hand-painted art.",
    language: "C#",
    stars: 0,
    forks: 0,
    url: "https://github.com/miventech/Detective-96-Unity-Game-2D",
    topics: ["unity", "csharp", "game-2d", "pixel-art"],
  },
  {
    name: "Easy-Creator-PLY-Files",
    fullName: "miventech/Easy-Creator-PLY-Files",
    description:
      "Generate PLY point cloud files fast. Dynamic, binary, ideal for scanning & inspection pipelines.",
    language: "C#",
    stars: 2,
    forks: 0,
    url: "https://github.com/miventech/Easy-Creator-PLY-Files",
    topics: ["unity", "csharp", "point-cloud", "ply"],
  },
];

const languageColor: Record<string, string> = {
  "C#": "#a48bff",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  Rust: "#dea584",
  PowerShell: "#012456",
};

export function GitHubSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="github" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-page">
        <FadeIn>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow">{dict.github.eyebrow}</p>
              <h2 className="mt-3 heading-2 text-balance">{dict.github.title}</h2>
              <p className="mt-4 max-w-2xl text-fg-muted text-balance">
                {dict.github.subtitle}
              </p>
            </div>
            <Link
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" />
              {dict.github.viewProfile}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <FadeIn>
              <p className="text-sm font-mono uppercase tracking-wider text-fg-dim mb-4">
                {dict.github.pinned}
              </p>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {pinnedRepos.map((repo, i) => (
                <FadeIn key={repo.fullName} delay={i * 0.04}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="card-hover p-5 h-full flex flex-col group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold group-hover:text-accent-glow transition-colors">
                        {repo.name}
                      </h3>
                      <ExternalLink className="h-3.5 w-3.5 text-fg-dim shrink-0 mt-1" />
                    </div>
                    <p className="mt-2 text-sm text-fg-muted line-clamp-3 flex-1">
                      {repo.description}
                    </p>
                    {repo.topics && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {repo.topics.slice(0, 3).map((t) => (
                          <span key={t} className="chip text-[10px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 flex items-center gap-4 text-xs text-fg-dim">
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: languageColor[repo.language] ?? "#888" }}
                        />
                        {repo.language}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="card p-6 h-full">
              <p className="text-sm font-mono uppercase tracking-wider text-fg-dim">
                {dict.github.topLangs}
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  { name: "C#", pct: 88 },
                  { name: "JavaScript", pct: 4 },
                  { name: "HTML", pct: 3 },
                  { name: "Rust", pct: 2 },
                  { name: "PowerShell", pct: 2 },
                  { name: "Other", pct: 1 },
                ].map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: languageColor[lang.name] ?? "#888" }}
                        />
                        {lang.name}
                      </span>
                      <span className="text-fg-dim font-mono">{lang.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-warm"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-bg-line space-y-2 text-sm">
                <Row label="Public repos" value="23+" />
                <Row label="Followers" value="3" />
                <Row label="Following" value="15" />
                <Row label="Top stars" value="25★" />
              </div>

              <a
                href="https://github.com/miventech?tab=achievements"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-fg-dim hover:text-fg"
              >
                <Code2 className="h-3.5 w-3.5" />
                Achievements: Starstruck
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-fg-muted">{label}</span>
      <span className="font-mono text-fg">{value}</span>
    </div>
  );
}
