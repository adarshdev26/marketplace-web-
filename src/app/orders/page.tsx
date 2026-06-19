"use client";

import { useOrders } from "@/src/features/order/hooks/use-orders";
import { OrderCard } from "@/src/features/order/components/OrderCard";

export default function OrdersPage() {
  const { data, isLoading, error } = useOrders();

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Failed to load orders.</div>;
  }

  if (!data?.orders.length) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">My Orders</h1>

        <p className="mt-4">No orders found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">My Orders</h1>

      <div className="space-y-4">
        {data.orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
