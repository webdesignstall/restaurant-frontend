"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const foods = [
  {
    id: "1",
    image: "pizza.jpg",
    category: "Fast Food",
    foodName: "Pizza",
    components: "Cheese, Tomato, Crust",
    vat: "5%",
    status: "Active",
  },
  {
    id: "2",
    image: "burger.jpg",
    category: "Fast Food",
    foodName: "Burger",
    components: "Bun, Patty, Lettuce",
    vat: "5%",
    status: "Active",
  },
  {
    id: "3",
    image: "pasta.jpg",
    category: "Italian",
    foodName: "Pasta",
    components: "Penne, Sauce, Cheese",
    vat: "10%",
    status: "Inactive",
  },
  {
    id: "4",
    image: "sushi.jpg",
    category: "Japanese",
    foodName: "Sushi",
    components: "Rice, Fish, Seaweed",
    vat: "15%",
    status: "Active",
  },
  {
    id: "5",
    image: "salad.jpg",
    category: "Healthy",
    foodName: "Salad",
    components: "Lettuce, Tomato, Cucumber",
    vat: "5%",
    status: "Active",
  },
];

export default function FoodTable() {
  return (
    <Table className="mt-6 border">
      <TableCaption>A list of all food items in the system.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Image</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Food Name</TableHead>
          <TableHead>Component</TableHead>
          <TableHead>VAT</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {foods.map((food) => (
          <TableRow key={food.id}>
            <TableCell>
              <img src={food.image} alt={food.foodName} className="w-12 h-12 object-cover rounded" />
            </TableCell>
            <TableCell>{food.category}</TableCell>
            <TableCell>{food.foodName}</TableCell>
            <TableCell>{food.components}</TableCell>
            <TableCell>{food.vat}</TableCell>
            <TableCell>{food.status}</TableCell>
            <TableCell>
              <button className="text-blue-500 hover:underline">Edit</button> | <button className="text-red-500 hover:underline">Delete</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7} className="text-center font-semibold">
            Total Foods: {foods.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
