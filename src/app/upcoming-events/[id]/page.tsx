import EventDetail from "@/components/shared/upcoming-events/EventDetail";
import { toast } from "@/components/ui/toast";
import { IEvent } from "@/types/event.types";



const EventDetailPage = async({params}:{params:{id:string}}) => {
    const {id} = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/upcoming-events/${id}`)
    if (!res.ok){
        toast.add({
            type:'error',
            description:'Failed to Fetch Event Detail',
            priority:'high'
        })
        return
    }

    const event:IEvent = await res.json()
    // console.log(event)
    return (
        <div>
            <div>
                <EventDetail event={event}/>
            </div>
        </div>
    );
};

export default EventDetailPage;