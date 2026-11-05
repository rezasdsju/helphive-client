'use client'
import { IEvent } from "@/types/event.types";
import { CalendarDays, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const JoinedEventCard = ({ event }: { event: IEvent }) => {

    const [passed, setPassed] = useState(false)
    useEffect(() => {
        const today = new Date().toLocaleDateString("en-CA")
        const eventDate = event.date

        setPassed(eventDate < today)
    }, [event.date])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-52 sm:h-full min-h-40 overflow-hidden rounded-xl">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                />

                <div className="absolute top-3 left-3 rounded-full bg-linear-to-r from-amber-300 via-orange-300 to-yellow-400 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm">
                    {event.type}
                </div>
            </div>



            <div className="flex flex-col justify-center gap-3 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {event.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {event.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users size={16} />
                    <span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                            {event.participants.length}
                        </span>
                        <span className="ml-1">Volunteers joined</span>
                    </span>
                </div>

            </div>



            <div className="flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-stretch gap-3 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-gray-800 pt-4 sm:pt-0 sm:pl-5">

                <div className="flex items-center justify-start sm:justify-center">
                    {!passed ? (
                        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 whitespace-nowrap sm:w-full sm:max-w-50">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Upcoming Event
                        </div>
                    ) : (
                        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap sm:w-full sm:max-w-50">
                            <span className="h-2 w-2 rounded-full bg-gray-400" />
                            Past Event
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-end sm:justify-center">
                    <div className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium sm:w-full sm:max-w-50 ${passed
                        ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                        }`}>
                        <CalendarDays size={16} />
                        <span>
                            {new Date(`${event.date}T00:00:00`).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default JoinedEventCard;
