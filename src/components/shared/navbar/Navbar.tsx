'use client'
import Image from "next/image";
import Link from "next/link";
import { MdOutlineUpcoming } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import ProfileMenuPopOver from "./ProfileMenuPopOver";
import ThemeToggle from "./ThemeToggle";
import useSignOut from "@/hooks/useSignOut";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    const { handleSignOut, isSigningOut } = useSignOut()
    
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
                            isPending ?
                                <div className="size-10"></div> :
                                <div>
                                    {
                                        user ?
                                            <div className="flex items-center justify-center gap-2">

                                                <div>
                                                    <ProfileMenuPopOver user={user} />
                                                </div>



                                                <button onClick={handleSignOut} disabled={isSigningOut}
                                                    className="hidden sm:flex rounded-md bg-white dark:bg-slate-800 text-red-500 px-6 py-2.5 text-sm font-semibold   transition hover:bg-amber-100 dark:hover:bg-slate-700 cursor-pointer border border-red-300 dark:border-gray-600">
                                                    Logout
                                                </button>

                                            </div>
                                            :
                                            <div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link href={`/signin`}>
                                                        <button className="rounded-md bg-amber-300 dark:bg-amber-400 border border-gray-300 px-4 py-2 min-[420px]:px-6 min-[420px]:py-2.5  text-sm font-semibold text-slate-700 transition hover:bg-amber-400 dark:hover:bg-amber-500 cursor-pointer">
                                                            Login
                                                        </button>
                                                    </Link>

                                                </div>
                                            </div>
                                    }
                                </div>
                        }
                    </div>


                </div>


            </div>
        </nav>
    );
};

export default Navbar;