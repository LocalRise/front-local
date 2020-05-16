import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHome from "../containers/AppHome";
import { route } from "next/dist/next-server/server/router";
import RestaurantIndex from "./../containers/RestaurantPage";
const ExampleContainer = () => <div>Hi</div>;

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/restaurant" component={RestaurantIndex} />
        <Route path="/ex" component={ExampleContainer} />
        <Route path="/" component={AppHome} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
