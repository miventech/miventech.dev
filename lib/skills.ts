import type { SkillGroup, CareerStat, ContentChannel } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "unity",
    title: {
      en: "Unity",
      es: "Unity",
    },
    icon: "Gamepad2",
    items: [
      "Gameplay Programming",
      "Editor Scripting",
      "ScriptableObjects",
      "ScriptedImporter / Asset Pipeline",
      "UI Toolkit & UGUI",
      "Input System",
      "Animation & Physics",
      "URP / Addressables",
      "Performance Profiling",
    ],
  },
  {
    id: "programming",
    title: {
      en: "Programming",
      es: "Programación",
    },
    icon: "Code2",
    items: [
      "C# (.NET)",
      "OOP & SOLID",
      "Design Patterns",
      "Event-driven Architecture",
      "Data-oriented Design",
      "Multithreading basics",
    ],
  },
  {
    id: "graphics",
    title: {
      en: "Graphics & Shaders",
      es: "Gráficos & Shaders",
    },
    icon: "Sparkles",
    items: ["Shader Graph", "Rendering Pipelines"],
  },
  {
    id: "xr",
    title: {
      en: "VR / XR",
      es: "VR / XR",
    },
    icon: "Glasses",
    items: ["OpenXR", "VR Interaction Systems", "Cross-platform XR builds"],
  },
  {
    id: "tools",
    title: {
      en: "Tooling & Workflow",
      es: "Tooling & Workflow",
    },
    icon: "Wrench",
    items: [
      "Git & GitHub",
      "Rider / Visual Studio",
      "MagicaVoxel",
      "Blender",
      "Asset bundling & CI",
    ],
  },
  {
    id: "languages",
    title: {
      en: "Other Languages",
      es: "Otros lenguajes",
    },
    icon: "Terminal",
    items: ["JavaScript / TypeScript", "Python", "PowerShell", "Rust (basics)", "HTML5 / CSS"],
  },
  {
    id: "ai-creative",
    title: {
      en: "AI & Creative Tools",
      es: "IA & Herramientas creativas",
    },
    icon: "Sparkles",
    items: [
      "Prompt engineering for audio (Suno, Udio, Stable Audio, AIVA)",
      "AI-assisted dev workflows (opencode, Copilot)",
    ],
  },
];

export const careerStats: CareerStat[] = [
  {
    value: "26+",
    label: {
      en: "Public repositories",
      es: "Repositorios públicos",
    },
  },
  {
    value: "25★",
    label: {
      en: "Top repo stars",
      es: "Stars en repo top",
    },
    description: {
      en: "NativeVoxReader on GitHub",
      es: "NativeVoxReader en GitHub",
    },
  },
  {
    value: "17+",
    label: {
      en: "Titles shipped",
      es: "Títulos publicados",
    },
    description: {
      en: "Across itch.io (games + tools + assets)",
      es: "En itch.io (juegos + herramientas + assets)",
    },
  },
  {
    value: "5",
    label: {
      en: "Game jams shipped",
      es: "Game jams entregados",
    },
    description: {
      en: "Ludwig, Mini Jam 105, B&W #8, Spring 2D, Rhomita",
      es: "Ludwig, Mini Jam 105, B&W #8, Spring 2D, Rhomita",
    },
  },
  {
    value: "MIT",
    label: {
      en: "Default license",
      es: "Licencia por defecto",
    },
    description: {
      en: "Most tools released as open-source",
      es: "La mayoría de herramientas como open-source",
    },
  },
  {
    value: "EN · ES",
    label: {
      en: "Docs & support",
      es: "Docs & soporte",
    },
    description: {
      en: "Bilingual documentation in flagship projects",
      es: "Documentación bilingüe en proyectos principales",
    },
  },
];

export const contentChannels: ContentChannel[] = [
  {
    platform: "youtube",
    handle: "@MiVenTech",
    url: "https://www.youtube.com/@MiVenTech",
    description: {
      en: "Long-form tutorials on Unity tooling, gameplay systems, custom editors, asset pipelines and devlogs from real projects.",
      es: "Tutoriales en formato largo sobre herramientas Unity, sistemas de gameplay, editores a medida, pipelines de assets y devlogs de proyectos reales.",
    },
    focus: ["Unity Tutorials", "Tools Development", "Devlogs", "Gameplay Systems"],
  },
  {
    platform: "tiktok",
    handle: "@miventech",
    url: "https://www.tiktok.com/@miventech",
    description: {
      en: "Short-form Unity tips, quick gamedev tricks, snippets from tools and jam games in 60 seconds or less.",
      es: "Tips cortos de Unity, trucos rápidos de gamedev, fragmentos de herramientas y juegos de jams en 60 segundos o menos.",
    },
    focus: ["Quick Tips", "Mini Devlogs", "Gamedev Snippets"],
  },
  {
    platform: "github",
    handle: "@miventech",
    url: "https://github.com/miventech",
    description: {
      en: "Open-source repositories — MIT licensed libraries, full game source, in-progress experiments and contributions.",
      es: "Repositorios open-source — librerías bajo MIT, código fuente de juegos, experimentos en curso y contribuciones.",
    },
    focus: ["Open Source", "MIT Libraries", "Game Source", "Experiments"],
  },
];
