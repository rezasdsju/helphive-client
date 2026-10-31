'use client'
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
import React from "react";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import Link from "next/link"



const SignUpPage = () => {
    const router = useRouter()
    const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string, password1: string }
        // console.log(userData)
        if (userData.password !== userData.password1) {
            toast.add({
                type: "error",
                description: "Password Mismatched",
                priority: "high",
            });
            return;
        }
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(userData.password);
        // console.log(validPassword)
        if (!validPassword){
            toast.add({
                type: "error",
                description: "Password Invalid. Must have an uppercase letter, a lowercase letter",
                priority: "high",
            });
            return
        }

        const {data, error} = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            image: userData.image,
            password: userData.password
        })
        if (error){
            toast.add({
                type: "error",
                description: "An error occurred during signup. Please try again",
                priority: "high",
            });
            return;            
        }
        if (data){
            toast.add({
                type: "success",
                description: "Your account has been created successfully!",
                priority: "high",
            });    
            router.replace('/signin')  

        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                    Enter your information below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSignUp}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <Input name="name" id="name" type="text" placeholder="John Doe" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                            <FieldDescription>
                                We&apos;ll use this to contact you. We will not share your email
                                with anyone else.
                            </FieldDescription>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="image">Image URL</FieldLabel>
                            <Input name="image" id="image" type="url" required placeholder="https://your-image.io" />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input name="password" id="password" type="password" required />
                            <FieldDescription>
                                Must be at least 8 characters long.
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="confirm-password">
                                Confirm Password
                            </FieldLabel>
                            <Input name="password1" id="confirm-password" type="password" required />
                            <FieldDescription>Please confirm your password.</FieldDescription>
                        </Field>
                        <FieldGroup>
                            <Field>
                                <Button type="submit">Create Account</Button>
                                <Button variant="outline" type="button">
                                    Sign up with Google
                                </Button>
                                <FieldDescription className="px-6 text-center">
                                    Already have an account? <Link href="/signin">Sign in</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
};

export default SignUpPage;