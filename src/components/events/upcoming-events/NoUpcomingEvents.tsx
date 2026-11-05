
import { CalendarDays } from "lucide-react";

const NoUpcomingEvents = () => {
    return (
        <div className="flex min-h-75 sm:min-h-95 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-10 dark:border-gray-700 dark:bg-gray-900/50">
            <div className="flex max-w-md flex-col items-center text-center">
                <div className="mb-5 flex size-16 sm:size-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <CalendarDays className="size-8 sm:size-10" />
                </div>

                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
                    No Upcoming Events
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500 sm:text-base dark:text-gray-400">
                    No upcoming events found for the selected criteria.
                    Try changing your filters to discover more events.
                </p>
            </div>
        </div>
    );
};

export default NoUpcomingEvents;
