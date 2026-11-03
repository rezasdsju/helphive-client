import { IEvent } from "@/types/event.types";
import Image from "next/image";
import { FiMapPin, FiUsers } from "react-icons/fi";
import UpdateEventDialog from "./UpdateEventDialog";
import DeleteEventDialog from "./DeleteEventDialog";

const ManageEventCard = ({ event }: { event: IEvent }) => {
    return (
        <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:grid-cols-7 sm:items-center dark:border-gray-700 dark:bg-gray-900">
            <div className="flex flex-col gap-4 sm:col-span-5 sm:flex-row sm:items-center">
                <div className="relative w-full shrink-0 overflow-hidden rounded-lg sm:w-50">
                    <Image
                        src={event.image}
                        alt={event.title}
                        width={200}
                        height={100}
                        className="h-25 w-full object-cover sm:w-50"
                    />
                    <div className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white capitalize">
                        {event.type}
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <h3 className="line-clamp-1 text-base font-semibold text-gray-900 dark:text-gray-100">
                        {event.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {event.description}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex min-w-0 items-center gap-1.5">
                            <FiMapPin className="shrink-0" />
                            <span className="truncate">{event.location}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FiUsers className="shrink-0" />
                            <span>{event.participants.length} participants</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2 sm:items-end">
                <UpdateEventDialog event={event} />
                <DeleteEventDialog event={event} />
            </div>
        </div>
    );
};

export default ManageEventCard;