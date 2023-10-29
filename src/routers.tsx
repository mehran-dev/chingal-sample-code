import React from "react";
import { RouterProvider } from "react-router";
import { Router, Route, createBrowserRouter } from "react-router-dom";
const EditUser = React.lazy(() => import("./pages/editUser"));
const UsersList = React.lazy(() => import("./pages/usersList"));

type Props = {};

export default function Routers({}: Props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersList />,
    },
    {
      path: "/edit-user",
      element: <EditUser />,
    },
  ]);

  return <RouterProvider router={router} />;
}
