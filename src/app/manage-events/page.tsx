import ManageEvents from "@/components/events/ManageEvents";
import ManageEventsError from "@/components/events/ManageEventsError";
import getTokenFromServer from "@/lib/getTokenFromServer";
import { redirect } from "next/navigation";



const ManageEventsPage = async () => {
    const token = await getTokenFromServer()

    if (!token) {
        redirect("/signin")
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/manage-events/`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (res.status === 401 || res.status === 403) {
        redirect("/signin")
    }
    if (!res.ok) {
        return <ManageEventsError />
    }
    const result = await res.json()
    const createdAllEvents = result?.[0]?.createdAllEvents ?? []
    const createdUpcomingEvents = result?.[1]?.createdUpcomingEvents ?? []
    return (
        <div>
            <ManageEvents createdAllEvents={createdAllEvents} createdUpcomingEvents={createdUpcomingEvents} />
        </div>
    );
};

export default ManageEventsPage;