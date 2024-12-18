'use client';

import { Table, Button, Image, Space } from 'antd';

const foods = [
  {
    id: "1",
    image: "pizza.jpg",
    category: "Fast Food",
    foodName: "Pizza",
    components: "Cheese, Tomato, Crust",
    vat: "5%",
    status: "Active",
  },
  {
    id: "2",
    image: "burger.jpg",
    category: "Fast Food",
    foodName: "Burger",
    components: "Bun, Patty, Lettuce",
    vat: "5%",
    status: "Active",
  },
  {
    id: "3",
    image: "pasta.jpg",
    category: "Italian",
    foodName: "Pasta",
    components: "Penne, Sauce, Cheese",
    vat: "10%",
    status: "Inactive",
  },
  {
    id: "4",
    image: "sushi.jpg",
    category: "Japanese",
    foodName: "Sushi",
    components: "Rice, Fish, Seaweed",
    vat: "15%",
    status: "Active",
  },
  {
    id: "5",
    image: "salad.jpg",
    category: "Healthy",
    foodName: "Salad",
    components: "Lettuce, Tomato, Cucumber",
    vat: "5%",
    status: "Active",
  },
];

export default function FoodTable() {
  const handleEdit = (id: string) => {
    console.log(`Editing food with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting food with ID: ${id}`);
  };

  const columns:any = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => <Image src={image} alt="Food Image" width={60} height={60} />,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Food Name',
      dataIndex: 'foodName',
      key: 'foodName',
    },
    {
      title: 'Components',
      dataIndex: 'components',
      key: 'components',
    },
    {
      title: 'VAT',
      dataIndex: 'vat',
      key: 'vat',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status: string) => (
        <span
          className={
            status === 'Active'
              ? 'text-green-600 font-semibold'
              : 'text-red-600 font-semibold'
          }
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_: any, record: { id: string }) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={foods}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 5 }}
      bordered
      title={() => 'Food List'}
      footer={() => `Total Foods: ${foods.length}`}
    />
  );
}
