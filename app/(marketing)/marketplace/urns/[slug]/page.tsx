import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UrnDetailContent } from "./content";
import { getProductBySlug, urnProducts } from "@/lib/marketplace";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== "urns") {
    return {
      title: "Product Not Found | Madden's Funeral Home",
    };
  }

  return {
    title: `${product.name} | Urns | Madden's Funeral Home`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return urnProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function UrnDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== "urns") {
    notFound();
  }

  return <UrnDetailContent product={product} />;
}
