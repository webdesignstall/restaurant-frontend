'use client';

import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

const orders = [
  {
    sl: 1,
    invoiceNo: "ORD001",
    customerName: "John Doe",
    waiter: "Alice",
    table: "T1",
    state: "Served",
    orderDate: "2024-12-10",
    amount: 120.0,
  },
  {
    sl: 2,
    invoiceNo: "ORD002",
    customerName: "Jane Smith",
    waiter: "Bob",
    table: "T3",
    state: "Pending",
    orderDate: "2024-12-11",
    amount: 200.0,
  },
  {
    sl: 3,
    invoiceNo: "ORD003",
    customerName: "Michael Brown",
    waiter: "Alice",
    table: "T2",
    state: "Cancelled",
    orderDate: "2024-12-09",
    amount: 0.0,
  },
  {
    sl: 4,
    invoiceNo: "ORD004",
    customerName: "Emily Davis",
    waiter: "Charlie",
    table: "T4",
    state: "Served",
    orderDate: "2024-12-12",
    amount: 150.0,
  },
  {
    sl: 5,
    invoiceNo: "ORD005",
    customerName: "William Wilson",
    waiter: "Alice",
    table: "T5",
    state: "Pending",
    orderDate: "2024-12-13",
    amount: 80.0,
  },
];

export default function OrderList() {
  const columns: ColumnsType<typeof orders[0]> = [
    {
      title: "Sl",
      dataIndex: "sl",
      key: "sl",
      align: "center",
      width: 50,
    },
    {
      title: "Invoice No",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Waiter",
      dataIndex: "waiter",
      key: "waiter",
    },
    {
      title: "Table",
      dataIndex: "table",
      key: "table",
      align: "center",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      render: (state: string) => {
        const stateColor =
          state === "Served"
            ? "green"
            : state === "Pending"
            ? "orange"
            : "red";
        return <Text style={{ color: stateColor }}>{state}</Text>;
      },
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
  ];

  const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="py-6">
      <Typography.Title level={4}>Order List</Typography.Title>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="invoiceNo"
        pagination={{ pageSize: 5 }}
        footer={() => (
          <div style={{ textAlign: "right", fontWeight: "bold" }}>
            Total: ${totalAmount.toFixed(2)}
          </div>
        )}
        bordered
      />
    </div>
  );
}
