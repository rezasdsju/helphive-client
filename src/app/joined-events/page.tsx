
import getTokenFromServer from "@/lib/getTokenFromServer";
import { IEvent } from "@/types/event.types";
import { redirect } from "next/navigation";
import JoinedEvents from "@/components/shared/events/JoinedEvents";


const JoinedEventPage = async () => {
    const token = await getTokenFromServer()
    if (!token) {
        redirect('/signin')
    }
    // console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/joined-events/`, {
        headers: {
            authorization: `Bearer ${token}`,
        },

    })
    if (!res.ok) {
        throw new Error('Failed to Fetch your events')
    }
    const joinedAllAndUpcominfEvents = await res.json()
    const joinedAllEvents: IEvent[] = joinedAllAndUpcominfEvents[0].joinedAllEvents
    const joinedUpcomingEvents: IEvent[] = joinedAllAndUpcominfEvents[1].joinedUpcomingEvents
    // console.log(joinedAllEvents)
    // console.log(joinedUpcomingEvents)

    return (
<div>
    <JoinedEvents joinedAllEvents={joinedAllEvents} joinedUpcomingEvents={joinedUpcomingEvents}/>
</div>
    );
};

export default JoinedEventPage;