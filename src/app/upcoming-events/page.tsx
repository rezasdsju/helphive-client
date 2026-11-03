
import { toast } from "@/components/ui/toast";

import type { IEvent } from '../../types/event.types'
import UpcomingEvents from "@/components/events/UpcomingEvents";

const UpComingEventsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/upcoming-events`)
    if (!res.ok) {
        toast.add({
            type: 'error',
            description: 'Failed to Fetch Upcoming Events',
            priority: 'high'
        })
        return
    }
    const events: IEvent[] = await res.json()
    // console.log(events)
    return (
        <UpcomingEvents events={events} />
    );
};

export default UpComingEventsPage;