import { ConfigProvider } from "antd";
import React from "react";

type Props = { children: React.ReactNode };
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function Providers({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: "#fff",
            lastItemColor: "#aaf",
            linkColor: "#99f",
            linkHoverColor: "red",
            separatorColor: "#f2f",
          },
          Layout: {
            //colorBgHeader: "black",
            //colorBgBody: "skyblue"
          },
        },
      }}
    >
      <Provider store={store}>{children}</Provider>
    </ConfigProvider>
  );
}
