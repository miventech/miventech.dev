import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "nativevoxreader",
    title: "NativeVoxReader",
    tagline: {
      en: "High-performance .vox importer for Unity with greedy meshing & texture baking",
      es: "Importador nativo de .vox para Unity con greedy meshing y texture baking",
    },
    description: {
      en: "A native ScriptedImporter that treats MagicaVoxel .vox files as first-class Unity assets. Implements greedy meshing (up to 90% poly reduction), automatic texture atlas baking, full MagicaVoxel hierarchy support (Groups & Transforms) and a pluggable rendering pipeline via VoxRenderAbstract. 25★ on GitHub, MIT licensed, distributed via UPM.",
      es: "Un ScriptedImporter nativo que trata los archivos .vox de MagicaVoxel como assets de primera clase en Unity. Implementa greedy meshing (hasta 90% menos de polígonos), texture atlas automático, jerarquía completa de MagicaVoxel (Groups & Transforms) y un pipeline de renderizado extensible vía VoxRenderAbstract. 25★ en GitHub, licencia MIT, distribuido vía UPM.",
    },
    role: {
      en: "Architect, Author & Maintainer",
      es: "Arquitecto, autor y mantenedor",
    },
    category: "tool",
    year: 2026,
    featured: true,
    stack: ["Unity 2020.3+", "C#", "ScriptedImporter", "UPM", "Greedy Meshing", "Texture Atlas"],
    highlights: [
      "Native binary .vox/.vengi parser — no intermediate export",
      "Greedy meshing reduces triangles up to 90%",
      "Single atlas keeps draw calls = 1",
      "Extensible rendering: drop-in VoxRenderAbstract subclasses",
      "Real-time workflow: edit in MagicaVoxel, Unity updates instantly",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/NativeVoxReader", kind: "repo" },
      { label: "itch.io", url: "https://miventech.itch.io/native-voxel-import-unity", kind: "itch" },
      { label: "UPM Install", url: "https://github.com/miventech/NativeUnityVoxReader.git", kind: "other" },
    ],
    cover: "https://img.itch.zone/aW1nLzI1MTAwODAzLnBuZw==/original/qlqXef.png",
    gallery: [
      "https://img.itch.zone/aW1hZ2UvNDIxMjEyMy8yNTEwMDQwMS5wbmc=/original/YaVJ2y.png",
      "https://img.itch.zone/aW1hZ2UvNDIxMjEyMy8yNTEwMDQyNi5naWY=/original/znBstu.gif",
      "https://img.itch.zone/aW1hZ2UvNDIxMjEyMy8yNTEwMDY4Ny5naWY=/original/W3bHc3.gif",
      "https://img.itch.zone/aW1hZ2UvNDIxMjEyMy8yNTEwMDY5MS5wbmc=/original/4%2FzETS.png",
      "https://img.itch.zone/aW1hZ2UvNDIxMjEyMy8yNTEwMDY5Mi5wbmc=/original/eeo9K3.png",
    ],
    metrics: [
      { label: "GitHub stars", value: "25" },
      { label: "Forks", value: "3" },
      { label: "License", value: "MIT" },
    ],
    license: "MIT",
    status: "maintained",
  },
  {
    slug: "detective-96",
    title: "Detective 96",
    tagline: {
      en: "2D mystery investigation game with custom dialogue and evidence systems",
      es: "Juego 2D de investigación y misterio con sistemas de diálogo y evidencia",
    },
    description: {
      en: "A pixel-art 2D detective game built in Unity. Players search for evidence, interrogate suspects and solve a 90s-flavored case. Features a custom dialogue system, evidence-based progression, character profiles and a fully hand-painted art style. Released with both source code (MIT) and a playable build.",
      es: "Un juego 2D de detectives en pixel-art construido en Unity. El jugador busca evidencia, interroga sospechosos y resuelve un caso con estética noventera. Incluye sistema de diálogo propio, progresión basada en evidencia, perfiles de personajes y arte completamente pintado a mano. Publicado con código fuente (MIT) y build jugable.",
    },
    role: {
      en: "Solo Developer (Design, Code, Art, Animation)",
      es: "Desarrollador único (Diseño, Código, Arte, Animación)",
    },
    category: "game",
    year: 2026,
    featured: true,
    stack: ["Unity", "C#", "Custom Dialogue System", "Pixel Art", "2D Physics"],
    highlights: [
      "Custom dialogue & evidence collection systems",
      "Hand-painted character profiles and scenes",
      "Branching investigation flow",
      "Full source under MIT",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/Detective-96-Unity-Game-2D", kind: "repo" },
    ],
    cover: "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDA2OC5wbmc=/original/mR6iW4.png",
    gallery: [
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDI2OS5wbmc=/original/%2FOJ3Mh.png",
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDA3MC5wbmc=/original/lpWyzn.png",
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDI3My5wbmc=/original/IPuVfe.png",
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDA3My5wbmc=/original/7CIcet.png",
    ],
    license: "MIT",
    status: "released",
  },
  {
    slug: "vectorial",
    title: "Vectorial",
    tagline: {
      en: "Interactive 3D electric charge simulator — physics education tool",
      es: "Simulador 3D interactivo de cargas eléctricas — herramienta educativa de física",
    },
    description: {
      en: "Vectorial is a real-time 3D simulation of electric charges — point, linear, surface and volumetric — built for university physics students. Visualizes electric fields, Coulomb forces and equipotential surfaces. Also published on Google Play. Combines a scientific computing engine with an accessible interactive UI.",
      es: "Vectorial es una simulación 3D en tiempo real de cargas eléctricas — puntuales, lineales, superficiales y volumétricas — pensada para estudiantes universitarios de física. Visualiza campos eléctricos, fuerzas de Coulomb y superficies equipotenciales. También publicado en Google Play. Combina un motor de cómputo científico con una UI interactiva accesible.",
    },
    role: {
      en: "Solo Developer (Engine, Simulation, UX)",
      es: "Desarrollador único (Motor, Simulación, UX)",
    },
    category: "tool",
    year: 2023,
    featured: true,
    stack: ["Unity", "C#", "Physics Simulation", "Cross-platform", "Educational UX"],
    highlights: [
      "Point / linear / surface / volumetric charge models",
      "Real-time electric field & force visualization",
      "Cross-platform: Windows + Android (Google Play)",
      "Embedded theory with interactive diagrams",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/Vectorial-Simulador-de-Cargas-Electricas", kind: "repo" },
      { label: "itch.io", url: "https://miventech.itch.io/vectorial3d", kind: "itch" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mvt.telecom.vectorial", kind: "play" },
    ],
    cover: "https://img.itch.zone/aW1nLzQwOTUwMzkuanBn/original/bKjkzJ.jpg",
    gallery: [
      "https://img.itch.zone/aW1nLzQwOTQ5OTcuanBn/original/LOuF1I.jpg",
      "https://img.itch.zone/aW1nLzQwOTUwMDAuanBn/original/qLEaHA.jpg",
      "https://img.itch.zone/aW1nLzQwOTQ5OTguanBn/original/li7vSU.jpg",
      "https://img.itch.zone/aW1nLzQwOTUwMDMuanBn/original/rthkDh.jpg",
    ],
    license: "MIT",
    status: "released",
  },
  {
    slug: "unity-runtime-file-packer",
    title: "Unity Runtime FilePacker",
    tagline: {
      en: "High-performance asset packaging library — encrypted, compressed, zero deps",
      es: "Librería de empaquetado de assets en runtime — cifrada, comprimida, sin dependencias",
    },
    description: {
      en: "A runtime asset-management library for Unity that bundles thousands of loose files into secure, compressed binary containers (chunks). Designed for shipping DLCs, mods, user-generated content or save-state payloads without external file-system assumptions.",
      es: "Una librería de gestión de assets en runtime para Unity que agrupa miles de archivos sueltos en contenedores binarios cifrados y comprimidos (chunks). Pensada para distribuir DLCs, mods, contenido generado por el usuario o payloads de guardado sin asumir un sistema de archivos externo.",
    },
    role: {
      en: "Author & Maintainer",
      es: "Autor y mantenedor",
    },
    category: "library",
    year: 2026,
    featured: false,
    stack: ["Unity", "C#", "Binary I/O", "Compression", "AES Encryption"],
    highlights: [
      "Chunk-based binary container format",
      "Built-in compression + AES encryption",
      "Stream-based API for huge packages",
      "Zero external dependencies",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/Unity-Runtime-File-Packer", kind: "repo" },
    ],
    cover: "/projects/filepacker-cover.svg",
    metrics: [
      { label: "License", value: "MIT" },
      { label: "Deps", value: "0" },
    ],
    license: "MIT",
    status: "maintained",
  },
  {
    slug: "experience-system",
    title: "Experience System for Unity",
    tagline: {
      en: "Modular XP/leveling system with linear, polynomial, exponential and time-based curves",
      es: "Sistema modular de XP y nivel con curvas lineales, polinómicas, exponenciales y temporales",
    },
    description: {
      en: "A plug-and-play progression system for Unity. Supports multiple scaling curves out of the box, ScriptableObject-driven configuration, and event hooks for level-ups, milestones and reward gates. Designed to be subclassed for RPGs, roguelikes, idle games or learning apps.",
      es: "Un sistema de progresión plug-and-play para Unity. Soporta múltiples curvas de escalado de fábrica, configuración basada en ScriptableObjects y eventos para level-ups, hitos y recompensas. Diseñado para subclasificar en RPGs, roguelikes, juegos idle o apps de aprendizaje.",
    },
    role: {
      en: "Author & Maintainer",
      es: "Autor y mantenedor",
    },
    category: "library",
    year: 2026,
    featured: true,
    stack: ["Unity", "C#", "ScriptableObjects", "Event System", "Curves"],
    highlights: [
      "4 built-in scaling strategies",
      "ScriptableObject-driven config",
      "UnityEvent hooks for level-ups",
      "Extensible for any progression use case",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/ExperienceSystemForUnity", kind: "repo" },
    ],
    cover: "/projects/experience-cover.svg",
    license: "MIT",
    status: "maintained",
  },
  {
    slug: "icube",
    title: "ICUBE",
    tagline: {
      en: "Foddian platformer built in 7 days for the Ludwig Jam",
      es: "Platformero Foddian construido en 7 días para la Ludwig Jam",
    },
    description: {
      en: "ICUBE is a Foddian-style precision platformer created for the Ludwig Jam 2021. Built start-to-finish in 7 days (10/16 → 10/23/2021). Challenging level design based on layered rotational mechanics. Released as a free browser + Windows build under MIT.",
      es: "ICUBE es un platformero de precisión estilo Foddian creado para la Ludwig Jam 2021. Construido de principio a fin en 7 días (16/10 → 23/10/2021). Diseño de niveles desafiante basado en mecánicas de rotación en capas. Publicado como build gratuita para navegador y Windows bajo MIT.",
    },
    role: {
      en: "Solo Developer (Design, Code, Art, Sound)",
      es: "Desarrollador único (Diseño, Código, Arte, Sonido)",
    },
    category: "jam",
    year: 2021,
    featured: true,
    stack: ["Unity", "C#", "Custom 2D Physics", "Foddian Mechanics", "Level Design"],
    highlights: [
      "7-day jam sprint",
      "Original rotational puzzle design",
      "Full source released under MIT",
      "Browser + Windows build",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/icube", kind: "itch" },
      { label: "GitHub", url: "https://github.com/miventech/ICUBE-GAME-LUDWIG-JAM", kind: "repo" },
      { label: "Ludwig Jam", url: "https://itch.io/jam/ludwig-2021", kind: "other" },
    ],
    cover: "https://img.itch.zone/aW1nLzcyNjk5OTUuZ2lm/original/ykDZxW.gif",
    gallery: [
      "https://img.itch.zone/aW1hZ2UvMTI0NzI5My83MjY5ODk5LnBuZw==/original/56nszx.png",
      "https://img.itch.zone/aW1hZ2UvMTI0NzI5My83MjY5OTAxLnBuZw==/original/8TROvP.png",
      "https://img.itch.zone/aW1hZ2UvMTI0NzI5My83MjY5OTAyLnBuZw==/original/uCOG02.png",
      "https://img.itch.zone/aW1hZ2UvMTI0NzI5My83MjY5OTAzLnBuZw==/original/PXW3Ik.png",
    ],
    license: "MIT",
    status: "released",
  },
  {
    slug: "la-casa-glans",
    title: "La Casa Glans",
    tagline: {
      en: "Detective visual novel made for the Rhomita Game Jam",
      es: "Novela visual de detectives creada para la Rhomita Game Jam",
    },
    description: {
      en: "A short detective interactive fiction made during the Rhomita Game Jam. Players explore a family house, gather clues and identify a murderer among the Glans family. Built on a custom narrative system with smart 2D lighting (FunkyCode Smart Lighting 2D), and a custom dialogue engine.",
      es: "Una ficción interactiva corta de detectives hecha durante la Rhomita Game Jam. El jugador explora la casa familiar, recoge pistas e identifica al asesino dentro de la familia Glans. Construido sobre un sistema narrativo propio con Smart Lighting 2D (FunkyCode) y un motor de diálogo a medida.",
    },
    role: {
      en: "Programming, Animation & Story",
      es: "Programación, animación e historia",
    },
    category: "jam",
    year: 2024,
    featured: true,
    stack: ["Unity", "C#", "Smart Lighting 2D", "Custom Narrative Engine", "Pixel Art"],
    highlights: [
      "Full investigation loop with multiple clues",
      "Dynamic 2D lighting for atmosphere",
      "Story co-authored with Ambar Rodriguez",
      "Original soundtrack (TokyoGeisha)",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/la-casa-glans", kind: "itch" },
      { label: "Rhomita Jam", url: "https://itch.io/jam/rhomita-game-jam", kind: "other" },
    ],
    cover: "https://img.itch.zone/aW1nLzEyNTE0MDg4LnBuZw==/original/WPwgKa.png",
    gallery: [
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDA3NC5wbmc=/original/NYtBI%2B.png",
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDI3Mi5wbmc=/original/WFO0cL.png",
      "https://img.itch.zone/aW1hZ2UvMjEyNDU5Mi8xMjUxNDI3OS5wbmc=/original/UGtxLA.png",
    ],
    status: "released",
  },
  {
    slug: "miv-control-twitch",
    title: "Miv Control Twitch",
    tagline: {
      en: "Configurable Twitch chat controller for interactive streaming games",
      es: "Controlador configurable de chat de Twitch para juegos interactivos en stream",
    },
    description: {
      en: "A free, configurable desktop tool that lets streamers trigger Twitch chat messages via on-screen buttons. Built to power interactive Twitch games. Fully resizable, draggable, shareable button layouts. 5★ rating on itch.io.",
      es: "Una herramienta de escritorio gratuita y configurable que permite a los streamers enviar mensajes al chat de Twitch mediante botones en pantalla. Pensada para alimentar juegos interactivos en Twitch. Botones redimensionables, arrastrables y compartibles. 5★ en itch.io.",
    },
    role: {
      en: "Solo Developer",
      es: "Desarrollador único",
    },
    category: "tool",
    year: 2024,
    featured: true,
    stack: ["C#", "WinForms", "Twitch API", "JSON Configs", "UI/UX"],
    highlights: [
      "Customizable button grid with hot-reloadable JSON",
      "Twitch chat integration out of the box",
      "Portable, dependency-free",
      "5★ user rating",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/control-twitch", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1nLzE1NjY4MTE3LmpwZWc=/original/emfl6m.jpeg",
    gallery: [
      "https://img.itch.zone/aW1hZ2UvMjYyOTUwMy8xNTY2ODE1MS5wbmc=/original/i2NojN.png",
      "https://img.itch.zone/aW1hZ2UvMjYyOTUwMy8xNTY2Nzk1NC5wbmc=/original/6sOD62.png",
      "https://img.itch.zone/aW1hZ2UvMjYyOTUwMy8xNTY2Nzk1NS5wbmc=/original/kVBAGz.png",
      "https://img.itch.zone/aW1hZ2UvMjYyOTUwMy8xNTY2Nzk1Ni5wbmc=/original/eQDMGF.png",
    ],
    status: "released",
  },
  {
    slug: "pixel-invation-z",
    title: "Pixel Invation Z",
    tagline: {
      en: "Top-down 2D zombie shooter with destructible environments and 6 weapons",
      es: "Shooter 2D top-down de zombis con entornos destruibles y 6 armas",
    },
    description: {
      en: "Defend your house from endless waves of pixel zombies across a fully destructible environment. 6 weapon types, 4 playable characters (Lina, Ámbar, Diego, Jose) and a dynamic wave system. Built with Unity and custom 2D physics.",
      es: "Defiende tu casa de oleadas infinitas de zombis pixelados en un entorno completamente destruible. 6 tipos de armas, 4 personajes jugables (Lina, Ámbar, Diego, Jose) y un sistema dinámico de oleadas. Construido con Unity y físicas 2D a medida.",
    },
    role: {
      en: "Solo Developer",
      es: "Desarrollador único",
    },
    category: "game",
    year: 2022,
    featured: false,
    stack: ["Unity", "C#", "2D Physics", "Destructible Environments", "Wave System"],
    highlights: [
      "Fully destructible environment",
      "6 weapons + 4 playable characters",
      "Endless wave survival",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/pixel-invation-z", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1nLzU5MTEyMTAucG5n/original/8ZiVHG.png",
    status: "in-development",
  },
  {
    slug: "streamer-slayer",
    title: "Streamer Slayer",
    tagline: {
      en: "Action game built for Mini Jam 105: Dreamy — featuring real streamers as bosses",
      es: "Juego de acción creado para Mini Jam 105: Dreamy — con streamers reales como jefes",
    },
    description: {
      en: "A comedic action game where you fight twitch streamers as bosses. Built during Mini Jam 105 (theme: Dreamy). Features a hidden legendary weapon, dodge mechanics, and boss AI inspired by real streamer personalities.",
      es: "Un juego de acción cómico donde peleas contra streamers de Twitch como jefes. Construido durante Mini Jam 105 (tema: Dreamy). Incluye un arma legendaria oculta, mecánicas de esquiva y una IA de jefes inspirada en personalidades reales de streamers.",
    },
    role: {
      en: "Solo Developer",
      es: "Desarrollador único",
    },
    category: "jam",
    year: 2022,
    featured: false,
    stack: ["Unity", "C#", "Boss AI", "Browser Build", "Pixel Art"],
    highlights: [
      "5 streamer-themed bosses",
      "Hidden legendary weapon (chicken-shooter)",
      "Built in 3 days for Mini Jam",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/streamer-slayer", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1nLzU5MTEyMTAucG5n/original/8ZiVHG.png",
    status: "released",
  },
  {
    slug: "loop-planet",
    title: "Loop Planet",
    tagline: {
      en: "Strategy/tower defense developed live on Twitch during Black & White Jam #8",
      es: "Estrategia/tower defense desarrollado en vivo en Twitch durante Black & White Jam #8",
    },
    description: {
      en: "Save a planet by harnessing its looping energy to power turrets, lasers and production buildings. Built live on stream during Black & White Jam #8. Click-to-place mechanics with rotation-based energy flow.",
      es: "Salva un planeta aprovechando su energía en bucle para alimentar torretas, láseres y edificios de producción. Construido en vivo durante la Black & White Jam #8. Mecánica click-to-place con flujo de energía basado en rotación.",
    },
    role: {
      en: "Solo Developer (built live on Twitch)",
      es: "Desarrollador único (construido en vivo en Twitch)",
    },
    category: "jam",
    year: 2022,
    featured: false,
    stack: ["Unity", "C#", "Tower Defense", "Energy Systems", "Live Coding"],
    highlights: [
      "Developed live on Twitch",
      "Rotation-based energy flow mechanic",
      "Black & White aesthetic constraint",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/loop-planet", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1hZ2UvMTQ4Mjg0NC84NjQ3MzQwLnBuZw==/original/iFIg8a.png",
    status: "released",
  },
  {
    slug: "chicken-of-the-woods",
    title: "The Chicken of the Woods: Spring",
    tagline: {
      en: "Platformer for Spring 2D Jam 2023 — bring spring back to the world",
      es: "Platformero para Spring 2D Jam 2023 — devuelve la primavera al mundo",
    },
    description: {
      en: "Play as a chicken trying to bring spring back to a world consumed by eternal winter. Built for Spring 2D Jam 2023. Smooth controls, pixel-art animation and a tightly-scoped combat system.",
      es: "Juega como una gallina que intenta devolver la primavera a un mundo consumido por el invierno eterno. Construido para Spring 2D Jam 2023. Controles suaves, animación en pixel-art y un sistema de combate ajustado.",
    },
    role: {
      en: "Solo Developer",
      es: "Desarrollador único",
    },
    category: "jam",
    year: 2023,
    featured: false,
    stack: ["Unity", "C#", "2D Platformer", "Pixel Art", "Game Feel"],
    highlights: [
      "Spring 2D Jam 2023 submission",
      "Tight platformer feel",
      "Atmospheric winter/spring duality",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/the-chicken-of-the-woods-spring", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1hZ2UvMjA3OTQ1Mi8xMjIzMjU1Mi5wbmc=/original/zE46uj.png",
    status: "released",
  },
  {
    slug: "mvoxel",
    title: "MVoxel — Online Voxel Editor (Beta)",
    tagline: {
      en: "Browser-based voxel editor prototype built with Unity WebGL",
      es: "Prototipo de editor de vóxeles en navegador construido con Unity WebGL",
    },
    description: {
      en: "A WebGL voxel editor prototype that runs in the browser. The precursor work feeding into the NativeVoxReader project — exploring the full pipeline of in-browser voxel editing powered by Unity.",
      es: "Un prototipo de editor de vóxeles WebGL que corre en el navegador. Trabajo precursor que alimentó el proyecto NativeVoxReader — explorando el pipeline completo de edición de vóxeles en navegador impulsado por Unity.",
    },
    role: {
      en: "Solo Developer",
      es: "Desarrollador único",
    },
    category: "experiment",
    year: 2022,
    featured: false,
    stack: ["Unity WebGL", "C#", "Custom Editor", "WebGL Optimisation"],
    highlights: [
      "WebGL-based voxel editor",
      "Foundation for NativeVoxReader",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/mvoxel", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1hZ2UvMTU0MTk5OC8xMjU2NTIzNi5wbmc=/original/jwP6da.png",
    status: "prototype",
  },
  {
    slug: "tic-tac-toe-online",
    title: "Tic Tac Toe Online",
    tagline: {
      en: "Experimental multiplayer tic-tac-toe built for streaming communities",
      es: "Tres en raya multijugador experimental para comunidades de streaming",
    },
    description: {
      en: "An experimental multiplayer tic-tac-toe built around Twitch streamer communities. Includes room system, public lobbies and turn indicators. Open experimental status while the netcode is being hardened.",
      es: "Un tres en raya multijugador experimental pensado para comunidades de streamers de Twitch. Incluye sistema de salas, lobbies públicos e indicadores de turno. Estado experimental mientras se endurece el netcode.",
    },
    role: {
      en: "Solo Developer",
      es: "Desarrollador único",
    },
    category: "game",
    year: 2022,
    featured: false,
    stack: ["Unity", "C#", "Multiplayer", "WebSocket", "Lobby System"],
    highlights: [
      "Multi-room online matchmaking",
      "Twitch-community focused",
    ],
    links: [
      { label: "itch.io", url: "https://miventech.itch.io/tic-tac-toe-online", kind: "itch" },
    ],
    cover: "https://img.itch.zone/aW1hZ2UvMTQ5OTk0Ny84NzQzMjMxLnBuZw==/original/Hkd8Q9.png",
    status: "released",
  },
  {
    slug: "aes-unity",
    title: "AES-Unity",
    tagline: {
      en: "Minimalist AES string encryption library for Unity",
      es: "Librería minimalista de cifrado AES de strings para Unity",
    },
    description: {
      en: "A really simple AES encryption library for strings in Unity. Drop-in, no dependencies, works in any C# environment. Used as the foundation for several of Miventech's secure-runtime libraries.",
      es: "Una librería de cifrado AES muy simple para strings en Unity. Drop-in, sin dependencias, funciona en cualquier entorno C#. Sirve como base para varias librerías de runtime seguro de Miventech.",
    },
    role: {
      en: "Author",
      es: "Autor",
    },
    category: "library",
    year: 2022,
    featured: false,
    stack: ["C#", "AES", "System.Security.Cryptography"],
    highlights: [
      "Single-file, zero-dep API",
      "Battle-tested in FilePacker",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/AES-Unity", kind: "repo" },
    ],
    cover: "/projects/aes-cover.svg",
    status: "maintained",
  },
  {
    slug: "editable-runtime-input-system",
    title: "Editable Runtime Input System",
    tagline: {
      en: "Rebindable input system that lets players remap keys at runtime",
      es: "Sistema de input rebindeable que permite a los jugadores remapear teclas en runtime",
    },
    description: {
      en: "A small runtime input system that allows players to rebind keys at runtime, persist their settings, and consume them via a clean C# API. Open-source under GPLv2, used in multiple internal projects.",
      es: "Un sistema de input de runtime que permite a los jugadores remapear teclas en tiempo real, persistir sus ajustes y consumirlos mediante una API limpia en C#. Open-source bajo GPLv2, usado en múltiples proyectos internos.",
    },
    role: {
      en: "Author",
      es: "Autor",
    },
    category: "library",
    year: 2021,
    featured: false,
    stack: ["Unity", "C#", "Input System", "Persistence"],
    highlights: [
      "Runtime rebinding",
      "Persistent user settings",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/Editable-Runtime-Input-System-Unity", kind: "repo" },
    ],
    cover: "/projects/input-cover.svg",
    status: "maintained",
  },
  {
    slug: "easy-creator-ply",
    title: "Easy Creator PLY Files",
    tagline: {
      en: "High-performance PLY generator from point cloud data",
      es: "Generador de PLY de alto rendimiento a partir de nubes de puntos",
    },
    description: {
      en: "A small, focused PLY writer for Unity that turns a point cloud into a valid PLY file quickly. Used as part of internal scanning/inspection pipelines.",
      es: "Un escritor de PLY pequeño y enfocado para Unity que convierte una nube de puntos en un archivo PLY válido rápidamente. Usado como parte de pipelines internos de escaneo/inspección.",
    },
    role: {
      en: "Author",
      es: "Autor",
    },
    category: "library",
    year: 2023,
    featured: false,
    stack: ["C#", "PLY Format", "Point Cloud", "Binary I/O"],
    highlights: [
      "Dynamic, fast binary writer",
      "GPLv3 licensed",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/miventech/Easy-Creator-PLY-Files", kind: "repo" },
    ],
    cover: "/projects/ply-cover.svg",
    status: "maintained",
  },
  {
    slug: "gdd-forge",
    title: "GDD-Forge",
    tagline: {
      en: "Offline-first Game Design Document editor — portable .gdd files, zero server",
      es: "Editor de Game Design Documents offline-first — archivos .gdd portables, cero servidor",
    },
    description: {
      en: "GDD-Forge is a free, open-source, offline-first editor for writing and maintaining Game Design Documents. Multiple projects, 12 segment types (hero, character, enemy, boss, core loop, dialogue, canvas, tension curve…), checklist with task groups, design decisions, dependency-mapped features, visual brainstorm canvas, image upload and export to HTML/Markdown/PDF. Everything saves to portable .GDD files (ZIP with manifest.json + assets). No login, no server, no tracking. Built with Next.js 15, TypeScript and Tailwind.",
      es: "GDD-Forge es un editor gratuito, open-source y offline-first para escribir y mantener Game Design Documents. Múltiples proyectos, 12 tipos de segmentos (hero, personaje, enemigo, jefe, core loop, diálogo, lienzo, curva de tensión…), checklist con grupos de tareas, decisiones de diseño, features con dependencias, canvas visual de brainstorm, subida de imágenes y export a HTML/Markdown/PDF. Todo se guarda en archivos .GDD portables (ZIP con manifest.json + assets). Sin login, sin servidor, sin tracking. Construido con Next.js 15, TypeScript y Tailwind.",
    },
    role: {
      en: "Solo Developer (Design, Code, Architecture)",
      es: "Desarrollador único (Diseño, Código, Arquitectura)",
    },
    category: "tool",
    year: 2026,
    featured: true,
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "IndexedDB",
      "fflate (ZIP)",
    ],
    highlights: [
      "12 segment types: hero, text, image, grid, callout, character, enemy, boss, loop, dialogue, note, tension",
      "Custom .GDD file format v2 (ZIP + manifest.json + deduped assets by SHA-256)",
      "100% client-side, offline-first, no backend, no login, no tracking",
      "Multi-GDD support with IndexedDB persistence + on-demand asset loading",
      "Export to HTML, Markdown and PDF",
      "Light/dark theme with design tokens",
    ],
    links: [
      { label: "Live demo", url: "https://gdd-forge-omega.vercel.app/editor", kind: "demo" },
      { label: "GitHub", url: "https://github.com/miventech/GDD-Forge", kind: "repo" },
    ],
    cover: "/projects/gdd-forge-cover.svg",
    gallery: [
      "/projects/gdd-forge-cover.svg",
      "/projects/gdd-forge-checklist.svg",
      "/projects/gdd-forge-brainstorm.svg",
    ],
    license: "MIT",
    status: "released",
  },
  {
    slug: "audio-biblia-prompts",
    title: "La Biblio de Promts",
    tagline: {
      en: "Audio & SFX prompt builder for roguelite games — 263 blocks, 11 presets, zero backend",
      es: "Generador de prompts de audio y SFX para juegos roguelite — 263 bloques, 11 presets, sin backend",
    },
    description: {
      en: "La Biblio de Promts is a free web tool that generates audio (music + SFX) prompts for use in generative AIs like Suno, Udio, Stable Audio and AIVA. Designed specifically for roguelite creators with pixel-art / 8-bit / 16-bit / chiptune aesthetics. 263 catalogued blocks, 11 pre-built presets (Boss 8-bit, Tienda, Balatro, Hades II, Celeste…), drag & drop, double-click alternative, SFX combinator, intensity bar with auto-lock, custom chips, shareable packs (.json), undo/redo, history. UI in Spanish, final prompts in English (better for AIs). 100% static, no build step, zero dependencies.",
      es: "La Biblio de Promts es una herramienta web gratuita que genera prompts de audio (música + SFX) para usar en IAs generativas como Suno, Udio, Stable Audio y AIVA. Diseñada específicamente para creadores de roguelites con estética pixel-art / 8-bit / 16-bit / chiptune. 263 bloques catalogados, 11 presets pre-armados (Boss 8-bit, Tienda, Balatro, Hades II, Celeste…), drag & drop, doble-click como alternativa, combinador de SFX, barra de intensidad con bloqueo automático, chips custom, packs compartibles (.json), undo/redo, historial. UI en español, prompts en inglés (mejor para las IAs). 100% estática, sin build step, cero dependencias.",
    },
    role: {
      en: "Solo Developer (Design, Code, Data, Copy)",
      es: "Desarrollador único (Diseño, Código, Datos, Copy)",
    },
    category: "tool",
    year: 2026,
    featured: true,
    stack: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript (ES6+)",
      "HTML5 Drag and Drop API",
      "Web Audio API",
      "localStorage",
    ],
    highlights: [
      "263 catalogued blocks (styles, moods, SFX, instruments, environments…)",
      "11 pre-built presets (Boss 8-bit, Tienda, Balatro, Hades II, Celeste…)",
      "Drag & drop + double-click as accessible alternative",
      "SFX combinator (layer summation)",
      "Intensity bar with auto-lock on BPM/mood chips",
      "Custom chips + shareable packs (.json export/import)",
      "Undo/Redo (30 states), history of last 10 prompts, chip weight system",
      "~250 KB total, zero build step, zero dependencies",
    ],
    links: [
      { label: "Live demo", url: "https://audio-biblia-promts-ia.vercel.app/", kind: "demo" },
      { label: "GitHub", url: "https://github.com/miventech/Audio-Biblia-Promts-IA", kind: "repo" },
    ],
    cover: "/projects/audio-biblia-cover.svg",
    gallery: [
      "/projects/audio-biblia-cover.svg",
      "/projects/audio-biblia-library.svg",
      "/projects/audio-biblia-builder.svg",
    ],
    license: "MIT",
    status: "released",
  },
];

export const projectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);

export const featuredProjects = () => projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
