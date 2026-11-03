'use client'
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useState } from "react";
import { LuUser, LuCalendarPlus, LuCalendarCog, LuCalendarCheck, LuLogOut } from "react-icons/lu"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { IoChevronDownSharp } from "react-icons/io5";
import useSignOut from "@/hooks/useSignOut";


const menuItems = [
    { label: "Profile", href: "/profile", icon: LuUser },
    { label: "Create Event", href: "/create-event", icon: LuCalendarPlus },
    { label: "Manage Events", href: "/manage-events", icon: LuCalendarCog },
    { label: "Joined Events", href: "/joined-events", icon: LuCalendarCheck },
]

interface IUser {
    name: string,
    email: string,
    image?: string | null | undefined
}
const ProfileMenuPopOver = ({ user }: { user: IUser }) => {
    const [open, setOpen] = useState(false)
    const {handleSignOut, isSigningOut} = useSignOut()

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <Tooltip >


                <TooltipTrigger
                    render={

                        <PopoverTrigger render={
                            <button
                                className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white p-0.5 pr-2 shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-amber-500/50 dark:hover:bg-gray-800 cursor-pointer"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full">
                                    <Avatar className="size-10 overflow-hidden border-2 border-white shadow-sm dark:border-gray-800">
                                        {user.image && (
                                            <AvatarImage
                                                src={user.image}
                                                alt={user.name}
                                                className="size-full object-cover"
                                            />
                                        )}
                                        <AvatarFallback className="bg-amber-100 font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-400">
                                            {user.name.charAt(0).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <IoChevronDownSharp className="size-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180 group-hover:text-amber-600 dark:text-gray-400" />
                            </button>
                        } />
                    }
                />
                <TooltipContent>
                    {user.name}
                </TooltipContent>
            </Tooltip>


            <PopoverContent
                align="end"

                className="w-64 p-4 ring-foreground/10 bg-popover"
            >
                <PopoverHeader className="mb-3 border-b border-border pb-3">
                    <PopoverTitle className="text-base font-bold text-foreground">
                        Hello, {user.name}!
                    </PopoverTitle>
                    <PopoverDescription className="truncate text-xs text-muted-foreground">
                        {user.email}
                    </PopoverDescription>
                </PopoverHeader>

                <nav className="flex flex-col gap-1">
                    {menuItems.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground transition hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-500/10 dark:hover:text-amber-400"
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
                        disabled={isSigningOut}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                        <LuLogOut size={17} />
                        Logout
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ProfileMenuPopOver;