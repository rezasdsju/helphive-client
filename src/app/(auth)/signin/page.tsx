'use client'
import { cn } from "cn"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React from "react"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/components/ui/toast"
import { useRouter } from "next/navigation"



const SignInPage = () => {
    const router = useRouter()
    const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as { email: string, password: string }
        // console.log(userData)

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password
        })
        if (error) {
            toast.add({
                type: "error",
                description: "An error occurred during sign in.",
                priority: 'high'
            })
        }
        if (data) {
            toast.add({
                type: "success",
                description: "You have successfully signed in!",
                priority: 'high'
            })
            router.replace('/')
        }
    }
    const handleGoogleSignIn = async () => {
        const { error } = await authClient.signIn.social({
            provider: 'google'
        })
        if (error) {
            toast.add({
                type: "error",
                description: "An error occurred during sign in.",
                priority: 'high'
            })
            return
        }
    }
    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card>
                <CardHeader>
                    <CardTitle>Sign In to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignIn}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input name="password" id="password" type="password" required />
                            </Field>
                            <Field>
                                <Button type="submit" className={`cursor-pointer`}>Sign In</Button>
                                <Button onClick={handleGoogleSignIn} variant="outline" type="button" className={`cursor-pointer`}>
                                    Sign In with Google
                                </Button>
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignInPage;
