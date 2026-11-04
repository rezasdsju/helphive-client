import { IEvent } from "@/types/event.types";
import React from "react";
import FilterUpcomingEvents from "./FilterUpcomingEvents";
import { Input } from "@/components/ui/input"



interface IItem {
    label: string,
    value: string
}
interface IUpcomingEventsSectionIntro {
    searchedEvents: IEvent[],
    setSearchedText: React.Dispatch<React.SetStateAction<string>>,
    setValueOfEventCategorySelected: React.Dispatch<React.SetStateAction<string>>,
    items: IItem[]
}
const UpcomingEventsSectionIntro = ({searchedEvents, setSearchedText, items,  setValueOfEventCategorySelected }: IUpcomingEventsSectionIntro) => {
    return (
        <div className="mb-6 grid grid-cols-1 items-end gap-6 sm:mb-8 sm:grid-cols-2 sm:gap-8">
            <div>
                <h2 className="flex flex-wrap items-center justify-center gap-2 text-3xl font-bold tracking-tight sm:justify-start sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-foreground">Upcoming</span>
                    <span className="text-amber-500 dark:text-amber-400">Events</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:text-left sm:text-base">
                    Discover upcoming community events and join hands with others to make a
                    meaningful difference. Every small act of kindness creates a better tomorrow.
                </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:ml-auto sm:w-full sm:max-w-sm">
                <div className="mb-5">
                    <Input
                        onChange={(e)=>setSearchedText(e.target.value)}
                        placeholder="Search events..."
                        className="h-10"
                    />
                </div>

                <div>
                    <p className="mb-3 text-sm font-semibold text-card-foreground">
                        Filter by Category
                    </p>

                    <FilterUpcomingEvents
                        items={items}
                        setValueOfEventCategorySelected={setValueOfEventCategorySelected}
                    />

                    <div className="mt-4 border-t border-border pt-3">
                        <p className="text-xs text-muted-foreground">
                            {searchedEvents.length} events found
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventsSectionIntro;