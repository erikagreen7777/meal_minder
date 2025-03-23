import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../root'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  // Add more routes here as needed
]);

export default router;

// import {
//   type RouteConfig,
//   route,
// } from "@react-router/dev/routes";

// export default [
//   route("some/path", "./some/file.tsx"),
//   // pattern ^           ^ module file
// ] satisfies RouteConfig;
