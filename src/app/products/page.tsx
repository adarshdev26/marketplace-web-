"use client";

import { ProductCard } from "@/src/features/product/components/ProductCard";
import { useProducts } from "@/src/features/product/hooks/use-products";

const ProductPage = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load products.</div>;
  }
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
