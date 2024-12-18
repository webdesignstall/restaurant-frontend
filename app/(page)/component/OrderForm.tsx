"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Restaurant options
const restaurantOptions = [
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "miami", label: "Miami" },
];

// Zod schema for validation
const OrderFormSchema = z.object({
  firstName: z.string().min(2, { message: "First Name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(8, { message: "Enter a valid phone number." }),
  preferredLocation: z.string().nonempty({ message: "Please select a restaurant location." }),
});

export default function OrderForm() {
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof OrderFormSchema>>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      preferredLocation: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: z.infer<typeof OrderFormSchema>) => {
  };

  return (
    <div className="h-fit bg-[#595e48] md:p-10 px-6 py-14 -mt-2 z-20">
      <div className="lg:grid grid-cols-5 max-w-6xl m-auto h-full gap-10">
        <div className="flex flex-col justify-center items-start col-span-2">
          <h2 className="text-white pb-4">Join The Club</h2>
          <h5 className="text-white">
            Become a True Insider – Join for news, special offers & more.
          </h5>
        </div>

        <div className="col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid flex flex-col grid-cols-2 gap-4">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">First Name</FormLabel>
                    <FormControl>
                      <Input className="bg-white rounded-2xl" placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Last Name</FormLabel>
                    <FormControl>
                      <Input className="bg-white rounded-2xl" placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input className="bg-white rounded-2xl" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormItem>
                <FormLabel className="text-white">Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputProps={{
                      name: "phoneNumber",
                      required: true,
                      className: "w-full rounded-2xl py-3 px-4 pl-14 bg-white overflow-hidden",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              {/* Preferred Location */}
              <FormField
                control={form.control}
                name="preferredLocation"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-white">Location</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="text-center">
                          <SelectValue className="text-center flex justify-center items-center" placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-york">New York</SelectItem>
                          <SelectItem value="los-angeles">Los Angeles</SelectItem>
                          <SelectItem value="chicago">Chicago</SelectItem>
                          <SelectItem value="houston">Houston</SelectItem>
                          <SelectItem value="miami">Miami</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2">
                <p className="text-gray-200 text-sm">
                  By submitting this form and signing up for email marketing and texts, you consent to receive marketing messages (e.g. promos, cart reminders) from Soy and Spice at the number & email provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Privacy Policy & Terms.
                </p>
              </div>

              <div className="col-span-2">
                <Button disabled type="submit" className="bg-white hover:bg-white/80 text-black rounded-full px-8">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
