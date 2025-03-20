type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  processing: "Em preparo",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="size-2 rounded-full bg-slate-400" />
      )}

      {status === "canceled" && (
        <span className="size-2 rounded-full bg-rose-500" />
      )}

      {status === "delivered" && (
        <span className="size-2 rounded-full bg-emerald-400" />
      )}

      {["processing", "delivering"].includes(status) && (
        <span className="size-2 rounded-full bg-amber-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
