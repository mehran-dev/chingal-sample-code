import { Button } from "antd";
import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { BsSearch } from "react-icons/bs";

type Props = { onSearch: Function };

export default function SearchButton({ onSearch }: Props) {
  const { Search } = Input;
  const suffix = true ? (
    <></>
  ) : (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  // const onSearch = () => {
  //   console.log("//complete this later ");
  // };

  return (
    <div className="mx-3 bg-red-500 w-80">
      <Search
        className="bg-green-800 w-full text-right"
        placeholder="جستجو"
        enterButton={<BsSearch />}
        size="large"
        suffix={suffix}
        onSearch={(v, e) => onSearch(v, e)}
      />
    </div>
  );
}
