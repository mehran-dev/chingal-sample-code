import React, { useEffect } from "react";
import defaultProfileImage from "../assets/images/user-default-image.jpg";
import { Breadcrumb, Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { UserAPI } from "@/services/users";
import { User } from "@/@types/user";
type Props = {};

export default function EditUser({}: Props) {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser.value
  );

  const onFinish = (values: any) => {
    UserAPI.updateUser(values.id, values)
      .then((res) => {
        toast.success("user updated !!!");
      })
      .catch((err) => {
        toast.error("user Update failed !!!");
      });
  };
  const onFinishFailed = (errInfo: any) => {
    toast.error("Error Updating the user ");
  };

  type FieldType = User;
  const deleteUserHandler = () => {
    const values: Partial<User> = form.getFieldsValue(true);
    const id = values?.id;
    UserAPI.deleteUser(id as string)
      .then((res) => {
        console.log(res);
        toast.success("User deleted Successfully ");
      })
      .catch((err) => {
        toast.error("Error WHILE  deleting  user");
        console.log(err);
      });
  };

  useEffect(() => {
    form.setFieldsValue({
      id: "",
      city: selectedUser?.city,
      company: selectedUser?.company,
      country: selectedUser?.country,
      email: selectedUser?.email,
      phoneNumber: selectedUser?.phoneNumber,
      street: selectedUser?.street,
      userName: selectedUser?.userName,
      username: selectedUser?.username,
      zipcode: selectedUser?.zipcode,
    });
  }, [selectedUser]);

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
          {
            title: <span>ویرایش کاربر </span>,
          },
        ]}
      />
      <div
        className="bg-primary-2 mx-auto w-[450px] px-5 py-3 pb-7 mt-16 rtl mb-18"
        style={{
          boxShadow: "0 0 7px #999",
        }}
      >
        <Form
          form={form}
          className="text-white"
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{
            city: selectedUser?.city,
            company: selectedUser?.company,
            country: selectedUser?.country,
            email: selectedUser?.email,
            phoneNumber: selectedUser?.phoneNumber,
            street: selectedUser?.street,
            userName: selectedUser?.userName,
            username: selectedUser?.username,
            zipcode: selectedUser?.zipcode,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h4 className="text-right">ویرایش کاربر</h4>
          <hr className="opacity-30 my-3" />

          <div className="mt-3 mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-solid border-sky-600 border-2">
              <img className="w-full h-full" src={defaultProfileImage} />
            </div>
            <div className="flex">
              <div className="w-1/2 mx-2">
                <Form.Item<FieldType>
                  label="نام کاربری"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/2 mx-2">
                <Form.Item<FieldType>
                  label="نام"
                  name="userName"
                  rules={[
                    { required: true, message: "Please input your userName!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 mx-2">
                <Form.Item<FieldType>
                  label="ایمیل"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/2 mx-2">
                <Form.Item<FieldType>
                  label="شماره تلفن"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phoneNumber!",
                    },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="کشور"
                  name="country"
                  rules={[
                    { required: true, message: "Please input your country!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="شهر"
                  name="city"
                  rules={[
                    { required: true, message: "Please input your city!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="خیابان"
                  name="street"
                  rules={[
                    { required: true, message: "Please input your street!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="کد پستی"
                  name="zipcode"
                  rules={[
                    { required: true, message: "Please input your zipcode!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
            </div>
            <div className="flex">
              <div className="w-full mx-2">
                <Form.Item<FieldType>
                  label="شرکت"
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company!",
                    },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="flex justify-around">
            <Button
              className="mx-3 bg-sky-700 hover:bg-sky-800  text-white w-36 h-10 border-none shadow-2xl "
              htmlType="submit"
            >
              ویرایش
            </Button>
            <Button
              className="mx-3 bg-red-700 hover:bg-red-800  text-white w-36 h-10 border-none shadow-2xl "
              htmlType="button"
              onClick={deleteUserHandler}
            >
              حذف
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
