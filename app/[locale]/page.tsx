import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Content } from "@/components/sections/Content";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Career } from "@/components/sections/Career";
import { AssetPacks } from "@/components/sections/AssetPacks";
import { Contact } from "@/components/sections/Contact";
import { getDictionary } from "@/lib/dictionaries";
import { featuredProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const projects = featuredProjects();

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <About dict={dict} />
      <div id="work" className="scroll-mt-nav" />
      <Projects
        locale={locale}
        dict={dict}
        projects={projects}
        showFilters={false}
        limit={9}
      />
      <Skills locale={locale} dict={dict} />
      <AssetPacks locale={locale} dict={dict} />
      <Content locale={locale} dict={dict} />
      <GitHubSection locale={locale} dict={dict} />
      <Career locale={locale} dict={dict} />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
