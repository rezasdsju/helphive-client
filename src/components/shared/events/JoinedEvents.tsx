'use client'
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import FilterJoinedEvents from "./FilterJoinedEvents";
import { IEvent } from "@/types/event.types";
import JoinedEventCard from "./JoinedEventCard";
import { useState } from "react";


const JoinedEvents = ({ joinedAllEvents, joinedUpcomingEvents }: { joinedAllEvents: IEvent[], joinedUpcomingEvents: IEvent[] }) => {
    const [valueOfEventSelected, setValueOfEventSelected] = useState('all_events')
    return (
        <div>
            <div className='px-2 sm:px-5 my-5 sm:my-10'>
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

                <div>
                    <FilterJoinedEvents setValueOfEventSelected={setValueOfEventSelected}/>
                </div>
            </div>

            <div>
                {
                    valueOfEventSelected === 'all_events' ?
                        <div>
                            {
                                joinedAllEvents.map((event)=><JoinedEventCard key={event._id} event={event} />)
                            }
                        </div> :
                        <div>
                            {
                                joinedUpcomingEvents.map((event)=><JoinedEventCard key={event._id} event={event} />)
                            }
                        </div>


                }

            </div>
        </div>
    );
};

export default JoinedEvents;