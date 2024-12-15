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

const foods = [
  {
    id: "1",
    name: "Pizza",
    category: "Fast Food",
    price: "$12.99",
    status: "Available",
  },
  {
    id: "2",
    name: "Burger",
    category: "Fast Food",
    price: "$8.99",
    status: "Available",
  },
  {
    id: "3",
    name: "Pasta",
    category: "Italian",
    price: "$10.50",
    status: "Unavailable",
  },
  {
    id: "4",
    name: "Sushi",
    category: "Japanese",
    price: "$15.00",
    status: "Available",
  },
  {
    id: "5",
    name: "Salad",
    category: "Healthy",
    price: "$6.99",
    status: "Available",
  },
]

export default function FoodList() {
  return (
    <Table className="mt-6 border">
      <TableCaption>A list of all food items in the system.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {foods.map((food) => (
          <TableRow key={food.id}>
            <TableCell className="font-medium">{food.id}</TableCell>
            <TableCell>{food.name}</TableCell>
            <TableCell>{food.category}</TableCell>
            <TableCell className="text-right">{food.price}</TableCell>
            <TableCell className="text-right">{food.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="text-center font-semibold">
            Total Foods: {foods.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
