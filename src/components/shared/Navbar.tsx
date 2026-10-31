import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import Link from "next/link";
import { MdOutlineUpcoming } from "react-icons/md";
import AuthPopover from "./AuthPopover";

const Navbar = () => {
    return (
        <nav className="border-b border-gray-100 shadow py-2 ">
            <div className="grid grid-cols-3 items-center  w-full max-w-6xl  mx-auto px-2">
                <div>
                    <Image src={'/nav-logo-3.png'} alt="Nav Logo" width={150} height={60} className="h-11 w-auto object-contain" loading="eager"></Image>
                </div>
                <Link
                    href=""
                    className="group relative inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-blue-600"
                >
                    <span className="flex size-8 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition group-hover:bg-amber-100">
                        <MdOutlineUpcoming className="text-lg" />
                    </span>
                    <span className="hidden sm:flex">Upcoming Events</span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
                <div className="hidden sm:flex items-center justify-end gap-3">
                    <button className="flex size-10 items-center justify-center rounded-full border border-gray-50 sm:border-gray-100 text-gray-700 transition hover:bg-gray-100">
                        <MdOutlineDarkMode size={20} />
                    </button>

                    <button className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                        Login
                    </button>

                    <button className="rounded-md border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                        Logout
                    </button>
                </div>
                <div className="flex items-center justify-end gap-2 sm:hidden">
                    <button className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100">
                        <MdOutlineDarkMode size={20} />
                    </button>
                    <AuthPopover />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;