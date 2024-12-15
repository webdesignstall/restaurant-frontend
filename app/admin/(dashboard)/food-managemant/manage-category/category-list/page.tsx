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

const categories = [
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
]

export default function CategoryList() {
  return (
    <Table className=" mt-6 border">
      <TableCaption>A list of all categories in the system.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Parent Category</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell className="font-medium">{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.parent}</TableCell>
            <TableCell className="text-right">{category.status}</TableCell>
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
