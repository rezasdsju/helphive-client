import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import getTokenFromServer from "@/lib/getTokenFromServer";
import { IEvent } from "@/types/event.types";
import { redirect } from "next/navigation";


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
    // console.log(joinedAllAndUpcominfEvents)
    const joinedAllEvents: IEvent[] = joinedAllAndUpcominfEvents[0].joinedAllEvents

    const joinedUpcomingEvents: IEvent[] = joinedAllAndUpcominfEvents[1].joinedUpcomingEvents
    console.log(joinedAllEvents)
    console.log(joinedUpcomingEvents)
    return (
        <div className='px-2 sm:px-5 my-5 sm:my-10'>
            <div>
                <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                    <Link href="/" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                        Home
                    </Link>
                    <LuChevronRight size={14} />
                    <Link href="/joined-events" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                        Joined Events
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    <h2 className="text-2xl min-[340px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center  font-bold">
                        <span className="pr-2 text-gray-900 dark:text-white">The Events</span>
                        <span className="pr-2 text-blue-600 dark:text-blue-300">You</span>
                        <span className="text-amber-500 dark:text-amber-400">Already Joined</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default JoinedEventPage;