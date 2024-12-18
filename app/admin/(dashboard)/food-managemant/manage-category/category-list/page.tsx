'use client'
import { useEffect, useState } from "react";
import { Table, Button, message, Image } from "antd";
import axios from "axios";
import Link from "next/link";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/admin/food-category');
      setCategories(data);
    } catch (e) {
      message.error("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: number) => {
    try {
      const response = await axios.delete('/api/admin/food-category', {
        data: { id },
      });

      if (response.status === 200) {
        message.success("Category deleted successfully!");
        fetchCategories();
      } else {
        message.error(response.data.error || "Failed to delete the category.");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status, data } = error.response;

          switch (status) {
            case 400:
              message.error(data.error || "Invalid request data.");
              break;
            case 403:
              message.error(data.message || "You are not authorized.");
              break;
            case 404:
              message.error(data.error || "Category not found.");
              break;
            case 409:
              message.error(data.error || "Cannot delete this category.");
              break;
            case 500:
              message.error(data.error || "Server error.");
              break;
            default:
              message.error("Unexpected error.");
          }
        }
      } else {
        message.error("An error occurred while deleting the category.");
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image src={image} alt="category" width={80} height={60} />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div>
          <Button
            type="primary"
            danger
            onClick={() => deleteCategory(record.id)}
            style={{ marginRight: 8 }}
          >
            Delete
          </Button>
          <Link href={`/admin/food-managemant/manage-category/add-category?id=${record.id}`}>
            <Button type="default" style={{ backgroundColor: "#FFC107", color: "#000" }}>
              Edit
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <Table
      dataSource={categories}
      columns={columns}
      rowKey="id"
      loading={loading}
      pagination={{ pageSize: 10 }}
      bordered
      title={() => "Category List"}
      footer={() => `Total Categories: ${categories.length}`}
    />
  );
}
