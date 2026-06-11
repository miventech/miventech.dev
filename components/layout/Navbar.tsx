"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";

const navItems = (dict: Dictionary) => [
  { href: "/#work", label: dict.nav.work },
  { href: "/#projects", label: dict.nav.projects },
  { href: "/#skills", label: dict.nav.skills },
  { href: "/#content", label: dict.nav.content },
  { href: "/#career", label: dict.nav.career },
  { href: "/#contact", label: dict.nav.contact },
];

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-bg-line/60"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
          aria-label="Miventech home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent to-accent-warm text-bg font-bold">
            M
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems(dict).map((item) => (
            <a
              key={item.href}
              href={`/${locale}${item.href.startsWith("/#") ? item.href.slice(1) : item.href}`}
              className="rounded-full px-3 py-1.5 text-sm text-fg-muted hover:text-fg hover:bg-bg-card/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hidden sm:grid h-9 w-9 place-items-center rounded-full text-fg-muted hover:text-fg hover:bg-bg-card/50 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-bg-line bg-bg-card/60 text-fg-muted hover:text-fg"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-bg-line bg-bg/95 backdrop-blur"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {navItems(dict).map((item) => (
                <a
                  key={item.href}
                  href={`/${locale}${item.href.startsWith("/#") ? item.href.slice(1) : item.href}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base text-fg-muted hover:text-fg hover:bg-bg-card/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
