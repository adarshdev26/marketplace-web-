"use client";

import { useCart } from "@/src/features/cart/hooks/use-cart";
import { useUpdateCartItem } from "@/src/features/cart/hooks/use-update-cart-item";
import { useRemoveCartItem } from "@/src/features/cart/hooks/use-remove-cart-item";
import { useCheckout } from "@/src/features/order/hooks/use-checkout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { data, isLoading, error } = useCart();

  const updateMutation = useUpdateCartItem();
  const removeMutation = useRemoveCartItem();
  const checkoutMutation = useCheckout();

  const router = useRouter();

  const total =
    data?.cart?.items?.reduce(
      (sum: number, item: any) => sum + item.quantity * item.product.price,
      0
    ) ?? 0;

  const handleCheckout = async () => {
    try {
      await checkoutMutation.mutateAsync();

      toast.success("Order placed successfully");

      router.push("/orders");
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Checkout failed");
    }
  };

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Failed to load cart.</div>;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {data?.cart?.items?.map((item: any) => (
        <div key={item.id} className="rounded-lg border p-4">
          <h3 className="font-semibold">{item.product.title}</h3>

          <p className="mt-2">Price: ${item.product.price}</p>

          <p>Subtotal: ${item.quantity * item.product.price}</p>

          <div className="mt-4 flex items-center gap-4">
            <button
              className="rounded border px-3 py-1"
              disabled={item.quantity <= 1 || updateMutation.isPending}
              onClick={() =>
                updateMutation.mutate({
                  productId: item.productId,
                  quantity: item.quantity - 1,
                })
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              className="rounded border px-3 py-1"
              disabled={updateMutation.isPending}
              onClick={() =>
                updateMutation.mutate({
                  productId: item.productId,
                  quantity: item.quantity + 1,
                })
              }
            >
              +
            </button>

            <button
              className="ml-auto rounded  px-4 py-2 text-black cursor-pointer border"
              disabled={removeMutation.isPending}
              onClick={() => removeMutation.mutate(item.productId)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-8 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <p className="mt-4">Total: ${total}</p>

        <button
          onClick={handleCheckout}
          disabled={checkoutMutation.isPending}
          className="mt-4 w-full rounded-lg bg-black py-3 text-white"
        >
          {checkoutMutation.isPending ? "Processing..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}
