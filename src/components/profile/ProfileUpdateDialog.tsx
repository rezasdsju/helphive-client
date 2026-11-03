'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import React, { useState } from "react"
import { toast } from "../ui/toast"
import { useRouter } from "next/navigation"
import { IUser } from "@/types/event.types"

const ProfileUpdateDialog = ({ user }: { user: IUser }) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as { name: string, image: string }

        const { data, error } = await authClient.updateUser({
            name: userData.name,
            image: userData.image
        })
        if (error) {
            toast.add({
                type: 'error',
                description: 'Error Occured to update Profile',
                priority: 'high'
            })
            setOpen(false)
            return
        }
        if (data) {
            toast.add({
                type: 'success',
                description: 'Successfully updated Profile',
                priority: 'high'
            })
            setOpen(false)
            router.refresh()
        }

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={

                <button
                    type="button"
                    className=" cursor-pointer rounded-lg bg-amber-100 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:outline-indigo-400"
                >
                    Update Profile
                </button>

            } />
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={handleUpdateProfile}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue={user.name} />
                        </Field>
                        <Field>
                            <Label htmlFor="username-1">Image</Label>
                            <Input id="image" name="image" type="url" defaultValue={user.image ? user.image : ''} />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose className={`cursor-pointer`} render={<Button variant="outline">Cancel</Button>} />
                        <Button type="submit" className={`cursor-pointer`}>Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ProfileUpdateDialog;