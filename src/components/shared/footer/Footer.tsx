import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="border-t border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-800 dark:bg-[#000817] dark:text-gray-400">
            <div className="grid grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-8 sm:gap-6 sm:px-8 lg:px-12">
                <div className="col-span-2">
                    <Link href="/" className="inline-block">
                        <>
                            <Image
                                src="/nav-logo-for-light-mode.png"
                                alt="HelpHive"
                                width={150}
                                height={70}
                                className="h-12 w-auto object-contain dark:hidden"
                                loading="eager"
                            />
                            <Image
                                src="/nav-log-for-dark-mode.png"
                                alt="HelpHive"
                                width={150}
                                height={70}
                                className="hidden h-12 w-auto object-contain dark:block"
                                loading="eager"
                            />
                        </>
                    </Link>

                    <div className="mt-4 max-w-xs space-y-2">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                            Small Acts. Big Impact.
                        </p>
                        <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                            Connecting People. Inspiring Action. Building Communities.
                        </p>
                    </div>
                </div>

                <div className="col-span-4 grid grid-cols-2 gap-6">
                    <div className="flex sm:justify-center">
                        <div>
                            <h2 className="mb-5 text-base font-bold text-gray-900 dark:text-white">
                                Quick Links
                            </h2>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="/" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Events</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Volunteer</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex sm:justify-center">
                        <div>
                            <h2 className="mb-5 text-base font-bold text-gray-900 dark:text-white">
                                Resources
                            </h2>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link>
                                <Link href="#" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Help Center</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 flex sm:justify-center">
                    <div>
                        <h2 className="mb-5 text-base font-bold text-gray-900 dark:text-white">
                            Connect With Us
                        </h2>
                        <div className="flex items-center gap-3">
                            <a href="#" aria-label="Facebook" className="text-xl transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                <FaSquareFacebook />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-xl transition-colors hover:text-pink-500">
                                <FaInstagramSquare />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-xl transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                <FaLinkedin />
                            </a>
                            <a href="#" aria-label="YouTube" className="text-xl transition-colors hover:text-red-600">
                                <IoLogoYoutube />
                            </a>
                        </div>
                        <p className="mt-4 max-w-52 text-sm leading-6">
                            Be part of the change. Let&apos;s build stronger communities together.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 px-5 py-5 text-center text-xs sm:flex-row sm:px-8 lg:px-12 dark:border-gray-800">
                <div>
                    <span>© {new Date().getFullYear()} HelpHive. All rights reserved.</span>
                </div>
                <div>
                    <span>❤️ Together for a better community.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;