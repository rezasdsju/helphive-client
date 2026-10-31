'use client'
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover";
import { LuUserRound, LuLogIn, LuUserPlus } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";

const AuthPopover = () => {
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                render={
                    <button
                        type="button"
                        aria-label="Open account menu"
                        className="flex size-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-700 shadow-sm transition duration-200 hover:border-amber-400 hover:bg-amber-100 hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:scale-95"
                    >
                        <LuUserRound size={20} />
                    </button>
                }
            />

            <PopoverContent
                align="end"

                className="w-64 p-4 bg-popover"
            >
                <PopoverHeader className="mb-4">
                    <PopoverTitle className="text-lg font-bold text-foreground">
                        Welcome to HelpHive!
                    </PopoverTitle>
                    <PopoverDescription className="text-sm text-muted-foreground">
                        Join our community and make a difference together.
                    </PopoverDescription>
                </PopoverHeader>

                <div className="flex flex-col gap-2">
                    <Link
                        href="/signin"
                        className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        onClick={() => setOpen(false)}
                    >
                        <LuLogIn size={17} />
                        Sign In
                    </Link>

                    <Link
                        href="/signup"
                        className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-accent"
                        onClick={() => setOpen(false)}
                    >
                        <LuUserPlus size={17} />
                        Sign Up
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default AuthPopover;