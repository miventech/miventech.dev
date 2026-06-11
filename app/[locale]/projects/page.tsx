import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { getDictionary } from "@/lib/dictionaries";
import { projects } from "@/lib/projects";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.projects,
    description: dict.projects.subtitle,
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="pt-32 pb-8">
        <div className="container-page">
          <p className="eyebrow">{dict.projects.eyebrow}</p>
          <h1 className="mt-3 heading-1 text-balance">{dict.projects.title}</h1>
          <p className="mt-4 max-w-2xl text-fg-muted text-balance">
            {dict.projects.subtitle}
          </p>
        </div>
      </div>
      <Projects
        locale={locale}
        dict={dict}
        projects={projects}
        showViewAll={false}
      />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
