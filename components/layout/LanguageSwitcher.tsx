"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import { useTransition } from "react";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    if ((locales as readonly string[]).includes(segments[0])) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    const target = "/" + segments.join("/");
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    startTransition(() => router.push(target));
  }

  return (
    <div className="relative">
      <label className="sr-only" htmlFor="locale-select">
        Language
      </label>
      <div className="relative flex items-center">
        <Languages className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-fg-dim" />
        <select
          id="locale-select"
          value={locale}
          onChange={(e) => switchTo(e.target.value as Locale)}
          disabled={pending}
          className="appearance-none rounded-full border border-bg-line bg-bg-card/60 pl-7 pr-7 py-1.5 text-xs font-medium text-fg-muted hover:text-fg hover:border-fg-dim transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          {locales.map((loc) => (
            <option key={loc} value={loc} className="bg-bg-soft text-fg">
              {localeLabels[loc]}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2.5 text-fg-dim text-[10px]">▾</span>
      </div>
    </div>
  );
}
