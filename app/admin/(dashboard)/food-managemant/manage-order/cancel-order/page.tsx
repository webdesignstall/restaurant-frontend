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
        orderId: "ORD001",
        customerName: "John Doe",
        customerType: "Regular",
        waiter: "Alice",
        table: "T1",
        orderDate: "2024-12-10",
        amount: "$120.00",
        action: "Cancel"
    },
    {
        sl: 2,
        orderId: "ORD002",
        customerName: "Jane Smith",
        customerType: "VIP",
        waiter: "Bob",
        table: "T3",
        orderDate: "2024-12-11",
        amount: "$200.00",
        action: "Cancel"
    },
    {
        sl: 3,
        orderId: "ORD003",
        customerName: "Michael Brown",
        customerType: "Regular",
        waiter: "Alice",
        table: "T2",
        orderDate: "2024-12-09",
        amount: "$0.00",
        action: "Cancel"
    },
    {
        sl: 4,
        orderId: "ORD004",
        customerName: "Emily Davis",
        customerType: "Regular",
        waiter: "Charlie",
        table: "T4",
        orderDate: "2024-12-12",
        amount: "$150.00",
        action: "Cancel"
    },
    {
        sl: 5,
        orderId: "ORD005",
        customerName: "William Wilson",
        customerType: "VIP",
        waiter: "Alice",
        table: "T5",
        orderDate: "2024-12-13",
        amount: "$80.00",
        action: "Cancel"
    },
];

export default function CancelOrderList() {
    return (
        <div>
            <div>
                <div>
                    <div className="py-6">
                        <p className="text-xl font-semibold">Cancel Order List</p>
                    </div>
                    <div>
                        <Table>
                            <TableCaption>A list of cancelable orders.</TableCaption>
                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead className="w-[50px]">Sl</TableHead>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Customer Name</TableHead>
                                    <TableHead>Customer Type</TableHead>
                                    <TableHead>Waiter</TableHead>
                                    <TableHead>Table</TableHead>
                                    <TableHead>Order Date</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.orderId}>
                                        <TableCell>{order.sl}</TableCell>
                                        <TableCell className="font-medium">{order.orderId}</TableCell>
                                        <TableCell>{order.customerName}</TableCell>
                                        <TableCell>{order.customerType}</TableCell>
                                        <TableCell>{order.waiter}</TableCell>
                                        <TableCell>{order.table}</TableCell>
                                        <TableCell>{order.orderDate}</TableCell>
                                        <TableCell className="text-right">{order.amount}</TableCell>
                                        <TableCell>
                                            <button className="text-red-500 hover:underline">
                                                {order.action}
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={7}>Total</TableCell>
                                    <TableCell className="text-right">$550.00</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}
