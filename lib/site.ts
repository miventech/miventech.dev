import type { Locale } from "./i18n";

export const SITE = {
  name: "Miventech",
  fullName: "José Jaspe",
  title: "Unity Game Developer",
  subtitle: "Gameplay Programmer · Tools Engineer · Technical Content Creator",
  location: "Peru · Remote",
  tagline: {
    en: "Building games, systems and tools with Unity and C#.",
    es: "Construyendo juegos, sistemas y herramientas con Unity y C#.",
  },
  shortBio: {
    en: "Unity & VR/XR Developer focused on gameplay systems, native engine tooling and interactive experiences. MIT-licensed open-source maintainer with 25★ on GitHub and 17+ titles shipped on itch.io.",
    es: "Desarrollador Unity & VR/XR enfocado en sistemas de gameplay, herramientas nativas del motor y experiencias interactivas. Mantenedor de open-source bajo licencia MIT con 25★ en GitHub y más de 17 títulos publicados en itch.io.",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://miventech.dev",
  email: "miventech@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/jose-jaspe-miventech/",
    github: "https://github.com/miventech",
    youtube: "https://www.youtube.com/@MiVenTech",
    tiktok: "https://www.tiktok.com/@miventech",
    itch: "https://miventech.itch.io/",
    twitter: "https://twitter.com/miventech",
  },
} as const;

export function localized<T>(value: { en: T; es: T }, locale: Locale): T {
  return value[locale];
}
