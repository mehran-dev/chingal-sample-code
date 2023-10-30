import React, { useState } from "react";

import "./App.css";
import Layout from "./layout/layout";
import Routers from "./routers";
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Providers>
      <Toaster />
      <Layout>
        <React.Suspense fallback={<>loading...</>}>
          <Routers />
        </React.Suspense>
      </Layout>
    </Providers>
  );
}

export default App;
