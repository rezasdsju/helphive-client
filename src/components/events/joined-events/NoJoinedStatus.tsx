
import Link from "next/link";
import { CalendarDays, Clock, History, Plus } from "lucide-react";

const NoJoinedStatus = ({ value }: { value: string }) => {
    const status = {
        all_events: {
            icon: CalendarDays,
            title: "No Joined Events Yet",
            description: "You haven't joined any events yet. Explore upcoming events and find opportunities to make a difference.",
            buttonText: "Explore Events",
            href: "/upcoming-events",
        },
        upcoming_events: {
            icon: Clock,
            title: "No Upcoming Events",
            description: "You haven't joined any upcoming events. Explore available events and find one that interests you.",
            buttonText: "Explore Events",
            href: "/upcoming-events",
        },
        past_events: {
            icon: History,
            title: "No Past Events",
            description: "You haven't participated in any past events yet. Your joined events will appear here after their dates have passed.",
            buttonText: "View Upcoming Events",
            href: "/upcoming-events",
        },
    }[value as "all_events" | "upcoming_events" | "past_events"];

    if (!status) return null;

    const Icon = status.icon;

    return (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-12 text-center dark:border-gray-700 dark:bg-gray-900/50">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                <Icon size={30} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {status.title}
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-600 dark:text-gray-400">
                {status.description}
            </p>

            <Link
                href={status.href}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
                <Plus size={17} />
                {status.buttonText}
            </Link>
        </div>
    );
};

export default NoJoinedStatus;
