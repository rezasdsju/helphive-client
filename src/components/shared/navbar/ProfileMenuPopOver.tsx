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
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { LuUser, LuCalendarPlus, LuCalendarCog, LuCalendarCheck, LuLogOut } from "react-icons/lu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
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
    const [isSignedOut, setIsSignedOut] = useState(false)
    const router = useRouter()
    const handleSignOut = async () => {
        if (isSignedOut) {
            return
        }
        setIsSignedOut(true);
        const { data, error } = await authClient.signOut()
        if (error) {
            setIsSignedOut(false)
            toast.add({
                type: "error",
                description: "An error occurred during sign out.",
                priority: 'high'
            })
            return
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
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button className="size-10 shrink-0 cursor-pointer rounded-full flex items-center justify-center">
                                    <Avatar className="size-10 overflow-hidden border border-gray-100 dark:border-gray-700">
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
                                </button>
                            </TooltipTrigger>

                            <TooltipContent
                                side="bottom"
                                className="rounded-lg border border-border bg-popover px-3 py-2 text-sm font-medium shadow-lg"
                            >
                                {user.name}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                }
            />

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
                        disabled={isSignedOut}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-500/10"
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