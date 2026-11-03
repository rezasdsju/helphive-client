import Link from "next/link"
import { ArrowLeft, Home, SearchX } from "lucide-react"

const NotFound = () => {
    return (
        <main className="flex min-h-[80vh] items-center justify-center px-4 py-16">
            <div className="w-full max-w-lg text-center">

                <div className="relative mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-amber-100 dark:bg-slate-800">
                    <SearchX className="h-16 w-16 text-amber-600 dark:text-amber-400" />

                    <span className="absolute -right-2 -top-2 rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white shadow-md">
                        404
                    </span>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                    Page Not Found
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Oops! Lost Your Way?
                </h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                    The page you're looking for doesn't exist or may have been moved.
                    Let's get you back to helping the community!
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-amber-600"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>


                </div>

                <p className="mt-12 text-xs text-gray-400 dark:text-gray-500">
                    HelpHive — Empowering Communities, One Good Deed at a Time.
                </p>
            </div>
        </main>
    )
}

export default NotFound