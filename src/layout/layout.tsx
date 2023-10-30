import React from "react";
import Header from "./header";
import { Breadcrumb } from "antd";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
