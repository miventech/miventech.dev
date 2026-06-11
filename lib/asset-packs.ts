export type AssetPack = {
  slug: string;
  title: string;
  price: string;
  description: { en: string; es: string };
  cover: string;
  url: string;
  tags: string[];
  /** Optional second preview shown when hovering or on a detail view. */
  preview?: string;
};

export const assetPacks: AssetPack[] = [
  {
    slug: "modular-greenhouse",
    title: "Modular Greenhouse + Extras",
    price: "$19.99",
    description: {
      en: "Craft retro lowpoly greenhouses with 3D pixel-art parts, endless builds. 100+ modular objects, plug & play for Unity/Unreal. Perfect for farming sims, indie survival and retro games.",
      es: "Crea invernaderos retro lowpoly con piezas de pixel-art 3D, construcciones infinitas. 100+ objetos modulares, plug & play para Unity/Unreal. Perfecto para farming sims, indie survival y juegos retro.",
    },
    cover:
      "https://img.itch.zone/aW1nLzIwODAzOTg2LmpwZw==/original/TwQTlg.jpg",
    preview:
      "https://img.itch.zone/aW1hZ2UvMzQ4NzQwNi8yMDgwMzk3NS5qcGc=/original/GusvP0.jpg",
    url: "https://miventech.itch.io/modular-greenhouse-and-extras",
    tags: ["Voxel", "Lowpoly", "Modular", "+100 Objects"],
  },
  {
    slug: "restaurant-tileset",
    title: "Restaurant & House TileSet 3D",
    price: "$4.99",
    description: {
      en: "200+ lowpoly voxel objects to build restaurants, kitchens and houses. Walls, doors, furniture, food, appliances — all ready in .obj + .mtl + texture.",
      es: "Más de 200 objetos voxel lowpoly para construir restaurantes, cocinas y casas. Paredes, puertas, muebles, comida, electrodomésticos — todo en .obj + .mtl + textura.",
    },
    cover:
      "https://img.itch.zone/aW1nLzgxNTUwMTkucG5n/original/%2BvY4Zh.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMTM5OTMwMC84MTU0OTUyLnBuZw==/original/5Ex%2FZw.png",
    url: "https://miventech.itch.io/restaurant-and-house-tileset-3d-asset-pack",
    tags: ["Voxel", "Lowpoly", "TileSet", "200+ Objects"],
  },
  {
    slug: "voxel-weapon-pack",
    title: "Voxel Weapon Asset Pack",
    price: "$1.99",
    description: {
      en: "23+ voxel firearms and weapons — AK-47, M4A1, Desert Eagle, MP5, AWP, plus melee, ammo, watchtower, gas mask and more. Ships in .obj, .fbx and .vox.",
      es: "23+ armas de fuego y cuerpo a cuerpo en voxel — AK-47, M4A1, Desert Eagle, MP5, AWP, más melee, munición, torre de vigilancia, máscara de gas. En .obj, .fbx y .vox.",
    },
    cover:
      "https://img.itch.zone/aW1hZ2UvMjE4ODQyMC8xMjkyNDYwMy5wbmc=/original/18LJSs.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMjE4ODQyMC8xMjkyNDYwNS5wbmc=/original/wmnwCu.png",
    url: "https://miventech.itch.io/voxel-weapon-pack",
    tags: ["Voxel", "FPS", "Weapons", "23+ Models"],
  },
  {
    slug: "school-voxel",
    title: "School Theme Voxel Pack",
    price: "$2.99",
    description: {
      en: "Classrooms, libraries, science tables, doors, lockers, books, microscopes, chalkboards. Complete voxel school kit in isometric, sprite, model and .vox formats.",
      es: "Aulas, bibliotecas, mesas de laboratorio, puertas, lockers, libros, microscopios, pizarrones. Kit escolar voxel completo en formatos isométrico, sprite, modelo y .vox.",
    },
    cover:
      "https://img.itch.zone/aW1nLzEyODQzNzI4LnBuZw==/original/43e0S1.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMjE3NTY4OC8xMjg0MzU5NC5wbmc=/original/oOqRBf.png",
    url: "https://miventech.itch.io/school-asset-pack-voxel",
    tags: ["Voxel", "School", "Props", "Multi-Format"],
  },
  {
    slug: "industries-electricity",
    title: "Industries & Electricity Pack",
    price: "$1.99",
    description: {
      en: "Industrial assets and electricity infrastructure for sim, tycoon or factory-builder games. Tools, construct elements, electronic and mechanical models in multiple formats.",
      es: "Assets industriales e infraestructura eléctrica para juegos sim, tycoon o constructores de fábricas. Herramientas, elementos de construcción, modelos electrónicos y mecánicos en múltiples formatos.",
    },
    cover:
      "https://img.itch.zone/aW1nLzEzMzAyMTYyLnBuZw==/original/Yc5kPW.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMjI0NTA3NS8xMzMwMjExOS5wbmc=/original/vOJlM%2B.png",
    url: "https://miventech.itch.io/industries-and-electricity-asset-pack",
    tags: ["Industrial", "Sim", "Electricity", "Props"],
  },
  {
    slug: "weapon-melee-pack",
    title: "Weapon Melee Pack — PSX LowPoly",
    price: "$1",
    description: {
      en: "Melee weapons with PSX-era lowpoly aesthetic — swords, axes, clubs, maces, all rigged and textured. Perfect for retro or stylized projects.",
      es: "Armas cuerpo a cuerpo con estética PSX lowpoly — espadas, hachas, mazas, mazos, todo riggeado y texturizado. Perfecto para proyectos retro o estilizados.",
    },
    cover:
      "https://img.itch.zone/aW1nLzE0MTcxNTg4LnBuZw==/original/fH8saE.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMjM5NDEzNi8xNDE3MTQ3Ny5wbmc=/original/QRz%2BTY.png",
    url: "https://miventech.itch.io/weapon-melee-pack-3d-model-psx-lowpoly",
    tags: ["PSX", "LowPoly", "Melee", "Retro"],
  },
  {
    slug: "voxel-modern-train",
    title: "Voxel Modern Train Car",
    price: "$1",
    description: {
      en: "3D voxel model of a modern train car — ideal for video game decoration and stylized transport sims. Includes .obj, .mtl, texture and .vox source.",
      es: "Modelo voxel 3D de un vagón de tren moderno — ideal para decoración en videojuegos y simuladores de transporte estilizados. Incluye .obj, .mtl, textura y fuente .vox.",
    },
    cover:
      "https://img.itch.zone/aW1nLzgxMjk0NTQucG5n/original/cv3WeZ.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMTM5NDk3Mi84MTI5NDE1LnBuZw==/original/sDfbhI.png",
    url: "https://miventech.itch.io/modern-3d-voxel-train-car",
    tags: ["Voxel", "Vehicle", "Prop"],
  },
  {
    slug: "male-character-voxel",
    title: "Male Character Voxel (Cayafa)",
    price: "Free",
    description: {
      en: "Male character with voxel aesthetics, skeleton and animations. Mixamo-compatible. Perfect for top-down and platformer games. Name your own price.",
      es: "Personaje masculino con estética voxel, esqueleto y animaciones. Compatible con Mixamo. Perfecto para juegos top-down y platformers. Paga lo que quieras.",
    },
    cover:
      "https://img.itch.zone/aW1hZ2UvMTM4ODg4Ni84MDkyNTk3LnBuZw==/original/OFsc6D.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMTM4ODg4Ni84MDkyNjA3LnBuZw==/original/p5OI5T.png",
    url: "https://miventech.itch.io/male-character-voxel",
    tags: ["Voxel", "Character", "Animated", "Mixamo"],
  },
  {
    slug: "zombie-boss-voxel",
    title: "Zombie Boss Voxel",
    price: "Free",
    description: {
      en: "Voxel zombie boss with skeleton and animations, Mixamo-compatible. Ideal for farm games, top-down shooters or wave survival. Name your own price.",
      es: "Jefe zombi voxel con esqueleto y animaciones, compatible con Mixamo. Ideal para juegos de granja, shooters top-down o supervivencia con oleadas. Paga lo que quieras.",
    },
    cover:
      "https://img.itch.zone/aW1hZ2UvMTM4ODg0MS84MDkyNDg5LnBuZw==/original/0CDP6q.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMTM4ODg0MS84MDkyNDk1LnBuZw==/original/ATWHzl.png",
    url: "https://miventech.itch.io/zombie-boss-voxel",
    tags: ["Voxel", "Enemy", "Boss", "Mixamo"],
  },
  {
    slug: "voxel-female-characters",
    title: "Voxel Female Characters",
    price: "Free",
    description: {
      en: "Female character with voxel aesthetics, skeleton and animations. Mixamo-compatible. Includes basic animation pack. Name your own price.",
      es: "Personaje femenino con estética voxel, esqueleto y animaciones. Compatible con Mixamo. Incluye pack de animaciones básicas. Paga lo que quieras.",
    },
    cover:
      "https://img.itch.zone/aW1hZ2UvMTM2MTgxMS83OTI3ODE2LnBuZw==/original/8Jjm2F.png",
    preview:
      "https://img.itch.zone/aW1hZ2UvMTM2MTgxMS83OTI3ODE4LnBuZw==/original/22Kv5w.png",
    url: "https://miventech.itch.io/voxel-female-characters",
    tags: ["Voxel", "Character", "Animated", "Mixamo"],
  },
];
