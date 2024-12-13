"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Validation schema
const SignUpSchema = z
  .object({
    firstName: z.string().min(2, { message: "First Name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, { message: "Phone Number must be exactly 10 digits." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // Point the error to the confirmPassword field
  })

export default function SignUpForm() {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: z.infer<typeof SignUpSchema>) {
    console.log("Sign-Up Form Submitted", data)
  }

  const isFormValid = form.formState.isValid

  return (
    <Form {...form}>
      <form className="max-w-xl px-6 md:px-0 m-auto flex flex-col gap-4 h-fit py-8 justify-center" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("py-4 lg:py-6 px-6")}
                  placeholder="First Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("py-4 lg:py-6 px-6")}
                  placeholder="Last Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  className={cn("py-4 lg:py-6 px-6")}
                  placeholder="Phone Number (10 digits)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className={cn("py-4 lg:py-6 px-6")}
                  placeholder="Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  className={cn("py-4 lg:py-6 px-6")}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  className={cn("py-4 lg:py-6 px-6")}
                  placeholder="Confirm Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-4 w-full">
          <Button
            size="lg"
            className={cn("w-full py-4 rounded-full text-xl")}
            type="submit"
            disabled={!isFormValid}
          >
            Sign Up
          </Button>
        </div>
        <div>
          <p className="text-center">
            Already have an account? <a href="#" className="text-blue-500">Sign In</a>
          </p>
        </div>
      </form>
    </Form>
  )
}
