import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";

//COMPONENT
import SideBar from './components/menu';
// COMPONENTS PAGES
import Home from "./pages/home";
import Search from "./pages/search";
import Library from "./pages/library";

// ROUTES
function Routes({ audioControl, token }) {
  return (
    <Router>
      <SideBar />
      <Switch>
      <Route exact path="/" 
        render={() => !token ? <Redirect to="/callback" /> : null } 
      />
        <Route path="/callback" 
         render={(props) => <Home {...props} audioControl={audioControl} /> }  
        />
        <Route exact 
         path="/playlist" 
         render={(props) => token ? 
         <Library {...props} /> : 
         <Redirect to={'/callback'} />} 
         />
        <Route exact path="/search" 
         render={(props) => token ? 
         <Search {...props} audioControl={audioControl} /> : 
         <Redirect to={'/'} />
         }
         />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.token
});

export default connect( mapStateToProps, { } )(Routes);