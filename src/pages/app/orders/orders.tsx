import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form action="" className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16"></TableHead>
                <TableHead className="w-35">Identificador</TableHead>
                <TableHead className="w-45">Realizado</TableHead>
                <TableHead className="w-35">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-35">Total do pedido</TableHead>
                <TableHead className="w-41"></TableHead>
                <TableHead className="w-33"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map(() => {
                return (
                  <TableRow>
                    <TableCell>
                      <Button variant="outline" size={"sm"}>
                        <Search className="size-3" />
                        <span className="sr-only">Detalhes do produto</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      5a6b5c85d8e4f7a
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      há 15 minutos
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      Mauricio Yansen
                    </TableCell>
                    <TableCell className="font-medium">R$ 149,90</TableCell>
                    <TableCell>
                      <Button variant={"outline"} size={"sm"}>
                        <ArrowRight className="size-3 mr-2" />
                        Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant={"ghost"} size={"sm"}>
                        <X className="size-3 mr-2" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
