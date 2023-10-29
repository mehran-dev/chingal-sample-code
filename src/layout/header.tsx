import React from "react";
import logoImage from "../assets/images/logo.png";
import ThemeButton from "@/componetns/themeButton";
import SearchButton from "@/componetns/searchButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex items-center  bg-primary-1">
      <div className="flex ml-6 items-center">
        <ThemeButton />

        <SearchButton />
      </div>
      <div className=" mr-6 ml-auto">
        <img src={logoImage} />
      </div>
    </div>
  );
}
