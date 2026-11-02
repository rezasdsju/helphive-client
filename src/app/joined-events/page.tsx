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
    const joinedEvents: IEvent[] = await res.json()
    // console.log(joinedEvents)
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
        </div>
    );
};

export default JoinedEventPage;