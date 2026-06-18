import { useMutation } from "@tanstack/react-query";

import { updateCartItem } from "../api/cart.api";

export function useUpdateCartItem() {
  return useMutation({
    mutationFn: ({
      productId,
      quantity,
    }: {
      productId: string;
      quantity: number;
    }) =>
      updateCartItem(
        productId,
        quantity
      ),
  });
}