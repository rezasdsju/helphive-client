import EventDetail from "@/components/events/EventDetail";
import { IEvent } from "@/types/event.types";
import { notFound } from "next/navigation";



const EventDetailPage = async ({ params }: {params: Promise<{ id: string }>}) => {
    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/upcoming-events/${id}`)
    if (!res.ok) {
        notFound()
    }

    const event: IEvent = await res.json()
    // console.log(event)
    return (
        <div>
            <div>
                <EventDetail event={event} />
            </div>
        </div>
    );
};

export default EventDetailPage;