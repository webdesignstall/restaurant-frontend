import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: 'ORD-001',
      orderId: 'ORD-2024-0001',
      customerName: 'John Doe',
      customerType: 'Regular',
      waiter: 'Alice Johnson',
      table: 4,
      orderDate: '2024-12-15',
      amount: 120.50,
      action: 'Pending Approval',
    },
    {
      id: 'ORD-002',
      orderId: 'ORD-2024-0002',
      customerName: 'Jane Smith',
      customerType: 'VIP',
      waiter: 'Robert Brown',
      table: 8,
      orderDate: '2024-12-16',
      amount: 250.00,
      action: 'Pending Approval',
    },
    {
      id: 'ORD-003',
      orderId: 'ORD-2024-0003',
      customerName: 'Michael Johnson',
      customerType: 'Regular',
      waiter: 'David Wilson',
      table: 10,
      orderDate: '2024-12-16',
      amount: 90.00,
      action: 'Pending Approval',
    },
    {
      id: 'ORD-004',
      orderId: 'ORD-2024-0004',
      customerName: 'Emily Davis',
      customerType: 'Guest',
      waiter: 'Chris Evans',
      table: 2,
      orderDate: '2024-12-14',
      amount: 45.25,
      action: 'Pending Approval',
    },
    {
      id: 'ORD-005',
      orderId: 'ORD-2024-0005',
      customerName: 'Sophia Martinez',
      customerType: 'VIP',
      waiter: 'Olivia Thompson',
      table: 6,
      orderDate: '2024-12-14',
      amount: 300.75,
      action: 'Pending Approval',
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 max-w-xs lg:max-w-5xl 2xl:max-w-full">
      <div className="">
        <p className="text-2xl font-semibold">Pending Order</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
