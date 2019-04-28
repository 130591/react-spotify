import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={<h1>Home</h1>} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);
