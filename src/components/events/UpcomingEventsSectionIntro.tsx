import { IEvent } from "@/types/event.types";
import React from "react";
import FilterUpcomingEvents from "./FilterUpcomingEvents";

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


interface IItem {
    label: string,
    value: string
}
interface IUpcomingEventsSectionIntro {
    filteredEvents: IEvent[],
    setValueOfEventCategorySelected: React.Dispatch<React.SetStateAction<string>>,
    items: IItem[]
}
const UpcomingEventsSectionIntro = ({ items, filteredEvents, setValueOfEventCategorySelected }: IUpcomingEventsSectionIntro) => {
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
                    <p>{filteredEvents.length} upcoming events found</p>
                </div>
            </div>

            <div>
                <FilterUpcomingEvents items={items} setValueOfEventCategorySelected={setValueOfEventCategorySelected} />
            </div>
        </div>
    );
};

export default UpcomingEventsSectionIntro;