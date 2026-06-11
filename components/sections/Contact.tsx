"use client";

import { useState } from "react";
import { Send, Linkedin, Github, Youtube, Mail } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function Contact({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject =
    locale === "es"
      ? `Contacto desde portafolio — ${name || "Sin nombre"}`
      : `Portfolio contact — ${name || "No name"}`;
  const body = [
    message,
    "",
    "—",
    name,
    email,
  ]
    .filter(Boolean)
    .join("\n");
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-nav">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn>
            <p className="eyebrow">{dict.contact.eyebrow}</p>
            <h2 className="mt-3 heading-2 text-balance">{dict.contact.title}</h2>
            <p className="mt-4 text-fg-muted text-balance">{dict.contact.lead}</p>

            <div className="mt-10">
              <p className="text-sm font-mono uppercase tracking-wider text-fg-dim">
                {dict.contact.social}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialButton
                  href={SITE.social.linkedin}
                  label="LinkedIn"
                  icon={<Linkedin className="h-4 w-4" />}
                />
                <SocialButton
                  href={SITE.social.github}
                  label="GitHub"
                  icon={<Github className="h-4 w-4" />}
                />
                <SocialButton
                  href={SITE.social.youtube}
                  label="YouTube"
                  icon={<Youtube className="h-4 w-4" />}
                />
                <SocialButton
                  href={SITE.social.itch}
                  label="itch.io"
                  icon={<ItchIcon className="h-4 w-4" />}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              }}
              className="card p-6 sm:p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-fg-dim">
                  {dict.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-bg-line bg-bg-soft/60 px-4 py-2.5 text-sm text-fg placeholder:text-fg-dim focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-fg-dim">
                  {dict.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-bg-line bg-bg-soft/60 px-4 py-2.5 text-sm text-fg placeholder:text-fg-dim focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-fg-dim">
                  {dict.contact.form.message}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-bg-line bg-bg-soft/60 px-4 py-2.5 text-sm text-fg placeholder:text-fg-dim focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-accent w-full group"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                {dict.contact.form.send}
              </button>

              <p className="text-xs text-fg-dim flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>{dict.contact.form.note}</span>
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
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
      className="btn-ghost"
    >
      {icon}
      {label}
    </a>
  );
}

function ItchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5l1.5 1.7v.6h15V6.7L21 5H3zm1.5 3v2.5c0 .6.4 1 1 1h.5v5.7c0 .5.4.8 1 .8h2.5v-2h6v2H18c.6 0 1-.3 1-.8v-5.7h.5c.6 0 1-.4 1-1V8h-16zm7 2.7l1 1.4 1-1.4h2l-2 2.7 2 2.6h-2l-1-1.3-1 1.3h-2l2-2.6-2-2.7h2z" />
    </svg>
  );
}
