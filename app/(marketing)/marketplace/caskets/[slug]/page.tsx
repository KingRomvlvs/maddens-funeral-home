import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasketDetailContent } from "./content";
import { getProductBySlug, casketProducts } from "@/lib/marketplace";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== "caskets") {
    return {
      title: "Product Not Found | Madden's Funeral Home",
    };
  }

  return {
    title: `${product.name} | Caskets | Madden's Funeral Home`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return casketProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function CasketDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== "caskets") {
    notFound();
  }

  return <CasketDetailContent product={product} />;
}
