import { Order } from "../types/order.types";

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="rounded-lg border p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Order #{order.id.slice(0, 8)}</h3>

        <span>{new Date(order.createdAt).toLocaleDateString()}</span>
      </div>

      <p className="mt-2">Total: ${order.total}</p>

      <p>Items: {order.items.length}</p>
    </div>
  );
}
