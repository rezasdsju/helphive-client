import { toast } from "@/components/ui/toast";




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
    const events = await res.json()
    console.log(events)
    return (
        <div className="px-2 my-10">
            <div className="text-center">
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

            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
                {

                }
            </div>
        </div>
    );
};

export default UpComingEventsPage;