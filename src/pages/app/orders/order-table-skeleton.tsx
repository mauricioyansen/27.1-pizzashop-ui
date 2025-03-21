import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button variant="outline" size={"sm"}>
            <Search className="size-3" />
            <span className="sr-only">Detalhes do produto</span>
          </Button>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-43" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-37" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-27" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-50" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-16" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-23" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-23" />
        </TableCell>
      </TableRow>
    );
  });
}
