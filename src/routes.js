import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// COMPONENTS PAGES
import Home from "./pages/home";
import SingIn from "./pages/login";

// ROUTES
export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);
