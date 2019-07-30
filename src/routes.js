import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// COMPONENTS PAGES
import Home from "./pages/home";
import Search from "./pages/search";
import Library from "./pages/library";

// ROUTES
export const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/" component={Search} />
      {/* <Route path="/" component={Library} /> */}
    </Switch>
  </BrowserRouter>
);
