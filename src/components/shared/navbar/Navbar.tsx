'use client'
import Image from "next/image";
import Link from "next/link";
import { MdOutlineUpcoming } from "react-icons/md";
import AuthPopover from "./AuthPopover";
import { authClient } from "@/lib/auth-client";
import ProfileMenuPopOver from "./ProfileMenuPopOver";
import ThemeToggle from "./ThemeToggle";




const Navbar = () => {
    const { data: session } = authClient.useSession()
    // console.log(session)
    const user = session?.user
    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-border shadow py-2 ">
            <div className="grid grid-cols-3 items-center  w-full max-w-6xl  mx-auto px-2">
                <Link href="/">
                    <>
                        <Image
                            src="/nav-logo-for-light-mode.png"
                            alt="HelpHive Logo"
                            width={150}
                            height={60}
                            className="h-11 w-auto object-contain dark:hidden"
                            loading="eager"
                        />

                        <Image
                            src="/nav-logo-for-dark-mode-2.png"
                            alt="HelpHive Logo"
                            width={150}
                            height={60}
                            className="hidden h-11 w-auto object-contain dark:block"
                            loading="eager"
                        />
                    </>
                </Link>
                <Link
                    href="/upcoming-events"
                    className="group relative inline-flex items-center justify-center gap-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-blue-600"
                >
                    <span className="flex size-8 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition group-hover:bg-amber-100">
                        <MdOutlineUpcoming className="text-lg" />
                    </span>
                    <span className="hidden sm:flex">Upcoming Events</span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>

                <div className="flex items-center justify-end gap-3">
                    <ThemeToggle></ThemeToggle>
                    <div>
                        {
                            user ?
                                <div>
                                    <ProfileMenuPopOver user={user} />
                                </div> :
                                <div>
                                    <div className="hidden sm:flex items-center justify-center gap-2">
                                        <Link href={`/signin`}>
                                            <button className="rounded-md bg-amber-300 text-gray-900 px-6 py-2.5 text-sm font-semibold  transition hover:bg-amber-500 cursor-pointer">
                                                Sign In
                                            </button>
                                        </Link>

                                        <Link href={`/signup`}>
                                            <button className="rounded-md border border-gray-300 px-6 py-2.5 text-sm font-semibold text-foreground transition hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                                                Sign Up
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-end gap-2 sm:hidden">
                                        <AuthPopover />
                                    </div>
                                </div>
                        }
                    </div>


                </div>


            </div>
        </nav>
    );
};

export default Navbar;