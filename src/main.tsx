import React from "react";
import ReactDOM from "react-dom";
// import { createHashRouter, RouterProvider } from "react-router-dom";
// import { routerConfig } from "./routerConfig";
import "./index.less";
// import "../../src/styles/index.less";
import "./src/styles/index.less";
import "./src";
import DemoIndex from "./components/DemoIndex";

// const router = createHashRouter(routerConfig);

ReactDOM.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <DemoIndex />
  </React.StrictMode>,
  document.getElementById("root")
);
