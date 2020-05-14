import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHome from "../Containers/AppHome";
const ExampleContainer = () => <div>Hi</div>;

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppHome} />
        <Route path="/ex" component={ExampleContainer} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
