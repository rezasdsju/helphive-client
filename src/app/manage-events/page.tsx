import ManageEvents from "@/components/shared/events/ManageEvents";
import getTokenFromServer from "@/lib/getTokenFromServer";
import { redirect } from "next/navigation";


const ManageEventsPage = async () => {
    const token = await getTokenFromServer()
    // console.log(token)
    if (!token) {
        redirect('/signin')
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/manage-events/`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    if (!res.ok) {
        redirect('/signin')
    }
    const result = await res.json()
    // console.log(result)
    const [{ createdAllEvents }, { createdUpcomingEvents }] = result
    // console.log(createdAllEvents)
    // console.log(createdUpcomingEvents)
    return (
        <div>
            <ManageEvents />
        </div>
    );
};

export default ManageEventsPage;