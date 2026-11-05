


import type { IEvent } from '../../types/event.types'
import UpcomingEvents from "@/components/events/upcoming-events/UpcomingEvents";
import { notFound } from "next/navigation";

const UpComingEventsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/upcoming-events`,{
        cache: "no-store"
    })
    if (!res.ok) {
        notFound()
    }
    const events: IEvent[] = await res.json()
    // console.log(events)
    return (
        <UpcomingEvents events={events} />
    );
};

export default UpComingEventsPage;