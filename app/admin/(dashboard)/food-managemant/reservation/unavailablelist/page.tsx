'use client';

import React from "react";
import { Table, Button, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Title } = Typography;

// Define the data type for unavailable dates
interface UnavailableDate {
  id: number;
  date: string;
  time: string;
}

const unavailableDates: UnavailableDate[] = [
  { id: 1, date: "2024-12-20", time: "12:00 PM - 4:00 PM" },
  { id: 2, date: "2024-12-21", time: "10:00 AM - 2:00 PM" },
  { id: 3, date: "2024-12-22", time: "All Day" },
];

const UnavailableList: React.FC = () => {
  // Define table columns
  const columns: ColumnsType<UnavailableDate> = [
    {
      title: "Sl",
      key: "index",
      render: (_, __, index) => index + 1,
      width: 50,
      align: "center",
    },
    {
      title: "Unavailable Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Available Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="default" size="small" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      ),
      align: "center",
    },
  ];

  // Edit button handler
  const handleEdit = (record: UnavailableDate) => {
    console.log("Editing:", record);
  };

  return (
    <div className="py-6">
      <Title level={4}>Unavailable List</Title>
      <Table
        dataSource={unavailableDates}
        columns={columns}
        rowKey="id"
        pagination={false}
        bordered
        footer={() => (
          <div style={{ textAlign: "right", fontWeight: "bold" }}>
            Total Unavailable Dates: {unavailableDates.length}
          </div>
        )}
      />
    </div>
  );
};

export default UnavailableList;
