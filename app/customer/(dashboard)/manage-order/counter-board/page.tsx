import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // Adjust the path to your UI components
import { Badge } from "@/components/ui/badge";

const orders = [
    {
        tableNumber: "T01",
        orderNumber: "ORD001",
        orderTime: "12:00 PM",
        remainingTime: "10 mins",
        status: "Preparing",
    },
    {
        tableNumber: "T02",
        orderNumber: "ORD002",
        orderTime: "12:15 PM",
        remainingTime: "5 mins",
        status: "Serving",
    },
    {
        tableNumber: "T03",
        orderNumber: "ORD003",
        orderTime: "12:30 PM",
        remainingTime: "15 mins",
        status: "Pending",
    },
    {
        tableNumber: "T04",
        orderNumber: "ORD004",
        orderTime: "12:45 PM",
        remainingTime: "0 mins",
        status: "Completed",
    },
    {
        tableNumber: "T05",
        orderNumber: "ORD005",
        orderTime: "1:00 PM",
        remainingTime: "20 mins",
        status: "Preparing",
    },
];

export default function CustomerOrderList() {
    return (
        <div className="overflow-x-auto w-full container mx-auto py-10 max-w-xs lg:max-w-5xl 2xl:max-w-full">
            <div>
                <div>
                    <div className="py-4 w-full">
                        <p className="text-center lg:text-2xl text-xl font-semibold">Order Time Countdown Board</p>
                    </div>
                    <div>
                        <Table>
                            <TableCaption>A list of recent customer orders.</TableCaption>
                            <TableHeader>
                                <TableRow className="bg-green-700 text-white hover:bg-green-700">
                                    <TableHead className="text-white">Table</TableHead>
                                    <TableHead className="text-white">Order Number</TableHead>
                                    <TableHead className="text-white">Order Time</TableHead>
                                    <TableHead className="text-white">Remaining Time</TableHead>
                                    <TableHead className="text-white">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.orderNumber}>
                                        <TableCell className="font-medium">{order.tableNumber}</TableCell>
                                        <TableCell>{order.orderNumber}</TableCell>
                                        <TableCell>{order.orderTime}</TableCell>
                                        <TableCell>{order.remainingTime}</TableCell>
                                        <TableCell >
                                            <Badge
                                                className={`text-white font-medium ${order.status === "Preparing"
                                                    ? "bg-yellow-500"
                                                    : order.status === "Serving"
                                                        ? "bg-blue-500"
                                                        : order.status === "Completed"
                                                            ? "bg-green-500"
                                                            : "bg-gray-500"
                                                    }`}
                                            >
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={4} className="font-medium">
                                        Total Orders
                                    </TableCell>
                                    <TableCell className="text-right font-medium">
                                        {orders.length}
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}
