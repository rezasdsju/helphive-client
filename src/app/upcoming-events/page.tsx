import UpcomingEventCard from "@/components/shared/events/EventCard";
import { toast } from "@/components/ui/toast";

import type {IEvent} from '../../types/event.types'

const UpComingEventsPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/upcoming-events`)
    if (!res.ok){
        toast.add({
            type:'error',
            description:'Failed to Fetch Upcoming Events',
            priority:'high'
        })
        return
    }
    const events:IEvent[] = await res.json()
    // console.log(events)
    return (
        <div className="px-2 sm:px-4 my-5 sm:my-10">
            <div className="text-center py-5 sm:py-8">
                <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold flex items-center justify-center gap-2">
                        <span>Upcoming</span>
                        <span className="text-amber-300">Events</span>
                    </h2>
                    <p className="max-w-3xl mx-auto">
                          Discover upcoming community events and join hands with others to make a
                        meaningful difference. Every small act of kindness creates a better tomorrow.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 min-[360px]:gap-2 sm:gap-4">
                {
                    events.map((event:IEvent)=><UpcomingEventCard key={event._id} event={event}/>)

                }
            </div>
        </div>
    );
};

export default UpComingEventsPage;