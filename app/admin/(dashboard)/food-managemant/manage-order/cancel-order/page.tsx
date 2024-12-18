'use client';

import { Table, Button, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

interface Order {
  sl: number;
  orderId: string;
  customerName: string;
  customerType: string;
  waiter: string;
  table: string;
  orderDate: string;
  amount: string;
  action: string;
}

const orders: Order[] = [
  {
    sl: 1,
    orderId: 'ORD001',
    customerName: 'John Doe',
    customerType: 'Regular',
    waiter: 'Alice',
    table: 'T1',
    orderDate: '2024-12-10',
    amount: '$120.00',
    action: 'Cancel',
  },
  {
    sl: 2,
    orderId: 'ORD002',
    customerName: 'Jane Smith',
    customerType: 'VIP',
    waiter: 'Bob',
    table: 'T3',
    orderDate: '2024-12-11',
    amount: '$200.00',
    action: 'Cancel',
  },
  {
    sl: 3,
    orderId: 'ORD003',
    customerName: 'Michael Brown',
    customerType: 'Regular',
    waiter: 'Alice',
    table: 'T2',
    orderDate: '2024-12-09',
    amount: '$0.00',
    action: 'Cancel',
  },
  {
    sl: 4,
    orderId: 'ORD004',
    customerName: 'Emily Davis',
    customerType: 'Regular',
    waiter: 'Charlie',
    table: 'T4',
    orderDate: '2024-12-12',
    amount: '$150.00',
    action: 'Cancel',
  },
  {
    sl: 5,
    orderId: 'ORD005',
    customerName: 'William Wilson',
    customerType: 'VIP',
    waiter: 'Alice',
    table: 'T5',
    orderDate: '2024-12-13',
    amount: '$80.00',
    action: 'Cancel',
  },
];

export default function CancelOrderList() {
  const columns: ColumnsType<Order> = [
    {
      title: 'Sl',
      dataIndex: 'sl',
      key: 'sl',
      align: 'center',
      width: 50,
    },
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Customer Type',
      dataIndex: 'customerType',
      key: 'customerType',
      render: (type) => (
        <Text style={{ color: type === 'VIP' ? 'gold' : 'black' }}>{type}</Text>
      ),
    },
    {
      title: 'Waiter',
      dataIndex: 'waiter',
      key: 'waiter',
    },
    {
      title: 'Table',
      dataIndex: 'table',
      key: 'table',
      align: 'center',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      align: 'center',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (action) => (
        <Button type="link" danger>
          {action}
        </Button>
      ),
    },
  ];

  const totalAmount = orders.reduce((sum, order) => {
    const amount = parseFloat(order.amount.replace('$', ''));
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);

  return (
    <div className="py-6">
      <Typography.Title level={4}>Cancel Order List</Typography.Title>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="orderId"
        pagination={{ pageSize: 5 }}
        footer={() => (
          <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
            Total: ${totalAmount.toFixed(2)}
          </div>
        )}
        bordered
      />
    </div>
  );
}
