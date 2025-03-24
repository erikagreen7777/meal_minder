import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./root";
import UsersPage from "./routes/user";
import SignupPage from "./routes/signup";
import NewInventory from "./routes/newInventory";

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
    path: "/newInventory", 
    element: <NewInventory /> 
  },
]);

export default router;
