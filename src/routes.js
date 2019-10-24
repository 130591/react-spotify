import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//COMPONENT
import SideBar from './components/menu';
import { redirect_uri } from './config';
// COMPONENTS PAGES
import Home from "./pages/home";
import Search from "./pages/search";
import Album from './pages/album';
import Library from "./pages/library";

// ROUTES
function Routes({ audioControl, token }) {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route exact path="/"
          render={() => !token ? <Redirect to={`${redirect_uri}`} /> : null}
        />
        <Route path="/callback"
          render={(props) => <Home {...props} audioControl={audioControl} />}
        />
        <Route
          path="/album/:release"
          render={(props) => <Album {...props} audioControl={audioControl} />}
        />
        <Route exact
          path="/playlist"
          render={(props) => !token ?
            <Redirect to={'/callback'} /> : <Library {...props} />
          }
        />
        <Route exact path="/search"
          render={(props) => token ?
            <Search {...props} audioControl={audioControl} /> :
            <Redirect to={'/callback'} />
          }
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.token.token
});

export default connect(mapStateToProps, {})(Routes);