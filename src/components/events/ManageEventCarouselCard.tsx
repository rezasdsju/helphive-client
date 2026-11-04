import { IEvent } from "@/types/event.types";
import Image from "next/image";
import { FiMapPin, FiUsers } from "react-icons/fi";
import UpdateEventDialog from "./UpdateEventDialog";
import DeleteEventDialog from "./DeleteEventDialog";
import { CiCalendarDate } from "react-icons/ci";

const ManageEventCarouselCard = ({ event }: { event: IEvent }) => {
    return (
        <div className="w-full flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="relative w-full overflow-hidden rounded-md">
                <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {event.type}
                </div>
            </div>


            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-900 leading-snug wrap-break-word">
                    {event.title}
                </span>
                <span className="text-xs text-gray-600 leading-relaxed wrap-break-word line-clamp-3">
                    {event.description}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FiMapPin className="shrink-0" />
                    <span className="truncate">{event.location}</span>
                </div>
                <span className="flex min-w-0 items-center gap-1.5 text-xs text-gray-500">
                    <CiCalendarDate className="shrink-0" />
                    <span className="truncate">
                        {
                            new Date(event.date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }).replaceAll('/', '-')
                        }
                    </span>
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FiUsers className="shrink-0" />
                    <span>{event.participants.length} participants</span>
                </div>
            </div>


            <div className="flex flex-col gap-2">
                <UpdateEventDialog event={event} />
                <DeleteEventDialog event={event} />
            </div>
        </div>
    );
};

export default ManageEventCarouselCard;