
import { IEvent } from "@/types/event.types";
import UpcomingEventCard from "../events/UpcomingEventCard";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const UpcomingEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/upcoming-events/limit-6/`,{
        cache:'no-store'
    })
    if (!res.ok) {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-4">
                <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                    Failed to load upcoming events.
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Please try again later.
                </p>
                <a
                    href="/"
                    className="mt-4 bg-amber-400 hover:bg-amber-300 text-green-950 font-bold rounded-2xl px-5 py-2 shadow-lg transition-colors cursor-pointer"
                >
                    Retry
                </a>
            </div>
        )
    }
    const upcomingEvents: IEvent[] = await res.json()
    // console.log(upcomingEvents) 
    return (
        <div className="my-5 sm:my-15 px-2">
            <div className="flex items-center justify-center py-5">
                <div >
                    <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
                        <span>Upcoming</span>
                        <span className="text-amber-500">Events</span>
                    </h2>
                    <p className="max-w-lg text-center">
                        Discover upcoming volunteering events and join hands to make a positive impact in your community.
                    </p>
                </div>
            </div>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="mx-auto w-full max-w-6xl px-10"
            >
                <CarouselContent>
                    {upcomingEvents.map((event: IEvent) => (
                        <CarouselItem key={event._id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <UpcomingEventCard event={event}></UpcomingEventCard>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious className={`left-1 cursor-pointer`} />
                <CarouselNext className={`right-1 cursor-pointer`} />
            </Carousel>
        </div>
    );
};

export default UpcomingEvents;