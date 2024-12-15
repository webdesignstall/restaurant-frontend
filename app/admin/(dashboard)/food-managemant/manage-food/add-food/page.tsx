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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  category: z.string().min(2, { message: "Category must be at least 2 characters." }),
  kitchen: z.string().min(2, { message: "Kitchen must be at least 2 characters." }),
  foodName: z.string().min(2, { message: "Food name must be at least 2 characters." }),
  components: z.string().optional(),
  notes: z.string().optional(),
  description: z.string().optional(),
  image: z.string().url({ message: "Please enter a valid URL for the image." }),
  vat: z.number().min(0, { message: "VAT must be a positive number." }),
  cookingTime: z.string().min(1, { message: "Cooking time is required." }),
  menuType: z.string().min(2, { message: "Menu type must be at least 2 characters." }),
  status: z.enum(["active", "inactive"], { errorMap: () => ({ message: "Status must be either active or inactive." }) }),
})

export default function AddFoodForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: "",
      kitchen: "",
      foodName: "",
      components: "",
      notes: "",
      description: "",
      image: "",
      vat: 0,
      cookingTime: "",
      menuType: "",
      status: "active",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Enter category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Kitchen */}
        <FormField
          control={form.control}
          name="kitchen"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitchen</FormLabel>
              <FormControl>
                <Input placeholder="Enter kitchen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Food Name */}
        <FormField
          control={form.control}
          name="foodName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Food Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter food name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Components */}
        <FormField
          control={form.control}
          name="components"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Components</FormLabel>
              <FormControl>
                <Input placeholder="Enter components" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notes */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Input placeholder="Enter notes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="Enter image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* VAT */}
        <FormField
          control={form.control}
          name="vat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>VAT</FormLabel>
              <FormControl>
                <Input placeholder="Enter VAT percentage" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cooking Time */}
        <FormField
          control={form.control}
          name="cookingTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cooking Time</FormLabel>
              <FormControl>
                <Input placeholder="Enter cooking time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Menu Type */}
        <FormField
          control={form.control}
          name="menuType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Menu Type</FormLabel>
              <FormControl>
                <Input placeholder="Enter menu type" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Status */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
