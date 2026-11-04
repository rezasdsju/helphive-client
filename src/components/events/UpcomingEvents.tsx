'use client'
import { IEvent } from "@/types/event.types";
import UpcomingEventsSectionIntro from "./UpcomingEventsSectionIntro";
import UpcomingEventCard from "./UpcomingEventCard";
import { useState } from "react";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

import { eventCategories } from "@/lib/eventCategories";
import NoUpcomingEvents from "./NoUpcomingEvents";
const items = [{ label: "All Categories", value: "all_categories" }, ...eventCategories]

const UpcomingEvents = ({ events }: { events: IEvent[] }) => {
    const [valueOfEventCategorySelected, setValueOfEventCategorySelected] = useState('all_categories')
    const filteredEvents = events.filter((event) => {
        if (valueOfEventCategorySelected === 'all_categories') {
            return true
        }
        const selectedCategory = items.find((item) => {
            return item.value === valueOfEventCategorySelected
        })
        return event.type === selectedCategory?.label
    })
    return (

        <div>

            <div className="px-2 sm:px-4 md:px-8 lg:px-12 my-5 sm:my-10">


                <div>
                    <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                        <Link href="/" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                            Home
                        </Link>
                        <LuChevronRight size={14} />
                        <Link href="/upcoming-events" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                            Upcoming Events
                        </Link>
                    </div>
                </div>
                <UpcomingEventsSectionIntro items={items} filteredEvents={filteredEvents} setValueOfEventCategorySelected={setValueOfEventCategorySelected} />


                <div >
                    {
                        filteredEvents.length === 0 ?
                            <NoUpcomingEvents /> :
                            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 min-[360px]:gap-2 sm:gap-4">
                                {
                                    filteredEvents.map((event: IEvent) => <UpcomingEventCard key={event._id} event={event} />)

                                }
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default UpcomingEvents;