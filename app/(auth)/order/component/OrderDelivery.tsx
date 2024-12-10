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
const DeliveryFormSchema = z.object({
    deliveryAddress: z.string().min(5, {
        message: "Delivery address must be at least 5 characters.",
    }),
    streetAddress: z.string().min(5, {
        message: "Street or building address must be at least 5 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    zipCode: z
        .string()
        .regex(/^\d{5}$/, { message: "ZIP Code must be exactly 5 digits." }),
})

export default function DeliveryForm() {
    const form = useForm<z.infer<typeof DeliveryFormSchema>>({
        resolver: zodResolver(DeliveryFormSchema),
        defaultValues: {
            deliveryAddress: "",
            streetAddress: "",
            city: "",
            zipCode: "",
        },
    })

    function onSubmit(data: z.infer<typeof DeliveryFormSchema>) {
        console.log("Delivery Form Submitted", data)
    }

    const isFormValid = form.formState.isValid

    return (
        <Form {...form}>
            <form className="mt-12 grid grid-cols-2 gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="deliveryAddress"
                    render={({ field }) => (
                        <FormItem className="col-span-2">
                            <FormControl>
                                <Input
                                    className={cn("py-8 px-6")}
                                    placeholder="Delivery Address"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                        <FormItem className="col-span-2">
                            <FormControl>
                                <Input
                                    className={cn("py-8 px-6")}
                                    placeholder="Street or Building Address"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    className={cn("py-8 px-6")}
                                    placeholder="City"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    className={cn("py-8 px-6")}
                                    placeholder="ZIP Code"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="py-8 w-full col-span-2">
                    {isFormValid && (
                        <Button
                            size="lg"
                            className="w-full py-8 rounded-full text flex text-xl "
                            type="submit"
                        >
                            Submit Delivery Info
                        </Button>
                    )}
                </div>
            </form>
            <div>
                <p className="text-center">
                Share your location to find a True near you
                </p>
            </div>
        </Form>
    )
}
