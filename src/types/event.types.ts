export interface IEvents {
    _id: string;
    title: string;
    description: string;
    type: string;
    image: string;
    location: string;
    date: string;
    maxParticipants: number;
    participants: string[];
    createdAt: string;
    createdBy: {
        id: string;
        name: string;
        email: string;
    };
}