export interface IParticipant {
    id: string;
    name: string;
    email: string;
}
export interface IEvent {
    _id: string;
    title: string;
    description: string;
    type: string;
    image: string;
    location: string;
    date: string;
    maxParticipants: number;
    participants: IParticipant[];
    createdAt: string;
    createdBy: {
        id: string;
        name: string;
        email: string;
    };
}


export interface IUser {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    emailVerified: boolean
    name: string
    image?: string | null
}