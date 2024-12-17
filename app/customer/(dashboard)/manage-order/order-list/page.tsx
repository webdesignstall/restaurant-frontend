import { OrderList, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<OrderList[]> {
  // Fetch data from your API here.
  return [
    {
      id: 'INV-001',
      invoiceNo: 'INV-2024-0001',
      customerName: 'John Doe',
      waiter: 'Alice Johnson',
      table: 12,
      status: 'completed',
      orderDate: '2024-06-17',
      amount: 150.75,
    },
    {
      id: 'INV-002',
      invoiceNo: 'INV-2024-0002',
      customerName: 'Jane Smith',
      waiter: 'Robert Brown',
      table: 5,
      status: 'in progress',
      orderDate: '2024-06-17',
      amount: 98.50,
    },
    {
      id: 'INV-003',
      invoiceNo: 'INV-2024-0003',
      customerName: 'Michael Lee',
      waiter: 'David Wilson',
      table: 8,
      status: 'pending',
      orderDate: '2024-06-16',
      amount: 45.00,
    },
    {
      id: 'INV-004',
      invoiceNo: 'INV-2024-0004',
      customerName: 'Emily Davis',
      waiter: 'Chris Evans',
      table: 3,
      status: 'completed',
      orderDate: '2024-06-15',
      amount: 210.30,
    },
    {
      id: 'INV-005',
      invoiceNo: 'INV-2024-0005',
      customerName: 'Sophia Martinez',
      waiter: 'Olivia Thompson',
      table: 7,
      status: 'completed',
      orderDate: '2024-06-15',
      amount: 320.00,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 max-w-xs lg:max-w-5xl 2xl:max-w-full">
      <div className="">
        <p className="text-2xl font-semibold">Order List</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
