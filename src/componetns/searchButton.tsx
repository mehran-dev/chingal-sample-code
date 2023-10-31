import { Button } from "antd";
import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { BsSearch } from "react-icons/bs";

type Props = { onSearch: Function };

export default function SearchButton({ onSearch }: Props) {
  const { Search } = Input;

  return (
    <div className="mx-3 bg-sky-600 rounded-sm w-80">
      <Search
        className=" w-full text-right"
        placeholder="جستجو"
        enterButton={<BsSearch />}
        size="large"
        onSearch={(v, e) => onSearch(v, e)}
      />
    </div>
  );
}
