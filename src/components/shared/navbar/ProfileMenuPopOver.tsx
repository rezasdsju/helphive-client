'use client'
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover";
import { LuLogIn, LuUserPlus } from "react-icons/lu";
import Link from "next/link";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { LuUser, LuCalendarPlus, LuCalendarCog, LuCalendarCheck, LuLogOut } from "react-icons/lu"

const menuItems = [
    { label: "Profile", href: "#", icon: LuUser },
    { label: "Create Event", href: "#", icon: LuCalendarPlus },
    { label: "Manage Events", href: "#", icon: LuCalendarCog },
    { label: "Joined Events", href: "#", icon: LuCalendarCheck },
]

interface IUser {
    name: string,
    email: string,
    image?: string | null | undefined
}
const ProfileMenuPopOver = ({ user }: { user: IUser }) => {
    const [open, setOpen] = useState(false)

    const router = useRouter()
    const handleSignOut = async () => {
        const { data, error } = await authClient.signOut()
        if (error) {
            toast.add({
                type: "error",
                description: "An error occurred during sign out.",
                priority: 'high'
            })
        }
        if (data) {
            toast.add({
                type: "success",
                description: "You have successfully signed out.",
                priority: 'high'
            })
            router.replace('/signin')
        }
    }
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                render={
                    <button className="cursor-pointer">
                        <Avatar>
                            {
                                user.image &&
                                <AvatarImage
                                    src={user.image}
                                    alt={user.name.charAt(0)}
                                    className="grayscale"
                                />
                            }
                            <AvatarFallback>{user.name.charAt(0).toLocaleUpperCase()}</AvatarFallback>
                        </Avatar>
                    </button>

                }
            />

            <PopoverContent
                align="end"

                className="w-64 p-4 ring-gray-200 bg-white"
            >
                <PopoverHeader className="mb-3 border-b border-border pb-3">
                    <PopoverTitle className="text-base font-bold text-gray-900">
                        Hello, {user.name}!
                    </PopoverTitle>
                    <PopoverDescription className="truncate text-xs text-gray-500">
                        {user.email}
                    </PopoverDescription>
                </PopoverHeader>

                <nav className="flex flex-col gap-1">
                    {menuItems.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
                        >
                            <Icon size={17} />
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="mt-2 border-t border-border pt-2">
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                        <LuLogOut size={17} />
                        Sign Out
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ProfileMenuPopOver;