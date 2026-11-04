'use client'
import { IEvent } from "@/types/event.types";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import FilterJoinedEvents from "./FilterJoinedEvents";
import ManageEventCard from "./ManageEventCard";
import { useState } from "react";




import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ManageEventCarouselCard from "./ManageEventCarouselCard";
import NoEventToManage from "./NoEventToManage";


interface IManageEvent {
    createdAllEvents: IEvent[]
    createdUpcomingEvents: IEvent[]
}
const ManageEvents = ({ createdAllEvents, createdUpcomingEvents }: IManageEvent) => {
    const [valueOfEventSelected, setValueOfEventSelected] = useState('all_events')
    const createdPastEvents = createdAllEvents.filter((event) => !createdUpcomingEvents.some(upcoming_event => event._id === upcoming_event._id))

    return (
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





            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 my-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-4 sm:p-5">
                <div className="grid grid-cols-3 gap-3 sm:gap-5">

                    <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Total Created</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {createdAllEvents.length}
                        </p>
                    </div>

                    <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Upcoming</p>
                        <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                            {createdUpcomingEvents.length}
                        </p>
                    </div>

                    <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Past Events</p>
                        <p className="text-xl font-bold text-gray-600 dark:text-gray-300">
                            {createdPastEvents.length}
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






            <div>
                {
                    valueOfEventSelected === 'all_events' ?
                        createdAllEvents.length === 0 ? (
                            <NoEventToManage value={`all_events`} />
                        ) :
                            <div>
                                <div className="hidden  min-[350px]:grid min-[350px]:grid-cols-2 sm:grid-cols-1 gap-2">
                                    {
                                        createdAllEvents.map((event) =>
                                            <ManageEventCard key={event._id} event={event} />
                                        )
                                    }
                                </div>
                                <Carousel className="min-[350px]:hidden">
                                    <CarouselContent >
                                        {createdAllEvents.map((event) =>
                                            <CarouselItem key={event._id}>
                                                <ManageEventCarouselCard key={event._id} event={event} />
                                            </CarouselItem>
                                        )}
                                    </CarouselContent>
                                    <CarouselPrevious
                                        className="-left-4 bg-gray-200 dark:bg-gray-600 cursor-pointer text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                                    />
                                    <CarouselNext
                                        className="-right-4 bg-gray-200 dark:bg-gray-600 cursor-pointer  text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                                    />
                                </Carousel>


                            </div> :
                        valueOfEventSelected === 'upcoming_events' ?
                            createdUpcomingEvents.length === 0 ? (
                                <NoEventToManage value={`upcoming_events`} />
                            ) :
                                <div>
                                    <div className="hidden min-[350px]:grid min-[350px]:grid-cols-2 sm:grid-cols-1 gap-2">
                                        {
                                            createdUpcomingEvents.map((event) => <ManageEventCard key={event._id} event={event} />)
                                        }
                                    </div>
                                    <Carousel className="min-[350px]:hidden">
                                        <CarouselContent >
                                            {createdUpcomingEvents.map((event) =>
                                                <CarouselItem key={event._id}>
                                                    <ManageEventCarouselCard key={event._id} event={event} />
                                                </CarouselItem>
                                            )}
                                        </CarouselContent>
                                        <CarouselPrevious
                                            className="-left-4 bg-gray-200 dark:bg-gray-600 cursor-pointer text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                                        />
                                        <CarouselNext
                                            className="-right-4 bg-gray-200 dark:bg-gray-600 cursor-pointer  text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                                        />
                                    </Carousel>
                                </div> :
                            createdPastEvents.length === 0 ? (
                                <NoEventToManage value="past_events" />
                            ) :
                                <div>
                                    <div className="hidden min-[350px]:grid min-[350px]:grid-cols-2 sm:grid-cols-1 gap-2">
                                        {
                                            createdPastEvents.map((event) => <ManageEventCard key={event._id} event={event} />)
                                        }
                                    </div>
                                    <Carousel className="min-[350px]:hidden">
                                        <CarouselContent >
                                            {createdPastEvents.map((event) =>
                                                <CarouselItem key={event._id}>
                                                    <ManageEventCarouselCard key={event._id} event={event} />
                                                </CarouselItem>
                                            )}
                                        </CarouselContent>
                                        <CarouselPrevious
                                            className="-left-4 bg-gray-200 dark:bg-gray-600 cursor-pointer text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                                        />
                                        <CarouselNext
                                            className="-right-4 bg-gray-200 dark:bg-gray-600 cursor-pointer  text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                                        />
                                    </Carousel>
                                </div>
                }
            </div>
        </div>
    );
};

export default ManageEvents;