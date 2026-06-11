export type SocialLinks = {
  linkedin: string;
  github: string;
  youtube: string;
  tiktok: string;
  itch: string;
  twitter: string;
};

export type ProjectCategory =
  | "tool"
  | "game"
  | "jam"
  | "library"
  | "experiment";

export type Localized = { en: string; es: string };

export type ProjectLink = {
  label: string;
  url: string;
  kind: "demo" | "repo" | "video" | "store" | "play" | "itch" | "other";
};

export type ProjectMetric = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  tagline: Localized;
  description: Localized;
  role: Localized;
  category: ProjectCategory;
  year: number;
  featured: boolean;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  cover: string;
  gallery?: string[];
  metrics?: ProjectMetric[];
  license?: string;
  status?: "released" | "in-development" | "prototype" | "maintained";
};

export type SkillGroup = {
  id: string;
  title: Localized;
  icon: string;
  items: string[];
};

export type CareerStat = {
  value: string;
  label: Localized;
  description?: Localized;
};

export type ContentChannel = {
  platform: "youtube" | "tiktok" | "github";
  handle: string;
  url: string;
  description: Localized;
  focus: string[];
  metrics?: ProjectMetric[];
};
