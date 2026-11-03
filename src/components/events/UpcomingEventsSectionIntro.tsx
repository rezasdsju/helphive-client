import { IEvent } from "@/types/event.types";


const UpcomingEventsSectionIntro = ({ events }: { events: IEvent[] }) => {
    return (
        <div>
            <div className=" py-5 sm:py-8">
                <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold flex items-center  gap-2">
                        <span>Upcoming</span>
                        <span className="text-amber-300">Events</span>
                    </h2>
                    <p className="max-w-3xl ">
                        Discover upcoming community events and join hands with others to make a
                        meaningful difference. Every small act of kindness creates a better tomorrow.
                    </p>
                    <p>{events.length} upcoming events found</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventsSectionIntro;