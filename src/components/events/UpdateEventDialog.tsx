'use client'
import { Button } from "@/components/ui/button"


import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { IEvent } from "@/types/event.types"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, { useEffect, useState } from "react"
import getTokenFromClient from "@/lib/getTokenFromClient"
import { toast } from "../ui/toast"
import { useRouter } from "next/navigation"



const eventTypes = [
    { value: "Clothes Distribution", label: "Clothes Distribution" },
    { value: "Food Distribution", label: "Food Distribution" },
    { value: "Blanket Distribution", label: "Blanket Distribution" },
    { value: "Community Support", label: "Community Support" },
    { value: "Environment", label: "Environment" },
    { value: "Cleanup", label: "Cleanup" },
    { value: "Health Camp", label: "Health Camp" },
    { value: "Blood Donation", label: "Blood Donation" },
    { value: "Plantation", label: "Plantation" },
    { value: "Education", label: "Education" },
    { value: "Other", label: "Other" },
]




export default function UpdateEventDialog({ event }: { event: IEvent }) {
    const [minDate, setMinDate] = useState("")
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const updateMinDate = () => {
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)

            setMinDate(
                tomorrow.toLocaleDateString("en-CA", {
                    timeZone: "Asia/Dhaka",
                })
            )
        }

        updateMinDate()

        const interval = setInterval(updateMinDate, 10 * 60 * 1000)

        return () => clearInterval(interval)
    }, [])


    const router = useRouter()


    const handleUpdateEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())

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
        // console.log(token)

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/manage-events/${event._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(userData),
        })
        if (!res.ok) {
            toast.add({
                type: 'error',
                description: 'Error to update event',
                priority: 'high'
            })
            return
        }
        const result = await res.json()
        if (result.acknowledged) {
            toast.add({
                type: 'success',
                description: 'Event updated successfully!',
                priority: 'high'
            })
            setOpen(false)
            router.refresh()
            return
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger render={
                <button className="w-full rounded-lg bg-blue-600  dark:bg-amber-600 cursor-pointer px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto">
                    Update Event
                </button>
            }

            />
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Update Event</DialogTitle>
                    <DialogDescription>
                        Make changes to your event here. Click Submit when you&apos;re done.

                    </DialogDescription>
                </DialogHeader>



                <div>
                    <form onSubmit={handleUpdateEvent}>
                        <FieldGroup>
                            <FieldSet>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="title">
                                            Title <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Input
                                            name="title"
                                            id="title"
                                            placeholder="e.g. Free Education Support Program"
                                            minLength={5}
                                            maxLength={80}
                                            autoComplete="off"
                                            defaultValue={event.title}
                                            required
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="description">
                                            Description <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Textarea
                                            name="description"
                                            id="description"
                                            placeholder="e.g. Volunteers will run free tutoring sessions and distribute books and stationery."
                                            rows={4}
                                            minLength={10}
                                            maxLength={500}
                                            className="resize-none"
                                            defaultValue={event.description}
                                            required
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="type">
                                            Event Type<span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Select name="type" items={eventTypes} required defaultValue={event.type}>
                                            <SelectTrigger id="type" className={`w-full`}>
                                                <SelectValue placeholder={`Select Event Type`} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {eventTypes.map((item) => (
                                                        <SelectItem key={item.value} value={item.value}>
                                                            {item.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="image">
                                            Image URL<span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Input

                                            name="image"
                                            id="image"
                                            type="url"
                                            placeholder="e.g. https://images.unsplash.com/photo-..."
                                            autoComplete="off"
                                            defaultValue={event.image}
                                            required
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="location">
                                            Location<span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Input

                                            name="location"
                                            id="location"
                                            type="text"
                                            placeholder="e.g. Gorol, Kaligonj, Lalmonirhat"
                                            minLength={3}
                                            maxLength={100}
                                            autoComplete="off"
                                            defaultValue={event.location}
                                            required
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="date">
                                            Date <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Input

                                            name="date"
                                            id="date"
                                            type="date"
                                            min={minDate || undefined}
                                            defaultValue={event.date}
                                            required
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="maxParticipants">
                                            Max Participants <span className="text-destructive">*</span>
                                        </FieldLabel>
                                        <Input
                                            name="maxParticipants"
                                            id="maxParticipants"
                                            type="number"
                                            placeholder="e.g. 50"
                                            defaultValue={event.maxParticipants}
                                            min={1}
                                            max={1000}
                                            required
                                        />
                                        <FieldDescription>
                                            How many volunteers can join this event?
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <FieldSeparator />
                            <Field orientation="horizontal">
                                <Button type="submit" className='cursor-pointer'>Submit</Button>
                                {/* <Button variant="outline" type="reset">
                                    Reset
                                </Button> */}
                            </Field>
                        </FieldGroup>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
