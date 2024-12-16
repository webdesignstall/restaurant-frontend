"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  openingTime: z.any(),
  closingTime: z.any(),
  maxReservePerson: z.any(),
})

export default function ReservationSettings() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      openingTime: "",
      closingTime: "",
      maxReservePerson: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

  }

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-sm bg-white">
      <p className="text-xl font-semibold mb-4">Reservation Settings</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="openingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opening Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="closingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Closing Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxReservePerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Reserve Person</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={100} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary-dark">
            Save Settings
          </Button>
        </form>
      </Form>
    </div>
  )
}
