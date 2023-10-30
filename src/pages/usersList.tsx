import { UserAPI } from "@/services/users";
import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

type Props = {};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function UsersList({}: Props) {
  useEffect(() => {
    UserAPI.getUsers()
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "نام",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "سن",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "شماره تلفن ",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "ایمیل",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "آدرس",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: string, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "شرکت",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: string, record) => record.address.indexOf(value) === 0,
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div>UsersList</div>
      <div
        className="mx-16 "
        style={{
          direction: "rtl",
        }}
      >
        <Table
          className="text-white "
          rootClassName="bg-primary-1 border-b-2 border-b-solid"
          columns={columns}
          dataSource={data}
          onChange={onChange}
          //direction="rtl"
          rowClassName={(record: any, index) =>
            index % 2 == 0
              ? "bg-primary-2 text-white "
              : "bg-primary-1 text-white"
          }
        />
      </div>
    </div>
  );
}
