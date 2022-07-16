import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyApp from "./containers/MyApp";

const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
          <MyApp />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  routing, document.getElementById("root")
);
