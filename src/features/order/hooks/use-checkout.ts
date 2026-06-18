import { useMutation } from "@tanstack/react-query";

import { checkout } from "../api/order.api";

export function useCheckout() {
  return useMutation({
    mutationFn: checkout,
  });
}