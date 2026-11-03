"use client"

import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";




const useSignOut = () => {
    const [isSigningOut, setIsSigningOut] = useState(false)

    const router = useRouter()
    const handleSignOut = async () => {
        if (isSigningOut) return

        setIsSigningOut(true)

        const { data, error } = await authClient.signOut()
        if (error) {
            setIsSigningOut(false)

            toast.add({
                type: "error",
                description: "An error occurred during sign out.",
                priority: "high",
            })

            return
        }

        if (data) {
            toast.add({
                type: "success",
                description: "You have successfully signed out.",
                priority: "high",
            })

            router.replace("/signin")
        }
    }
    return { handleSignOut, isSigningOut }
};

export default useSignOut;