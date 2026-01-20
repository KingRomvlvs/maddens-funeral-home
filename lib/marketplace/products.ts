import type { Product, CategoryInfo } from "./types";
import { woodMaterials, metalMaterials, interiorPresets } from "./materials";

export const categories: CategoryInfo[] = [
  {
    id: "caskets",
    name: "Caskets",
    description:
      "Explore our selection of handcrafted caskets in wood, metal, and stainless steel finishes.",
    image: "/images/caskets/wooden-casket.jpg",
    href: "/marketplace/caskets",
  },
  {
    id: "urns",
    name: "Urns",
    description:
      "Browse our collection of memorial urns in various styles and materials.",
    image: "/images/urns/ceramic-urn-cut105.jpg",
    href: "/marketplace/urns",
  },
];

export const casketProducts: Product[] = [
  {
    id: "classic-mahogany",
    slug: "classic-mahogany",
    category: "caskets",
    subcategory: "wooden",
    name: "Classic Mahogany",
    description:
      "A timeless mahogany casket with elegant craftsmanship and rich, warm tones. Each piece features unique natural wood grain patterns.",
    features: [
      "Solid mahogany construction",
      "Hand-rubbed finish",
      "Premium velvet interior",
      "Adjustable bed and mattress",
      "Swing bar handles",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/caskets/classic-casket.glb",
    fallbackImage: "/images/caskets/wooden-casket.jpg",
    materials: woodMaterials,
    interiors: interiorPresets,
    defaultMaterialId: "mahogany",
    defaultInteriorId: "white-velvet",
    dimensions: {
      length: '84"',
      width: '28"',
      height: '23"',
    },
  },
  {
    id: "heritage-oak",
    slug: "heritage-oak",
    category: "caskets",
    subcategory: "wooden",
    name: "Heritage Oak",
    description:
      "A stately oak casket representing enduring strength and natural beauty. The distinctive grain patterns make each one unique.",
    features: [
      "Solid oak construction",
      "Cathedral top design",
      "Premium satin interior",
      "Adjustable bed",
      "Decorative corner hardware",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/caskets/classic-casket.glb",
    fallbackImage: "/images/caskets/wooden-casket.jpg",
    materials: woodMaterials,
    interiors: interiorPresets,
    defaultMaterialId: "oak",
    defaultInteriorId: "ivory-satin",
  },
  {
    id: "presidential-bronze",
    slug: "presidential-bronze",
    category: "caskets",
    subcategory: "metal",
    name: "Presidential Bronze",
    description:
      "A distinguished bronze casket offering exceptional protection and timeless elegance. Features protective sealing gasket.",
    features: [
      "32 oz. bronze construction",
      "Protective rubber gasket seal",
      "Brushed finish",
      "Premium velvet interior",
      "Memory safe drawer",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/caskets/classic-casket.glb",
    fallbackImage: "/images/caskets/metal-casket.jpg",
    materials: metalMaterials,
    interiors: interiorPresets,
    defaultMaterialId: "bronze",
    defaultInteriorId: "white-velvet",
  },
  {
    id: "stainless-elegance",
    slug: "stainless-elegance",
    category: "caskets",
    subcategory: "stainless-steel",
    name: "Stainless Elegance",
    description:
      "A premium stainless steel casket with mirror-polished finish. Rust-resistant and offering lasting protection.",
    features: [
      "Premium stainless steel",
      "Mirror polish finish",
      "Protective gasket seal",
      "Velvet interior",
      "Swing bar handles",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/caskets/classic-casket.glb",
    fallbackImage: "/images/caskets/stainless-steel-casket.jpg",
    materials: metalMaterials.filter(
      (m) => m.category === "stainless-steel" || m.category === "metal"
    ),
    interiors: interiorPresets,
    defaultMaterialId: "brushed-silver",
    defaultInteriorId: "ivory-satin",
  },
];

export const urnProducts: Product[] = [
  {
    id: "serenity-bronze",
    slug: "serenity-bronze",
    category: "urns",
    subcategory: "metal",
    name: "Serenity Bronze",
    description:
      "An elegant bronze urn with a warm, hand-polished finish. A timeless tribute to honor your loved one's memory.",
    features: [
      "Hand-cast bronze",
      "Hand-polished finish",
      "Threaded lid for security",
      "Felt-lined base",
      "Adult capacity (200 cubic inches)",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/urns/classic-urn.glb",
    fallbackImage: "/images/urns/ceramic-urn-cut105.jpg",
    materials: metalMaterials.filter(
      (m) => m.category === "bronze" || m.category === "metal"
    ),
    defaultMaterialId: "bronze",
    dimensions: {
      length: '8"',
      width: '8"',
      height: '11"',
    },
  },
  {
    id: "heritage-mahogany-urn",
    slug: "heritage-mahogany-urn",
    category: "urns",
    subcategory: "wooden",
    name: "Heritage Mahogany",
    description:
      "A beautifully crafted mahogany urn with hand-rubbed finish. Natural wood grain creates a warm, distinguished appearance.",
    features: [
      "Solid mahogany",
      "Hand-rubbed lacquer finish",
      "Secure closure system",
      "Felt-lined base",
      "Adult capacity",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/urns/classic-urn.glb",
    fallbackImage: "/images/urns/wooden-urn-boston-ii-walnut.jpg",
    materials: woodMaterials,
    defaultMaterialId: "mahogany",
  },
  {
    id: "classic-silver",
    slug: "classic-silver",
    category: "urns",
    subcategory: "metal",
    name: "Classic Silver",
    description:
      "A refined silver-tone urn with brushed finish. Simple elegance that creates a lasting memorial.",
    features: [
      "Premium alloy construction",
      "Brushed silver finish",
      "Secure threaded lid",
      "Felt-lined base",
      "Adult capacity",
    ],
    priceRange: "Contact for pricing",
    modelPath: "/models/urns/classic-urn.glb",
    fallbackImage: "/images/urns/ceramic-urn-cut105.jpg",
    materials: metalMaterials.filter(
      (m) => m.category === "stainless-steel" || m.category === "metal"
    ),
    defaultMaterialId: "brushed-silver",
  },
];

export const allProducts: Product[] = [...casketProducts, ...urnProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: "caskets" | "urns"
): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return allProducts.filter((p) => p.subcategory === subcategory);
}
