import Link from "next/link";
import Image from "next/image";
import { LuCalendarDays, LuMapPin, LuUser } from "react-icons/lu";


import type { IEvent } from "@/types/event.types";
const UpcomingEventCard = ({ event }: { event: IEvent }) => {
    const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    return (
        <div className="group h-full overflow-hidden rounded-md min-[360px]:rounded-xl sm:rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
            <Link href="#" className="flex h-full flex-col">
                <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
                        {event.type}
                    </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-2 sm:p-4">
                    <div className="space-y-1.5">
                        <h3 className="line-clamp-1 text-lg font-semibold text-card-foreground">
                            {event.title}
                        </h3>
                        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {event.description}
                        </p>
                    </div>

                    <div className="mt-auto space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <LuCalendarDays className="shrink-0 text-amber-500" size={15} />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LuMapPin className="shrink-0 text-amber-500" size={15} />
                            <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LuUser className="shrink-0 text-amber-500" size={15} />
                            <span className="truncate">By {event.createdBy.name}</span>
                        </div>
                    </div>
                    <div >
                        <button className="w-full mx-auto rounded-md min-[380px]:rounded-xl bg-amber-300 text-gray-800 font-bold text-sm sm:text-base py-1 cursor-pointer">View Event</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default UpcomingEventCard;

