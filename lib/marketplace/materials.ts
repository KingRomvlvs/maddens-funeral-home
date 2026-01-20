import type { MaterialPreset, InteriorPreset } from "./types";

export const woodMaterials: MaterialPreset[] = [
  {
    id: "mahogany",
    name: "Mahogany",
    category: "wood",
    thumbnail: "/textures/wood/mahogany-thumb.jpg",
    color: "#5c3317",
    metalness: 0.0,
    roughness: 0.65,
  },
  {
    id: "cherry",
    name: "Cherry",
    category: "wood",
    thumbnail: "/textures/wood/cherry-thumb.jpg",
    color: "#8b4513",
    metalness: 0.0,
    roughness: 0.6,
  },
  {
    id: "oak",
    name: "Oak",
    category: "wood",
    thumbnail: "/textures/wood/oak-thumb.jpg",
    color: "#c4a35a",
    metalness: 0.0,
    roughness: 0.7,
  },
  {
    id: "walnut",
    name: "Walnut",
    category: "wood",
    thumbnail: "/textures/wood/walnut-thumb.jpg",
    color: "#4a3728",
    metalness: 0.0,
    roughness: 0.65,
  },
  {
    id: "pine",
    name: "Pine",
    category: "wood",
    thumbnail: "/textures/wood/pine-thumb.jpg",
    color: "#e5c07b",
    metalness: 0.0,
    roughness: 0.75,
  },
];

export const metalMaterials: MaterialPreset[] = [
  {
    id: "bronze",
    name: "Bronze",
    category: "bronze",
    thumbnail: "/textures/metal/bronze-thumb.jpg",
    color: "#8b6914",
    metalness: 0.85,
    roughness: 0.35,
  },
  {
    id: "copper",
    name: "Copper",
    category: "metal",
    thumbnail: "/textures/metal/copper-thumb.jpg",
    color: "#b87333",
    metalness: 0.9,
    roughness: 0.3,
  },
  {
    id: "brushed-silver",
    name: "Brushed Silver",
    category: "stainless-steel",
    thumbnail: "/textures/metal/silver-thumb.jpg",
    color: "#c0c0c0",
    metalness: 0.95,
    roughness: 0.25,
  },
  {
    id: "polished-steel",
    name: "Polished Steel",
    category: "stainless-steel",
    thumbnail: "/textures/metal/steel-thumb.jpg",
    color: "#71797e",
    metalness: 0.95,
    roughness: 0.15,
  },
  {
    id: "black-metal",
    name: "Black Metal",
    category: "metal",
    thumbnail: "/textures/metal/black-thumb.jpg",
    color: "#1a1a1a",
    metalness: 0.8,
    roughness: 0.4,
  },
];

export const interiorPresets: InteriorPreset[] = [
  {
    id: "white-velvet",
    name: "White Velvet",
    thumbnail: "/textures/fabric/white-velvet-thumb.jpg",
    color: "#f5f5f5",
    fabricType: "velvet",
  },
  {
    id: "ivory-satin",
    name: "Ivory Satin",
    thumbnail: "/textures/fabric/ivory-satin-thumb.jpg",
    color: "#fffff0",
    fabricType: "satin",
  },
  {
    id: "blush-velvet",
    name: "Blush Velvet",
    thumbnail: "/textures/fabric/blush-velvet-thumb.jpg",
    color: "#e8d5d5",
    fabricType: "velvet",
  },
  {
    id: "champagne-crepe",
    name: "Champagne Crepe",
    thumbnail: "/textures/fabric/champagne-crepe-thumb.jpg",
    color: "#f7e7ce",
    fabricType: "crepe",
  },
];

export const allMaterials = [...woodMaterials, ...metalMaterials];

export function getMaterialById(id: string): MaterialPreset | undefined {
  return allMaterials.find((m) => m.id === id);
}

export function getInteriorById(id: string): InteriorPreset | undefined {
  return interiorPresets.find((i) => i.id === id);
}

export function getMaterialsByCategory(
  category: MaterialPreset["category"]
): MaterialPreset[] {
  return allMaterials.filter((m) => m.category === category);
}
