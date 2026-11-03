import { Skeleton } from "@/components/ui/skeleton"

export default function JoinedEventSkeletonText() {
  return (
    <div className="flex w-full  flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}
