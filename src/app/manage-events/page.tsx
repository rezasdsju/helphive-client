import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";




const ManageEventsPage = () => {
    return (
        <div className="my-5 sm:my-10 md:my-15 px-2 sm:px-5 md:px-10 lg:px-15">
            <div className="mb-6">
                <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                    <Link
                        href="/"
                        className="transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                    >
                        Home
                    </Link>
                    <LuChevronRight size={14} />
                    <Link
                        href="/manage-events"
                        className="font-medium text-blue-600 dark:text-blue-400"
                    >
                        Manage Events
                    </Link>
                </div>
            </div>

       
            <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-800 bg-linear-to-br from-blue-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 px-4 py-10 sm:py-12 md:py-14 text-center">

                <div className="relative z-10">
                    <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100/70 dark:bg-blue-950/50 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-300">
                        YOUR COMMUNITY ACTIVITIES
                    </span>

                    <h2 className="text-2xl min-[330px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="pr-2 text-gray-900 dark:text-white">Manage</span>
                        <span className="pr-2 text-blue-600 dark:text-blue-400">Your</span>
                        <span className="text-amber-500 dark:text-amber-400">Events</span>
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        Manage the events you've created. Update details or remove events whenever needed.
                    </p>
                </div>
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-200/30 dark:bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-amber-200/40 dark:bg-amber-500/10 blur-3xl" />
            </div>
        </div>
    );
};

export default ManageEventsPage;