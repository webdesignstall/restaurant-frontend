import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    sl: 1,
    invoiceNo: "ORD001",
    customerName: "John Doe",
    waiter: "Alice",
    table: "T1",
    state: "Served",
    orderDate: "2024-12-10",
    amount: "$120.00",
  },
  {
    sl: 2,
    invoiceNo: "ORD002",
    customerName: "Jane Smith",
    waiter: "Bob",
    table: "T3",
    state: "Pending",
    orderDate: "2024-12-11",
    amount: "$200.00",
  },
  {
    sl: 3,
    invoiceNo: "ORD003",
    customerName: "Michael Brown",
    waiter: "Alice",
    table: "T2",
    state: "Cancelled",
    orderDate: "2024-12-09",
    amount: "$0.00",
  },
  {
    sl: 4,
    invoiceNo: "ORD004",
    customerName: "Emily Davis",
    waiter: "Charlie",
    table: "T4",
    state: "Served",
    orderDate: "2024-12-12",
    amount: "$150.00",
  },
  {
    sl: 5,
    invoiceNo: "ORD005",
    customerName: "William Wilson",
    waiter: "Alice",
    table: "T5",
    state: "Pending",
    orderDate: "2024-12-13",
    amount: "$80.00",
  },
];

export default function OrderList() {
  return (
<div>
  <div>
    <div>
      <div className="py-6">
        <p className="text-xl font-semibold">Order List</p>
      </div>
      <div>
      <Table>
      <TableCaption>A list of recent orders.</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="w-[50px]">Sl</TableHead>
          <TableHead>Invoice No</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Waiter</TableHead>
          <TableHead>Table</TableHead>
          <TableHead>State</TableHead>
          <TableHead>Order Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.invoiceNo}>
            <TableCell>{order.sl}</TableCell>
            <TableCell className="font-medium">{order.invoiceNo}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.waiter}</TableCell>
            <TableCell>{order.table}</TableCell>
            <TableCell>{order.state}</TableCell>
            <TableCell>{order.orderDate}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7}>Total</TableCell>
          <TableCell className="text-right">$550.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>
    </div>
  </div>
</div>
  );
}
