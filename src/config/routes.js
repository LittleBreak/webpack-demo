import Page1 from "../page/Page1/Page1.jsx";
import Page2 from "../page/Page2/Page2.jsx";
import loadable from "@loadable/component";
import { Loading } from "../components";
import React, { Component } from "react";

import Home from "../page/Home.jsx";
const LoadableComponent = loadable(() => import("../page/Page2/Page2.jsx"), {
  fallback: <Loading />,
});
const routes = [
  {
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        component: Page1,
      },
      {
        path: "/p2",
        component: LoadableComponent,
        // routes: [
        //   {
        //     path: "/child/:id/grand-child",
        //     component: GrandChild,
        //   },
        // ],
      },
    ],
  },
];
export default routes;
