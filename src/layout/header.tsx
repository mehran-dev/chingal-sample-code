import React from "react";
import logoImage from "../assets/images/logo.png";
import ThemeButton from "@/componetns/themeButton";
import SearchButton from "@/componetns/searchButton";
import { useDispatch, useSelector } from "react-redux";
import { set } from "@/store/slices/searchValue";
import { RootState } from "@/store/store";

type Props = {};

export default function Header({}: Props) {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.value
  );

  return (
    <div className="flex items-center  bg-primary-1">
      <div className="flex ml-6 items-center">
        <ThemeButton />

        <SearchButton
          onSearch={(v) => {
            console.log(v);
            dispatch(set(v));
          }}
        />
      </div>
      <div>{JSON.stringify(searchValue)}</div>
      <div className=" mr-6 ml-auto">
        <img src={logoImage} />
      </div>
    </div>
  );
}
