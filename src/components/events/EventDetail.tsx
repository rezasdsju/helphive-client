'use client'
import { IEvent, IParticipant } from "@/types/event.types";
import { LuCalendarDays, LuMapPin, LuUser, LuUsers } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import getTokenFromClient from "@/lib/getTokenFromClient";

type IUser = IParticipant | null | undefined

const EventDetail = ({ event }: { event: IEvent }) => {
    const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const joined = event.participants.length;
    const spotsLeft = event.maxParticipants - joined;

    const isFull = spotsLeft <= 0



    const router = useRouter()

    const { data: session, isPending } = authClient.useSession()
    const user: IUser = session?.user


    const alreadyJoined = !!user && event.participants.some((p) => p.id === user.id)



    const handleJoinEvent = async () => {
        if (isPending) return
        if (!user) {
            toast.add({
                type: 'error',
                description: 'You are not signed in. Please register Sign in',
                priority: 'high'
            })
            router.replace('/signin')
            return
        }
        if (alreadyJoined) {
            toast.add({
                type: 'error',
                description: 'You already joined',
                priority: 'high'
            })
            return
        }
        const jwtToken = await getTokenFromClient()
        if (!jwtToken) return
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/add-participant/${event._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify(user),
        })

        if (res.status === 409) {
            toast.add({
                type: 'error',
                description: 'You already joined',
                priority: 'high'
            })
            return
        }
        if (!res.ok) {
            console.log('error')
            toast.add({
                type: 'error',
                description: 'Error occured to book your participation request',
                priority: 'high'
            })
            return
        }
        const result = await res.json()
        // console.log(result)
        if (result.acknowledged) {
            toast.add({
                type: 'success',
                description: 'You have joined successfully!',
                priority: 'high'
            })
            // router.refresh()
            window.location.reload()

        }
    }
    return (
        <div className="mx-auto my-5 w-full max-w-6xl px-3 sm:my-10 sm:px-4">
            <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                    Home
                </Link>
                <LuChevronRight size={14} />
                <Link href="/upcoming-events" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                    Upcoming Events
                </Link>
                <LuChevronRight size={14} />
                <span className="max-w-48 truncate font-medium text-foreground sm:max-w-xs">
                    {event.title}
                </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-sm md:aspect-auto md:min-h-104">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        loading="eager"
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
                            {event.type}
                        </span>
                        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                            {event.title}
                        </h1>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {event.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-2">
                        <div className="flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                                <LuCalendarDays size={18} />
                            </span>
                            <div>
                                <p className="text-xs text-muted-foreground">Date</p>
                                <p className="text-sm font-medium text-card-foreground">{formattedDate}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                                <LuMapPin size={18} />
                            </span>
                            <div className="min-w-0">
                                <p className="text-xs text-muted-foreground">Location</p>
                                <p className="truncate text-sm font-medium text-card-foreground">{event.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                                <LuUser size={18} />
                            </span>
                            <div className="min-w-0">
                                <p className="text-xs text-muted-foreground">Organized by</p>
                                <p className="truncate text-sm font-medium text-card-foreground">{event.createdBy.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                                <LuUsers size={18} />
                            </span>
                            <div>
                                <p className="text-xs text-muted-foreground">Volunteers</p>
                                <p className="text-sm font-medium text-card-foreground">
                                    {joined} / {event.maxParticipants} joined
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <button
                            onClick={handleJoinEvent}
                            type="button"
                            disabled={isPending || isFull || alreadyJoined}
                            className="w-full cursor-pointer rounded-xl bg-amber-500 px-6 py-3 font-bold text-white shadow-sm transition-all duration-200 hover:bg-amber-600 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none"
                        >
                            {isPending ? 'Checking Session...' : isFull ? "Event Full" : alreadyJoined ? "Already Joined" : "Join Event"}
                        </button>
                        {(!isFull) && (
                            <p className="mt-2 text-center text-xs text-muted-foreground">
                                {spotsLeft} {spotsLeft === 1 ? "spot" : "spots"} left
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;