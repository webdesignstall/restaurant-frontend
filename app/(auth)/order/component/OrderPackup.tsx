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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function OrderPackup() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted", data)
  }

  const isFormValid = form.formState.isValid

  return (
    <Form {...form}>
      <form className="mt-12" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("py-8 px-6 bg-white")}
                  placeholder="Search Store, city or Zip"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-8 w-full">
          {isFormValid && (
            <Button
              size="lg"
              className="w-full py-8 rounded-full text flex text-xl"
              type="submit"
            >
              Start Your Order
            </Button>
          )}
        </div>
        <div>
          <p className="text-center">
            Share your location to find a True near you
          </p>
        </div>
      </form>
    </Form>
  )
}
