import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./root";
import UsersPage from "./routes/user";
import SignupPage from "./routes/signup";
import NewInventory from "./routes/newInventory";
import LoginPage from "./routes/login";
import DashboardPage from "./routes/dashboard";

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
  { path: "/login", element: <LoginPage /> },
  {
    path: "/new-inventory",
    element: <NewInventory />,
  },
  { path: "/dashboard", element: <DashboardPage /> },
]);

export default router;
