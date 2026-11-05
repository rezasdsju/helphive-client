'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const ManageEventsError = () => {
    const router = useRouter()

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-xl font-semibold">
                Something went wrong!
            </h2>

            <p className="text-muted-foreground">
                Unable to load your events. Please try again.
            </p>

            <Button onClick={() => router.refresh()}>
                Try Again
            </Button>
        </div>
    )
}

export default ManageEventsError