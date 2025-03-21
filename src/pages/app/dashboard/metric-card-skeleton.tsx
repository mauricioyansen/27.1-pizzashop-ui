import { Skeleton } from "@/components/ui/skeleton";

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-6 w-36 mb-2" />
      <Skeleton className="h-4 w-52" />
    </>
  );
}
