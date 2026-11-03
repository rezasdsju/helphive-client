import Link from "next/link"
import { CalendarX, ArrowLeft, Home } from "lucide-react"

const EventNotFound = () => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
            <div className="w-full max-w-md text-center">
                <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                    <CalendarX size={38} strokeWidth={1.7} />
                </div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                    Event Not Found
                </p>

                <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    This event doesn't exist
                </h1>

                <p className="mb-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    The event you're looking for may have been removed,
                    or the link might be incorrect.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/upcoming-events"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                    >
                        <ArrowLeft size={17} />
                        Browse Events
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <Home size={17} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventNotFound