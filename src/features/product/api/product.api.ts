import { api } from "@/src/lib/axios";
import {
  ProductsResponse,
  ProductResponse,
} from "../types/product.types";

export async function getProducts() {
  const response =
    await api.get<ProductsResponse>("/products");

  return response.data;
}

export async function getProductById(
  productId: string
) {
  const response =
    await api.get<ProductResponse>(
      `/products/${productId}`
    );

  return response.data;
}