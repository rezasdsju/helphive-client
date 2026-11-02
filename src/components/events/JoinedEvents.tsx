'use client'
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import FilterJoinedEvents from "./FilterJoinedEvents";
import { IEvent } from "@/types/event.types";
import JoinedEventCard from "./JoinedEventCard";
import { useState } from "react";


const JoinedEvents = ({ joinedAllEvents, joinedUpcomingEvents }: { joinedAllEvents: IEvent[], joinedUpcomingEvents: IEvent[] }) => {
    const [valueOfEventSelected, setValueOfEventSelected] = useState('all_events')

    const eventPassed = joinedAllEvents.length - joinedUpcomingEvents.length
    return (
        <div className='px-2 sm:px-5 md:px-10 lg:px-15 my-5 sm:my-10'>
            <div >
                <div>
                    <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                        <Link href="/" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                            Home
                        </Link>
                        <LuChevronRight size={14} />
                        <Link href="/joined-events" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                            Joined Events
                        </Link>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-2xl min-[340px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center  font-bold">
                            <span className="pr-2 text-gray-900 dark:text-white">The Events</span>
                            <span className="pr-2 text-blue-600 dark:text-blue-300">You</span>
                            <span className="text-amber-500 dark:text-amber-400">Already Joined</span>
                        </h2>
                    </div>
                </div>



                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 my-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-4 sm:p-5">
                    <div className="grid grid-cols-3 gap-3 sm:gap-5">

                        <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Total Joined</p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">
                                {joinedAllEvents.length}
                            </p>
                        </div>

                        <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Upcoming</p>
                            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                {joinedUpcomingEvents.length}
                            </p>
                        </div>

                        <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Past Events</p>
                            <p className="text-xl font-bold text-gray-600 dark:text-gray-300">
                                {eventPassed}
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center justify-between  gap-3">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Filter by:
                        </span>
                        <div className="shrink-0">
                            <FilterJoinedEvents
                                setValueOfEventSelected={setValueOfEventSelected}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div>
                {
                    valueOfEventSelected === 'all_events' ?
                        <div className="flex flex-col gap-5">
                            {
                                joinedAllEvents.map((event) => <JoinedEventCard key={event._id} event={event} />)
                            }
                        </div> :
                        <div className="flex flex-col gap-5">
                            {
                                joinedUpcomingEvents.map((event) => <JoinedEventCard key={event._id} event={event} />)
                            }
                        </div>


                }

            </div>
        </div>
    );
};

export default JoinedEvents;