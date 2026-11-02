'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"

const items = [
  { label: "All Events", value: "all_events" },
  { label: "Upcoming Events", value: "upcoming_events" },
]
interface IFilterJoinEvents{
    setValueOfEventSelected: React.Dispatch<React.SetStateAction<string>>
}
export default function FilterJoinedEvents({setValueOfEventSelected}:IFilterJoinEvents) {
    
    return (
    <Select onValueChange={(value)=>setValueOfEventSelected(value as string)} items={items}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>All Events</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value} >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
