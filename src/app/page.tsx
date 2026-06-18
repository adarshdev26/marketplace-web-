"use client";

import { Hero } from "../components/home/Hero";
import { ProductCard } from "../features/product/components/ProductCard";
import { useProducts } from "../features/product/hooks/use-products";

export default function HomePage() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load products.</div>;
  }

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
