import { Product } from "../types/product.types";
import { useAddToCart } from "../../cart/hooks/use-add-to-cart";
import { toast } from "sonner";
import { useAuth } from "@/src/providers/auth-provider";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCartMutation = useAddToCart();

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");

      return;
    }
    try {
      await addToCartMutation.mutateAsync({
        productId: product.id,
        quantity: 1,
      });
      toast.success("Added to cart");
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to add to cart");
    }
  };
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{product.title}</h3>

      <p className="mt-2 text-sm text-gray-600">{product.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold">${product.price}</span>

        <span>Stock: {product.stock}</span>
        <button
          className="border p-2 rounded cursor-pointer"
          onClick={handleAddToCart}
          disabled={addToCartMutation.isPending}
        >
          {addToCartMutation.isPending ? "Adding..." : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
