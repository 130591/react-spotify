import React from "react";
import { Route, Switch } from "react-router";
import { Router, BrowserRouter, browserHistory } from "react-router-dom";

// COMPONENTS PAGES
import Home from "./pages/home";
import SingIn from "./pages/login";
import Search from './pages/search';
import Library from './pages/library';

// ROUTES
export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/home" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/playlist" component={Library} />
    </Switch>
  </BrowserRouter>
);
