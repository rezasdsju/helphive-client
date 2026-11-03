import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function UpcomingEventsSkeleton() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mb-8 text-center">
                <Skeleton className="mx-auto mb-3 h-8 w-56" />
                <Skeleton className="mx-auto h-4 w-80 max-w-full" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} className="w-full overflow-hidden">
                        <Skeleton className="aspect-video w-full rounded-none" />

                        <CardHeader className="space-y-3">
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </CardHeader>

                        <CardContent className="space-y-3">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-9 w-full" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}