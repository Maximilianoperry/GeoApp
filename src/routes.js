import React from "react";

const Map = React.lazy(() => import("pages/Map"));
const About = React.lazy(() => import("pages/About"));

const routes = [
  {
    enabled: true,
    path: "/map",
    component: Map,
    navbar: "Map",
    child: [
      {
        name: "Basic",
        path: "/map/basic",
      },
      {
        name: "Editable",
        path: "/map/editable",
      },
    ],
  },
  {
    enabled: true,
    path: "/about",
    component: About,
    navbar: "About",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
