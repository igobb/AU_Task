import React from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/homePage/Home"));
const Routes = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};

export default Routes;
