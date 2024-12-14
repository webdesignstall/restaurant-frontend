"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required." }),
  lastName: z.string().nonempty({ message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().nonempty({ message: "Phone number is required." }),
  numberOfPeople: z
    .string()
    .nonempty({ message: "Please specify the number of people." }),
  eventType: z.string().nonempty({ message: "Please select an event type." }),
  eventDate: z.date({ required_error: "Please select an event date." }).nullable(),
  eventStartTime: z.string().nonempty({ message: "Start time is required." }),
  eventEndTime: z.string().nonempty({ message: "End time is required." }),
  eventDetails: z.string().optional(),
  howDidYouHear: z.string().optional(),
  anythingElse: z.string().optional(),
});

export function GroupDiningForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      numberOfPeople: "",
      eventType: "",
      eventDate: null,
      eventStartTime: "",
      eventEndTime: "",
      eventDetails: "",
      howDidYouHear: "",
      anythingElse: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`Group Dining Details:\n${JSON.stringify(data, null, 2)}`);
  }

  return (
    <div className="p-4 md:p-8 max-w-lg mx-auto">
      <div>
        <p className="text-2xl font-semibold py-4">
          Restaurant Location
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="bg-white border-gray-800 focus-visible:ring-offset-0 py-6">
                    <SelectTrigger aria-label="Select event type " className={cn('font-semibold')}>
                      <SelectValue placeholder="Select an option" className={cn('font-semibold')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="first name"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
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
                    type="text"
                    {...field}
                    placeholder="last name"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
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
                    {...field}
                    placeholder="email"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    type="tel"
                    {...field}
                    placeholder="phone number"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    placeholder="Enter number of people"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="bg-white border-gray-800 focus-visible:ring-offset-0 py-6">
                    <SelectTrigger aria-label="Select event type">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="border-gray-800 py-6">
                      <Button
                        variant="outline"
                        className="w-full pl-3 text-left font-normal bg-white"
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      //   selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventStartTime"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    type="time"
                    {...field}
                    placeholder="Enter start time"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventEndTime"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    type="time"
                    {...field}
                    placeholder="Enter end time"
                    className="input bg-white capitalize py-6 border-gray-800 font-semibold text-md lg:text-md focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventDetails"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Provide additional details about your event"
                    className="textarea bg-white text-lg focus-visible:ring-offset-0 border-gray-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="howDidYouHear"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Let us know how you heard about us"
                    className="textarea bg-white text-lg focus-visible:ring-offset-0 border-gray-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anythingElse"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Add any additional information here"
                    className="textarea bg-white text-lg focus-visible:ring-offset-0 border-gray-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Submit Request</Button>
        </form>
      </Form>
    </div>
  );
}