export type ProductCategory = "caskets" | "urns";

export type MaterialCategory =
  | "wood"
  | "metal"
  | "stainless-steel"
  | "fabric"
  | "bronze";

export interface MaterialPreset {
  id: string;
  name: string;
  category: MaterialCategory;
  thumbnail: string;
  color: string;
  metalness: number;
  roughness: number;
  diffuseMap?: string;
  normalMap?: string;
  aoMap?: string;
}

export interface InteriorPreset {
  id: string;
  name: string;
  thumbnail: string;
  color: string;
  fabricType: "velvet" | "crepe" | "satin";
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  subcategory: string;
  name: string;
  description: string;
  features: string[];
  priceRange: string;
  modelPath: string;
  fallbackImage: string;
  materials: MaterialPreset[];
  interiors?: InteriorPreset[];
  defaultMaterialId: string;
  defaultInteriorId?: string;
  dimensions?: {
    length: string;
    width: string;
    height: string;
  };
  weight?: string;
}

export interface ProductViewerState {
  selectedMaterial: MaterialPreset;
  selectedInterior?: InteriorPreset;
  isRotating: boolean;
  zoom: number;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  href: string;
}
