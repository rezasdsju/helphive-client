
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


interface IItem {
    label: string,
    value: string
}

interface IFilterUpcomingEvents {
    setValueOfEventCategorySelected: React.Dispatch<React.SetStateAction<string>>,
    items: IItem[]
}
export default function FilterUpcomingEvents({ setValueOfEventCategorySelected, items }: IFilterUpcomingEvents) {

    return (
        <Select onValueChange={(value) => setValueOfEventCategorySelected(value as string)} items={items} defaultValue="all_categories">
            <SelectTrigger className="w-full max-w-48">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>All Categories</SelectLabel>
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
