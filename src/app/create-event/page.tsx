
'use client'

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
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
import { toast } from "@/components/ui/toast"
import getTokenFromClient from "@/lib/getTokenFromClient"
import React, { useEffect, useState } from "react"



const eventTypes = [
    { value: "Clothes & Essential Items", label: "Clothes & Essential Items" },
    { value: "Food Distribution", label: "Food Distribution" },
    { value: "Community Support", label: "Community Support" },
    { value: "Environmental Protection", label: "Environmental Protection" },
    { value: "Cleanup & Sanitation", label: "Cleanup & Sanitation" },
    { value: "Health & Wellness", label: "Health & Wellness" },
    { value: "Blood Donation", label: "Blood Donation" },
    { value: "Education & Skill Development", label: "Education & Skill Development" },
    { value: "Disaster Relief", label: "Disaster Relief" },
    { value: "Fundraising & Donation Drive", label: "Fundraising & Donation Drive" },
    { value: "Elderly & Child Welfare", label: "Elderly & Child Welfare" },
    { value: "Animal Welfare", label: "Animal Welfare" },
    { value: "Safety & Awareness Campaign", label: "Safety & Awareness Campaign" },
    { value: "Women Empowerment", label: "Women Empowerment" },
    { value: "Other", label: "Other" },
]



const CreateEventPage = () => {

  const [minDate, setMinDate] = useState("")

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






  const handleCreateEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const eventData = Object.fromEntries(formData.entries())
    // console.log(eventData)

    const newEventData = {
      ...eventData,
      maxParticipants: Number(eventData.maxParticipants),
      participants: [],
      createdAt: new Date().toISOString()

    }
    // console.log(newEventData)


    const jwtToken = await getTokenFromClient()
    if (!jwtToken) return

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/create-event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(newEventData),
    })
    if (!res.ok || res.status === 500 || res.status === 400) {
      toast.add({
        type: "error",
        description: "An error occurred in creating event.",
        priority: 'high'
      })
      return
    }
    const result = await res.json()
    // console.log(result)

    if (result.acknowledged) {
      toast.add({
        type: "success",
        description: "You have created event successfully!",
        priority: 'high'
      })
    }

  }

  return (
    <div className="max-w-2xl mx-auto my-10 sm:my-15 px-2">
      <div >
        <form onSubmit={handleCreateEvent}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Create Event</FieldLegend>
              <FieldDescription>
                Share the details of your event and invite volunteers to join.
              </FieldDescription>
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
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="type">
                    Event Type<span className="text-destructive">*</span>
                  </FieldLabel>
                  <Select name="type" items={eventTypes} required >
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
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="reset">
                Reset
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage




