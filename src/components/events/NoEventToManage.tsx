import { LuCalendarX2 } from "react-icons/lu";

const NoEventToManage = ({ value }: { value: string }) => {
    const message =
        value === 'all_events'
            ? "You don't have any events to manage yet. Please create events first."
            : value === 'upcoming_events'
            ? "You don't have any upcoming events to manage."
            : "You don't have any past events.";

    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-6 py-14 text-center dark:border-slate-700 dark:bg-slate-900/40">
            <div className="flex size-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 ring-8 ring-amber-50/70 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-amber-500/10">
                <LuCalendarX2 size={26} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                No Events to Manage
            </h3>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {message}
            </p>
        </div>
    );
};

export default NoEventToManage;