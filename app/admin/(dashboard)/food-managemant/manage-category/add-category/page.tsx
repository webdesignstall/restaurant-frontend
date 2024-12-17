"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {useEffect, useState} from "react"
import { z } from "zod"
// import { toast } from "react-toastify";
import { toast } from 'sonner'


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
import axios from "axios";
import {Loader} from "lucide-react";
import {useSearchParams} from "next/navigation";

const FormSchema = z.object({
    id: z.number().nullable().optional(),
    name: z.string().min(2, {
        message: "Category name must be at least 2 characters.",
    }),
    parentId: z.string().nullable().default('none'),
    image: z.any().refine((file) => file instanceof File || typeof file === "string", {
        message: "Please upload a valid image file.",
    }),
    status: z.enum(['DRAFT', 'ACTIVE', 'INACTIVE'], {
        errorMap: () => ({ message: "Status must be Draft, Active And Inactive." }),
    }),
})

export default function AddCategoryForm() {
    const [imagePreview, setImagePreview] = useState(null)
    const [isLoading, setIsLoading] = useState(false) // Manage loader state
    const [categories, setCategories] = useState([])
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            parentId: null,
            image: "",
            status: "DRAFT",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        if (id){
            data.id = parseInt(id)
        }

        try {
            const response = await axios.post("/api/admin/food-category", data);
            toast.success("Success", {
                description: response?.statusText,
            });
        } catch (error: any) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                toast.error("Error", {
                    description: error.response.data.error || "Failed to create category.",
                });
            } else if (error.request) {
                console.error("Network Error:", error.request);
                toast.error("Error", {
                    description: "Network error. Please check your internet connection.",
                });
            } else {
                console.error("Error:", error.message);
                toast.error("Error", {
                    description: "An unexpected error occurred.",
                });
            }
        } finally {
            setIsLoading(false); // Stop loading state
        }
    }

    function handleImageChange(event: any) {
        const file = event.target.files[0]
        if (file) {
            form.setValue("image", file)
            const reader: any = new FileReader()
            reader.onload = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }


    const fetchCategory = async ()=> {
        try {
            const {data} = await axios.get(`/api/admin/food-category?id=${id}`);
            form.setValue('name', data?.name)
            form.setValue('image', data?.image)
            form.setValue('status', data?.status)
        }catch (e) {

        }
    }

    useEffect(() => {
        if (id){
            fetchCategory().catch()
        }

    }, [id]);

    return (
        <div className="border mt-6">
            <div className="border-b py-3 px-4 text-lg font-semibold">Add Category</div>
            <div className="p-4 sm:p-8 max-w-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        {/* Category Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-3 justify-center items-center">
                                    <FormLabel className="font-semibold">Category Name</FormLabel>
                                    <FormControl className="col-span-2">
                                        <Input placeholder="Enter category name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/*{
                            categories?.length > 0 && (
                                <FormField
                                    control={form.control}
                                    name="parentId"
                                    render={({ field }) => (
                                        <FormItem className="grid grid-cols-3 justify-center items-center">
                                            <FormLabel className="font-semibold">Parent Category</FormLabel>
                                             @ts-ignore
                                            <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                <FormControl className="col-span-2">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a parent category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        categories?.map(category => (
                                                            // @ts-ignore
                                                            <SelectItem value={category.id}>{category.name}</SelectItem>
                                                        ))
                                                    }

                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )

                        }*/}

                        {/* Image */}
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-3 justify-center items-center">
                                    <FormLabel className="font-semibold">Image</FormLabel>
                                    <div className="col-span-2">
                                        <FormControl>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(e)}
                                            />
                                        </FormControl>
                                        {imagePreview && (
                                            <div className="mt-2">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="h-32 w-32 object-cover rounded-md border"
                                                />
                                            </div>
                                        )}
                                    </div>
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
                                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                        <FormControl className="col-span-2">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="DRAFT">Draft</SelectItem>
                                            <SelectItem value="ACTIVE">Active</SelectItem>
                                            <SelectItem value="INACTIVE">Inactive</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button with Loader */}
                        {/* @ts-ignore */}
                        <Button type="submit" className="bg-primary">
                            {isLoading ? <Loader/> : 'Create' }
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

