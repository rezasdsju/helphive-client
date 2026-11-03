import { IEvent } from "@/types/event.types";
import UpcomingEventsSectionIntro from "./UpcomingEventsSectionIntro";
import UpcomingEventCard from "./EventCard";

const UpcomingEvents = ({events}:{events:IEvent[]}) => {
    return (
        <div className="px-2 sm:px-4 my-5 sm:my-10">
            <UpcomingEventsSectionIntro events={events} />

            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 min-[360px]:gap-2 sm:gap-4">
                {
                    events.map((event: IEvent) => <UpcomingEventCard key={event._id} event={event} />)

                }
            </div>
        </div>
    );
};

export default UpcomingEvents;