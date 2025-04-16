import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./root";
import UsersPage from "./routes/user";
import SignupPage from "./routes/signup";
import NewInventory from "./routes/newInventory";
import LoginPage from "./routes/login";
import DashboardPage from "./routes/dashboard";
import { authLoader } from "../api/authLoader";
import SaveInventoryPage from "./routes/saveInventory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/new-inventory",
    element: <NewInventory />,
    loader: authLoader,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    loader: authLoader,
  },
  {
    path: "/save-inventory",
    element: <SaveInventoryPage />,
    loader: authLoader,
  },
]);

export default router;
