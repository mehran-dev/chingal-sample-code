import React from "react";
import logoImage from "../assets/images/logo.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex bg-primary-2">
      <div className="bg-red-500">Header</div>

      <img src={logoImage} />
    </div>
  );
}
