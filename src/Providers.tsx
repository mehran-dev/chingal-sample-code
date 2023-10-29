import { ConfigProvider } from "antd";
import React from "react";

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            //colorBgHeader: "black",
            //colorBgBody: "skyblue"
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
