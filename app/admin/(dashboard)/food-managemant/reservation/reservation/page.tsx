'use client';

import { Table, Typography, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;

// Define the Reservation interface for TypeScript
interface Reservation {
  sl: number;
  customerName: string;
  tableNo: number;
  noOfPeople: number;
  startTime: string;
  endTime: string;
  date: string;
  status: string;
  action: string;
}

// Sample reservation data
const reservations: Reservation[] = [
  {
    sl: 1,
    customerName: "John Doe",
    tableNo: 5,
    noOfPeople: 4,
    startTime: "6:00 PM",
    endTime: "8:00 PM",
    date: "2024-12-16",
    status: "Confirmed",
    action: "View Details",
  },
  {
    sl: 2,
    customerName: "Jane Smith",
    tableNo: 3,
    noOfPeople: 2,
    startTime: "7:00 PM",
    endTime: "9:00 PM",
    date: "2024-12-16",
    status: "Pending",
    action: "View Details",
  },
  {
    sl: 3,
    customerName: "Alice Brown",
    tableNo: 1,
    noOfPeople: 6,
    startTime: "5:30 PM",
    endTime: "7:30 PM",
    date: "2024-12-16",
    status: "Cancelled",
    action: "View Details",
  },
];

const ReservationTable: React.FC = () => {
  // Define table columns
  const columns: ColumnsType<Reservation> = [
    {
      title: "Sl",
      dataIndex: "sl",
      key: "sl",
      align: "center",
      width: 50,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Table No",
      dataIndex: "tableNo",
      key: "tableNo",
      align: "center",
    },
    {
      title: "No. of People",
      dataIndex: "noOfPeople",
      key: "noOfPeople",
      align: "center",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "";
        switch (status) {
          case "Confirmed":
            color = "green";
            break;
          case "Pending":
            color = "gold";
            break;
          case "Cancelled":
            color = "red";
            break;
          default:
            color = "blue";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => console.log(`View details for ${record.customerName}`)}>
          {record.action}
        </Button>
      ),
    },
  ];

  return (
    <div className="py-6">
      <Title level={4}>Reservation</Title>
      <Table
        dataSource={reservations}
        columns={columns}
        rowKey="sl"
        pagination={false}
        bordered
        footer={() => (
          <div style={{ textAlign: "right", fontWeight: "bold" }}>
            Total Reservations: {reservations.length}
          </div>
        )}
      />
    </div>
  );
};

export default ReservationTable;
