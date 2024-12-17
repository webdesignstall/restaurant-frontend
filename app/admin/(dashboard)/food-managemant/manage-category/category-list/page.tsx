'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from "axios";
import { toast } from 'sonner'
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link"

/*const categories = [
  {
    id: "1",
    name: "Electronics",
    parent: "None",
    status: "Active",
  },
  {
    id: "2",
    name: "Fashion",
    parent: "None",
    status: "Active",
  },
  {
    id: "3",
    name: "Home Appliances",
    parent: "Electronics",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Mobiles",
    parent: "Electronics",
    status: "Active",
  },
  {
    id: "5",
    name: "Laptops",
    parent: "Electronics",
    status: "Active",
  },
]*/


export default function CategoryList() {

  const [categories, setCategories] = useState([])

  const deleteCategory = async (id: number) => {
    try {
      if (!id || typeof id !== 'number') {
        toast.error('Error', {
          description: 'A valid category ID is required.',
        });
        return;
      }

      const response = await axios.delete('/api/admin/food-category', {
        data: { id },
      });

      if (response.status === 200) {
        toast.success('Success', {
          description: response.statusText || 'Category deleted successfully!',
        });
        await fetchCategories()
      } else {
        toast.error('Error', {
          description: response.data.error || 'Failed to delete the category.',
        });
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // Handle specific error responses
        if (error.response) {
          const { status, data } = error.response;

          switch (status) {
            case 400:
              toast.error('Error', {
                description: data.error || 'Invalid request data.',
              });
              break;
            case 403:
              toast.error('Error', {
                description: data.message || 'You are not authorized to perform this action.',
              });
              break;
            case 404:
              toast.error('Error', {
                description: data.error || 'Category not found.',
              });
              break;
            case 409:
              toast.error('Error', {
                description: data.error || 'Cannot delete this category due to dependent records.',
              });
              break;
            case 500:
              toast.error('Error', {
                description: data.error || 'An unexpected server error occurred.',
              });
              break;
            default:
              toast.error('Error', {
                description: 'An unexpected error occurred.',
              });
          }
        }
      } else {
        // Handle generic errors
        toast.error('Error', {
          description: 'An error occurred while deleting the category.',
        });
      }
    }
  }

  const fetchCategories = async ()=> {
    try {
      const {data} = await axios.get('/api/admin/food-category')
      setCategories(data)
    }catch (e) {

    }
  }

  useEffect(() => {
    fetchCategories().catch()
  }, [])

  return (
    <Table className=" mt-6 border">
      <TableCaption>A list of all categories in the system.</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          {/*<TableHead>Parent Category</TableHead>*/}
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.map((category: any) => (
          <TableRow key={category?.id}>
            <TableCell className="font-medium">{category?.id}</TableCell>
            <TableCell>
              <img alt='category' src={category?.image} width={80} height={60}/>
            </TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.status}</TableCell>
            <TableCell>
              <Button className='mr-4' variant="destructive" onClick={() => deleteCategory(category.id)}>Delete</Button>
              <Link href={`/admin/food-managemant/manage-category/add-category?id=${category.id}`}>
                <Button className='bg-yellow-400 text-black hover:bg-yellow-500'>Edit</Button>
              </Link>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="text-center font-semibold">
            Total Categories: {categories.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
