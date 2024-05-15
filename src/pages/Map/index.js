import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";
import BasicMap from "./basic";

const EditMap = React.lazy(() => import("./editable"));

const Leaflet = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/basic`} component={BasicMap} />
      <Route path={`${path}/editable`} component={EditMap} />
    </Switch>
  );
};

export default Leaflet;
