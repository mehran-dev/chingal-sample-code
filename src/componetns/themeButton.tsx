import React from "react";
import { Switch, Space } from "antd";
import { BiMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
type Props = {};

export default function ThemeButton({}: Props) {
  return (
    <div className="mx-3">
      <Space className="" direction="vertical">
        <Switch
          className=""
          checkedChildren={
            <div className="flex items-center  text-xl ">
              <BiMoon />
            </div>
          }
          unCheckedChildren={
            <div className="text-white flex justify-center items-center   text-xl">
              <BsFillSunFill />
            </div>
          }
          defaultChecked
        />
      </Space>
    </div>
  );
}
