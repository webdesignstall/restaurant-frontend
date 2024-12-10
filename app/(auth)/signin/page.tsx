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
const SignInSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
})

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof SignInSchema>) {
    console.log("Sign-In Form Submitted", data)
  }

  const isFormValid = form.formState.isValid

  return (
    <Form {...form}>
      <form className="max-w-xl m-auto flex flex-col gap-4 h-screen justify-center" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("py-8 px-6")}
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
                  className={cn("py-8 px-6")}
                  placeholder="Password"
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
            className="w-full py-8 rounded-full text flex text-xl"
            type="submit"
          >
            Sign In
          </Button>
        </div>
        <div>
          <p className="text-center">
            Don’t have an account? <a href="#" className="text-blue-500">Sign Up</a>
          </p>
        </div>
      </form>
    </Form>
  )
}
