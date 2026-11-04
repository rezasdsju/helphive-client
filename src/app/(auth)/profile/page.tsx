'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client"
import ProfileUpdateDialog from "@/components/profile/ProfileUpdateDialog";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";





const page = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleSignOut = async () => {
        const { data, error } = await authClient.signOut()
        if (error) {
            toast.add({
                type: 'error',
                description: 'An Error Occured to sign Out'
            })
            return
        }
        if (data) {
            toast.add({
                type: 'success',
                description: 'Signed out successfully',
                priority: 'high'
            })
        }
    }
    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-12">
            <div>
                <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                    <Link href="/" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                        Home
                    </Link>
                    <LuChevronRight size={14} />
                    <Link href="/profile" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                        Profile
                    </Link>
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    My Profile
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage your personal information and account settings.
                </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-800/50">
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <Avatar className="h-24 w-24 border-4 border-white shadow-md dark:border-gray-700">
                            {user?.image && (
                                <AvatarImage
                                    src={user.image}
                                    alt={user.name}
                                />
                            )}
                            <AvatarFallback className="bg-blue-100 text-3xl font-semibold text-blue-700 dark:bg-amber-100 dark:text-amber-700">
                                {user?.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>

                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {user?.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 p-6">
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Personal Information
                        </h3>

                        <div className="space-y-4">
                            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    Full Name
                                </p>
                                <p className="mt-1 font-medium text-gray-900 dark:text-white">
                                    {user?.name}
                                </p>
                            </div>

                            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    Email Address
                                </p>
                                <p className="mt-1 break-all font-medium text-gray-900 dark:text-white">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between dark:border-gray-800">
                        <button
                            onClick={handleSignOut}
                            className="rounded-lg border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
                        >
                            Sign Out
                        </button>

                        {user && <ProfileUpdateDialog user={user} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;