'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import getTokenFromClient from "@/lib/getTokenFromClient"
import { IEvent } from "@/types/event.types"
import { useState } from "react"
import { toast } from "../ui/toast"
import { useRouter } from "next/navigation"

export default function DeleteEventDialog({ event }: { event: IEvent }) {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        const token = await getTokenFromClient()
        if (!token) {
            toast.add({
                type: 'error',
                description: 'You are not authorized',
                priority: 'high'
            })
            router.replace('/signin')
            return
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/manage-events/${event._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) {
            toast.add({
                type: 'error',
                description: 'Failed to delete event',
                priority: 'high'
            })
            return
        }
        const result = await res.json()
        if (result.acknowledged) {
            toast.add({
                type: 'success',
                description: 'Event deleted successfully!',
                priority: 'high'
            })
            setOpen(false)
            router.refresh()
            return
        }
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger render={


                <button className="w-full sm:w-auto rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition-all duration-200 ease-in-out hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-md active:scale-95 cursor-pointer dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400 dark:hover:border-red-500 dark:hover:bg-red-600 dark:hover:text-white">
                    Delete Event
                </button>
            }
            />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this event from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={`cursor-pointer`}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className={`cursor-pointer`}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
