'use client'
import { IEvent } from "@/types/event.types";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
interface IManageEvent {
    createdAllEvents: IEvent[]
    createdUpcomingEvents: IEvent[]
}
const ManageEvents = ({createdAllEvents, createdUpcomingEvents}:IManageEvent) => {
    return (
        <div>
            <div className="mx-auto my-5 w-full max-w-6xl px-3 sm:my-10 sm:px-5">
                <div aria-label="Breadcrumb" className="mb-5">
                    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                        <li>
                            <Link
                                href="/"
                                className="transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true">
                            <LuChevronRight size={14} />
                        </li>
                        <li
                            aria-current="page"
                            className="font-medium text-amber-600 dark:text-amber-400"
                        >
                            Manage Events
                        </li>
                    </ol>
                </div>

                <section className="relative overflow-hidden rounded-3xl border border-amber-200 bg-linear-to-br from-amber-100 via-amber-50 to-background px-6 py-12 text-center shadow-sm dark:border-amber-500/20 dark:from-amber-500/15 dark:via-amber-500/5 dark:to-background sm:px-10 sm:py-14 md:px-14 md:py-16 md:text-left">
                    <div className="relative z-10 max-w-3xl">
                        <span className="mb-5 inline-block rounded-full bg-amber-500 px-4 py-1.5 text-xs font-bold tracking-widest text-white shadow-sm sm:text-sm">
                            YOUR COMMUNITY ACTIVITIES
                        </span>

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                            Manage Your{" "}
                            <span className="text-amber-500 dark:text-amber-400">Events</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0 md:text-lg">
                            Manage the events you've created. Update details or remove events whenever needed.
                        </p>
                    </div>

                    <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-amber-300/40 blur-3xl dark:bg-amber-500/15" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/10" />
                </section>
            </div>
        </div>
    );
};

export default ManageEvents;