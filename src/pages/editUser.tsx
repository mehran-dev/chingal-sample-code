import React from "react";
import defaultProfileImage from "../assets/images/user-default-image.jpg";
import { Breadcrumb, Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
type Props = {};

export default function EditUser({}: Props) {
  const navigate = useNavigate();

  const onFinish = (values: any) => {};
  const onFinishFailed = (errInfo: any) => {
    toast.error("Error Updating the user ");
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
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
          className="text-white"
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
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
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
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
                  label="شماره تلفن"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
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
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="شهر"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="خیابان"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  className="custom-label"
                >
                  <Input className="bg-transparent text-white" />
                </Form.Item>
              </div>
              <div className="w-1/4 mx-2">
                <Form.Item<FieldType>
                  label="کد پستی"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
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
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
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
            <Button className="mx-3 bg-sky-700 hover:bg-sky-800  text-white w-36 h-10 border-none shadow-2xl ">
              ویرایش
            </Button>
            <Button className="mx-3 bg-red-700 hover:bg-red-800  text-white w-36 h-10 border-none shadow-2xl ">
              حذف
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
