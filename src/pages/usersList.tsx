import { UserAPI } from "@/services/users";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import toast from "react-hot-toast";
import { User } from "@/@types/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { select } from "@/store/slices/selectedUserSlice";

type Props = {};

export default function UsersList({}: Props) {
  const [users, setUsers] = useState<User[] | null>(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    UserAPI.getUsers()
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        toast.error("Error Fetchig Users");
        console.log(err);
      });
  }, []);

  const deleteHandler = (user: User) => {
    dispatch(select(user));
    navigate("/edit-user");
  };
  const editHandler = (user: User) => {
    dispatch(select(user));
    navigate("/edit-user");
  };

  const columns: ColumnsType<User[]> = [
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
      sorter: (a, b) => +a.age - +b.age,
    },
    {
      title: "شماره تلفن ",
      dataIndex: "phoneNumber",
      defaultSortOrder: "descend",
      sorter: (a, b) => +a.phoneNumber - +b.phoneNumber,
    },
    {
      title: "ایمیل",
      dataIndex: "email",
      defaultSortOrder: "descend",
      //FIXME add this todo
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "آدرس",
      dataIndex: "street",
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
      dataIndex: "company",
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
      title: "دسترسی ها",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <>
          <button
            className="bg-red-700 mx-3 hover:bg-red-800 rounded-md px-2 py-1"
            onClick={() => {
              console.log("done");

              //toast.success(JSON.stringify(record));
              deleteHandler(record);
            }}
          >
            حذف
          </button>
          <button
            className="bg-sky-700 mx-3 hover:bg-sky-800 rounded-md px-2 py-1"
            onClick={() => {
              navigate("/edit-user");
              editHandler(record);

              //toast.success(JSON.stringify(record));
            }}
          >
            ویرایش
          </button>
        </>
      ),
    },
  ];

  const onChange: TableProps<User[]>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Breadcrumb
        className="text-white rtl mx-7"
        items={[
          {
            title: <a href="#">لیست کاربران</a>,
            onClick: () => {
              navigate("/");
            },
          },
        ]}
      />

      <div
        className="mx-16 mt-20"
        style={{
          direction: "rtl",
        }}
      >
        <Table
          onRow={(record: Record<any, any>, rowIndex: number | undefined) => {
            return {
              onClick: (event) => {
                toast.error(
                  "Please click on Actions to update/delete  \n \n " +
                    record.username
                );
              },
            };
          }}
          className="text-white "
          rootClassName="bg-primary-1 border-b-2  border-b-solid"
          columns={columns}
          // @ts-ignore
          dataSource={users}
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
