import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmount() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-xs text-muted-foreground mt-2">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
