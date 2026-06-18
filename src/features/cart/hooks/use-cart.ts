import { useQuery } from "@tanstack/react-query";

import { getCart } from "../api/cart.api";

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
}