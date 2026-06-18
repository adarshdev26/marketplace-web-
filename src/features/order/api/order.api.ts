import { api } from "@/src/lib/axios";

import {
  CheckoutResponse,
  OrdersResponse,
} from "../types/order.types";

export async function checkout(): Promise<CheckoutResponse> {
  const response = await api.post(
    "/orders/checkout"
  );

  return response.data;
}

export async function getOrders(): Promise<OrdersResponse> {
  const response = await api.get(
    "/orders"
  );

  return response.data;
}