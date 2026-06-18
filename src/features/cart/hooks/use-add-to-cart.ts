import { useMutation } from "@tanstack/react-query";

import { addToCart } from "../api/cart.api";

export function useAddToCart() {
  return useMutation({
    mutationFn: addToCart,
  });
}