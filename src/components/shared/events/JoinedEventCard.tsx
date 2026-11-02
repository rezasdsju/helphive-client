import { IEvent } from "@/types/event.types";


const JoinedEventCard = ({event}:{event:IEvent}) => {
    return (
        <div>
            {event.title}
        </div>
    );
};

export default JoinedEventCard;