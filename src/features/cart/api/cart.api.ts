import { api } from "@/src/lib/axios";

import { AddToCartBody } from "../cart.types";

export async function getCart() {
  const response =
    await api.get("/cart");

  return response.data;
}

export async function addToCart(
  data: AddToCartBody
) {
  const response = await api.post(
    "/cart",
    data
  );

  return response.data;
}

export async function updateCartItem(
  productId: string,
  quantity: number
) {
  const response = await api.patch(
    `/cart/${productId}`,
    {
      quantity,
    }
  );

  return response.data;
}

export async function removeCartItem(
  productId: string
) {
  const response = await api.delete(
    `/cart/${productId}`
  );

  return response.data;
}