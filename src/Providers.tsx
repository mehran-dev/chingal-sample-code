import { ConfigProvider } from "antd";
import React from "react";

type Props = { children: React.ReactNode };
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
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
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </ConfigProvider>
  );
}
