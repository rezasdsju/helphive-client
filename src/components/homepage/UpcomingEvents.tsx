
import UpcomingEventCard from "./UpcomingEventCard";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const upcomingEvents = [
    {
        "_id": "665f1a2b3c4d5e6f7a8b9c01",
        "title": "Winter Clothes Distribution",
        "description": "We are collecting and distributing warm clothes to people in need. Volunteers will help sort, pack and hand out clothes.",
        "type": "Clothes Distribution",
        "location": "Mirpur 10, Dhaka",
        "date": "2026-12-15T09:00:00.000Z",
        "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=500&fit=crop",
        "maxParticipants": 50,
        "participants": [],
        "createdBy": {
            "id": "user_id_1",
            "name": "Community Organizer",
            "email": "organizer@example.com"
        },
        "createdAt": "2026-10-31T10:30:00.000Z"
    },
    {
        "_id": "665f1a2b3c4d5e6f7a8b9c02",
        "title": "Community Clean-Up Drive",
        "description": "Join our community clean-up campaign to remove waste from streets and public spaces. Volunteers will help collect garbage and raise environmental awareness.",
        "type": "Environment",
        "location": "Dhanmondi Lake, Dhaka",
        "date": "2026-11-20T07:00:00.000Z",
        "image": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop",
        "maxParticipants": 40,
        "participants": [],
        "createdBy": {
            "id": "user_id_1",
            "name": "Community Organizer",
            "email": "organizer@example.com"
        },
        "createdAt": "2026-10-31T10:35:00.000Z"
    },
    {
        "_id": "665f1a2b3c4d5e6f7a8b9c03",
        "title": "Voluntary Blood Donation Camp",
        "description": "Be a part of our blood donation campaign. Volunteers will help organize donors, manage registration and support the medical team.",
        "type": "Blood Donation",
        "location": "Uttara Sector 7, Dhaka",
        "date": "2026-11-25T09:00:00.000Z",
        "image": "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=500&fit=crop",
        "maxParticipants": 35,
        "participants": [],
        "createdBy": {
            "id": "user_id_2",
            "name": "Health Care Foundation",
            "email": "healthcare@example.com"
        },
        "createdAt": "2026-10-31T10:40:00.000Z"
    },
    {
        "_id": "665f1a2b3c4d5e6f7a8b9c04",
        "title": "Green Bangladesh Tree Plantation",
        "description": "Help us make our city greener by planting trees in public spaces. Volunteers will plant saplings and spread awareness about environmental protection.",
        "type": "Tree Plantation",
        "location": "Suhrawardy Udyan, Dhaka",
        "date": "2026-12-05T07:30:00.000Z",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
        "maxParticipants": 60,
        "participants": [],
        "createdBy": {
            "id": "user_id_3",
            "name": "Green Earth Foundation",
            "email": "greenearth@example.com"
        },
        "createdAt": "2026-10-31T10:45:00.000Z"
    },
    {
        "_id": "665f1a2b3c4d5e6f7a8b9c05",
        "title": "Community Food Distribution",
        "description": "Help distribute nutritious meals and essential food packages to underprivileged families. Volunteers will assist with food preparation, packing and distribution.",
        "type": "Food Distribution",
        "location": "Kamrangirchar, Dhaka",
        "date": "2026-11-28T11:00:00.000Z",
        "image": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
        "maxParticipants": 45,
        "participants": [],
        "createdBy": {
            "id": "user_id_4",
            "name": "Food For All",
            "email": "foodforall@example.com"
        },
        "createdAt": "2026-10-31T10:50:00.000Z"
    },
    {
        "_id": "665f1a2b3c4d5e6f7a8b9c06",
        "title": "Free Education Support Program",
        "description": "Support underprivileged children through free educational activities. Volunteers will help students with reading, writing, basic mathematics and learning materials.",
        "type": "Education",
        "location": "Mohammadpur, Dhaka",
        "date": "2026-12-10T08:30:00.000Z",
        "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
        "maxParticipants": 30,
        "participants": [],
        "createdBy": {
            "id": "user_id_5",
            "name": "Education For Everyone",
            "email": "education@example.com"
        },
        "createdAt": "2026-10-31T10:55:00.000Z"
    }
]
export interface IEvent {
    _id: string;
    title: string;
    description: string;
    type: string;
    location: string;
    date: string;
    image: string;
    maxParticipants: number;
    participants: string[];
    createdBy: {
        id: string;
        name: string;
        email: string;
    };
    createdAt: string;
}
const UpcomingEvents = () => {
    return (
        <div className="my-5 sm:my-15 px-2">
            <div className="flex items-center justify-center py-5">
                <div >
                    <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
                        <span>Upcoming</span>
                        <span className="text-amber-500">Events</span>
                    </h2>
                    <p className="max-w-lg text-center">
                        Discover upcoming volunteering events and join hands to make a positive impact in your community.
                    </p>
                </div>
            </div>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="mx-auto w-full max-w-6xl px-10"
            >
                <CarouselContent>
                    {upcomingEvents.map((event:IEvent)=>(
                        <CarouselItem key={event._id}   className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <UpcomingEventCard event={event}></UpcomingEventCard>
                        </CarouselItem>
                    ))}
                   
                </CarouselContent>
                <CarouselPrevious className={`left-1 cursor-pointer`}/>
                <CarouselNext className={`right-1 cursor-pointer`}/>
            </Carousel>
        </div>
    );
};

export default UpcomingEvents;