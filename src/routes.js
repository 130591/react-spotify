import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENT
import SideBar from './components/menu';
// COMPONENTS PAGES
import Home from "./pages/home";
import Search from "./pages/search";
import Library from "./pages/library";

// ROUTES
export function Routes({ audioControl }) {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/callback" render={(props) => <Home {...props} audioControl={audioControl} />} />
        <Route exact path="/playlist" component={Library} />
        <Route exact path="/search" render={(props) => <Search {...props} audioControl={audioControl} />} />
      </Switch>
    </Router>
  );
}
