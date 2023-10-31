import { UserAPI } from "@/services/users";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import toast from "react-hot-toast";
import { User } from "@/@types/user";
import { useNavigate } from "react-router-dom";
import { select } from "@/store/slices/selectedUserSlice";
import { useSelector, useDispatch } from "react-redux";
import { setSorting } from "@/store/slices/sortSlice";
import { RootState } from "@/store/store";

type Props = {};
export default function UsersList({}: Props) {
  const [users, setUsers] = useState<User[] | null>(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const sorting = useSelector((state: RootState) => state.sorting.value);
  const onTableChange: TableProps<User[]>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
    dispatch(setSorting(sorter as any));
    console.log("sorter", sorter);
  };
  useEffect(() => {
    console.log("sorting ", sorting);
  }, [dispatch]);

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

  const columns: ColumnsType<User> = [
    {
      title: "نام",
      dataIndex: "name",

      sorter: (a, b) => {
        if (sorting.field === "name") {
          return sorting.order === "ascend"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      },
    },
    {
      title: "سن",
      dataIndex: "age",

      sorter: (a, b) => +a.age - +b.age,
    },
    {
      title: "شماره تلفن ",
      dataIndex: "phoneNumber",

      sorter: (a, b) => +a.phoneNumber - +b.phoneNumber,
    },
    {
      title: "ایمیل",
      dataIndex: "email",
      defaultSortOrder: "descend",

      sorter: (a, b) => {
        if (sorting.field === "email") {
          return sorting.order === "ascend"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      },
    },
    {
      title: "آدرس",
      dataIndex: "street",
      sorter: (a, b) => {
        if (sorting.field === "street") {
          return sorting.order === "ascend"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      },
    },
    {
      title: "شرکت",
      dataIndex: "company",
      sorter: (a, b) => {
        if (sorting.field === "company") {
          return sorting.order === "ascend"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      },
    },
    {
      title: "دسترسی ها",
      dataIndex: "",
      key: "x-access",
      render: (record) => (
        <>
          <button
            className="bg-red-700 mx-3 hover:bg-red-800 rounded-md px-2 py-1"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();

              deleteHandler(record);
            }}
          >
            حذف
          </button>
          <button
            className="bg-sky-700 mx-3 hover:bg-sky-800 rounded-md px-2 py-1"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              navigate("/edit-user");
              editHandler(record);
            }}
          >
            ویرایش
          </button>
        </>
      ),
    },
  ];

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
          columns={columns as any}
          dataSource={users as any}
          onChange={onTableChange}
          rowClassName={(record: any, index) =>
            index % 2 == 0
              ? "bg-primary-2 text-white "
              : "bg-primary-1 text-white"
          }
          {...sorting}
        />
      </div>
    </div>
  );
}
