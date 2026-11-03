'use client'
import { IEvent } from "@/types/event.types";
import UpcomingEventsSectionIntro from "./UpcomingEventsSectionIntro";
import UpcomingEventCard from "./UpcomingEventCard";
import { useState } from "react";

// const eventTypes = [
//     { value: "Clothes & Essential Items", label: "Clothes & Essential Items" },
//     { value: "Food Distribution", label: "Food Distribution" },
//     { value: "Community Support", label: "Community Support" },
//     { value: "Environmental Protection", label: "Environmental Protection" },
//     { value: "Cleanup & Sanitation", label: "Cleanup & Sanitation" },
//     { value: "Health & Wellness", label: "Health & Wellness" },
//     { value: "Blood Donation", label: "Blood Donation" },
//     { value: "Education & Skill Development", label: "Education & Skill Development" },
//     { value: "Disaster Relief", label: "Disaster Relief" },
//     { value: "Fundraising & Donation Drive", label: "Fundraising & Donation Drive" },
//     { value: "Elderly & Child Welfare", label: "Elderly & Child Welfare" },
//     { value: "Animal Welfare", label: "Animal Welfare" },
//     { value: "Safety & Awareness Campaign", label: "Safety & Awareness Campaign" },
//     { value: "Women Empowerment", label: "Women Empowerment" },
//     { value: "Other", label: "Other" },
// ]

const items = [
    { label: "All Categories", value: "all_categories" },
    { label: "Clothes & Essential Items", value: "clothes_essential_items" },
    { label: "Food Distribution", value: "food_distribution" },
    { label: "Community Support", value: "community_support" },
    { label: "Environmental Protection", value: "environmental_protection" },
    { label: "Cleanup & Sanitation", value: "cleanup_sanitation" },
    { label: "Health & Wellness", value: "health_wellness" },
    { label: "Blood Donation", value: "blood_donation" },
    { label: "Education & Skill Development", value: "education_skill_development" },
    { label: "Disaster Relief", value: "disaster_relief" },
    { label: "Fundraising & Donation Drive", value: "fundraising_donation_drive" },
    { label: "Elderly & Child Welfare", value: "elderly_child_welfare" },
    { label: "Animal Welfare", value: "animal_welfare" },
    { label: "Safety & Awareness Campaign", value: "safety_awareness_campaign" },
    { label: "Women Empowerment", value: "women_empowerment" },
    { label: "Other", value: "other" },
]
const UpcomingEvents = ({ events }: { events: IEvent[] }) => {
    const [valueOfEventCategorySelected, setValueOfEventCategorySelected] = useState('all_categories')
    const filteredEvents = events.filter((event) => {
        if (valueOfEventCategorySelected === 'all_categories') {
            return true
        }
        const selectedCategory = items.find((item) => {
            return item.value === valueOfEventCategorySelected
        })
        return event.type === selectedCategory?.label
    })
    return (
        <div className="px-2 sm:px-4 my-5 sm:my-10">
            <UpcomingEventsSectionIntro items={items} filteredEvents={filteredEvents} setValueOfEventCategorySelected={setValueOfEventCategorySelected}/>


            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 min-[360px]:gap-2 sm:gap-4">
                {
                    filteredEvents.map((event: IEvent) => <UpcomingEventCard key={event._id} event={event} />)

                }
            </div>

        </div>
    );
};

export default UpcomingEvents;