import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Youtube } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bg-line mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-display text-lg font-semibold"
          >
            <Image
              src="/logo.png"
              alt="Miventech logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            {SITE.name}
          </Link>
          <p className="mt-3 max-w-sm text-sm text-fg-muted">
            {dict.site.shortBio}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-2">
            <SocialLink href={SITE.social.github} label="GitHub" icon={<Github className="h-4 w-4" />} />
            <SocialLink href={SITE.social.linkedin} label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
            <SocialLink href={SITE.social.youtube} label="YouTube" icon={<Youtube className="h-4 w-4" />} />
            <SocialLink href={SITE.social.tiktok} label="TikTok" icon={<TikTokIcon className="h-4 w-4" />} />
            <SocialLink href={SITE.social.itch} label="itch.io" icon={<ItchIcon className="h-4 w-4" />} />
          </div>
          <p className="text-xs text-fg-dim">
            © {year} {SITE.fullName}. {dict.footer.rights}
          </p>
          <p className="text-xs text-fg-dim max-w-xs md:text-right">
            {dict.footer.builtWith}<br />
            {dict.footer.deployed} {dict.footer.openSource}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-bg-line bg-bg-card/60 text-fg-muted hover:text-fg hover:border-fg-dim transition-colors"
    >
      {icon}
    </a>
  );
}

// Icon alias to keep the import tree tidy
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
    </svg>
  );
}

function ItchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5l1.5 1.7v.6h15V6.7L21 5H3zm1.5 3v2.5c0 .6.4 1 1 1h.5v5.7c0 .5.4.8 1 .8h2.5v-2h6v2H18c.6 0 1-.3 1-.8v-5.7h.5c.6 0 1-.4 1-1V8h-16zm7 2.7l1 1.4 1-1.4h2l-2 2.7 2 2.6h-2l-1-1.3-1 1.3h-2l2-2.6-2-2.7h2z" />
    </svg>
  );
}
