"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const categories = ["Appetizer", "Main Course", "Dessert", "Drink"];
const kitchens = ["Italian", "Chinese", "Indian", "Mexican"];
const statuses = ["active", "inactive"];
const menuTypes = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "glutenFree", label: "Gluten-Free" },
  { id: "halal", label: "Halal" },
];

const FormSchema = z.object({
  category: z.string().nonempty({ message: "Please select a category." }),
  kitchen: z.string().nonempty({ message: "Please select a kitchen." }),
  foodName: z.string().min(2, { message: "Food name must be at least 2 characters." }),
  components: z.string().optional(),
  notes: z.string().optional(),
  description: z.string().optional(),
  image: z.any().refine(
    (file) => file instanceof File || typeof file === "string",
    { message: "Please upload a valid image." }
  ),
  vat: z.string().min(0, { message: "VAT must be a positive number." }),
  cookingTime: z.string().min(1, { message: "Cooking time is required." }),
  menuType: z.array(z.string()).min(1, { message: "Select at least one menu type." }),
  status: z.string().nonempty({ message: "Please select a status." }),
});

export default function AddFoodForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
      vat: "",
      cookingTime: "",
      menuType: [],
      status: "active",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Submitted data:", data);
    if (data.image instanceof File) {
      console.log("Uploaded File:", data.image);
    } else {
      console.log("Image URL:", data.image);
    }
  }

  return (
    <div className="border">
      <div>
        <div className="border py-4 px-2">
          <h4>Add Food</h4>
        </div>
        <div className="p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                {/* Category */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="col-span-2">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Kitchen */}
                <FormField
                  control={form.control}
                  name="kitchen"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Kitchen</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="col-span-2">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a kitchen" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {kitchens.map((kitchen) => (
                            <SelectItem key={kitchen} value={kitchen}>
                              {kitchen}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Food Name */}
                <FormField
                  control={form.control}
                  name="foodName"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Food Name</FormLabel>
                      <FormControl className="col-span-2">
                        <Input placeholder="Enter food name" {...field} />
                      </FormControl>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Components */}
                <FormField
                  control={form.control}
                  name="components"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Components</FormLabel>
                      <FormControl className="col-span-2">
                        <Input placeholder="Enter components" {...field} />
                      </FormControl>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Notes */}
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Notes</FormLabel>
                      <FormControl className="col-span-2">
                        <Input placeholder="Enter notes" {...field} />
                      </FormControl>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Description</FormLabel>
                      <FormControl className="col-span-2">
                        <Input placeholder="Enter description" {...field} />
                      </FormControl>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Image */}
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Upload Image</FormLabel>
                      <FormControl className="col-span-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = () => setPreviewImage(reader.result as string);
                              reader.readAsDataURL(file);
                            }
                            field.onChange(file);
                          }}
                        />
                      </FormControl>
                      {previewImage && (
                        <div className="mt-2">
                          <img src={previewImage} alt="Preview" className="w-full h-auto max-h-40 object-cover" />
                        </div>
                      )}
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


              <div className="space-y-2">
                {/* VAT */}
                <FormField
                  control={form.control}
                  name="vat"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">VAT</FormLabel>
                      <FormControl className="col-span-2">
                        <Input
                          type="number"
                          placeholder="Enter VAT amount"
                          {...field}
                        />
                      </FormControl>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Cooking Time */}
                <FormField
                  control={form.control}
                  name="cookingTime"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Cooking Time</FormLabel>
                      <FormControl className="col-span-2">
                        <Input placeholder="Enter cooking time" {...field} />
                      </FormControl>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Menu Type */}
                <FormField
                  control={form.control}
                  name="menuType"
                  render={() => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Menu Type</FormLabel>
                      <div className="col-span-2 grid grid-cols-3 justify-end items-start gap-3">
                      {menuTypes.map((menu) => (
                        <FormField
                          key={menu.id}
                          control={form.control}
                          name="menuType"
                          render={({ field }) => (
                            <FormItem className="flex justify-start items-end gap-3">
                              <Checkbox
                                checked={field.value.includes(menu.id)}
                                onCheckedChange={(checked) => {
                                  const updated = checked
                                    ? [...field.value, menu.id]
                                    : field.value.filter((value) => value !== menu.id);
                                  field.onChange(updated);
                                }}
                              />
                              <FormLabel className="font-semibold">{menu.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                      </div>
                      
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-3 justify-center items-center">
                      <FormLabel className="font-semibold">Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="col-span-2">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div></div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Submit Button */}
              <div className="col-span-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
