import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SideBar from "./components/menu/index";
import Player from "./components/player/index";
import { Routes } from "./routes";
import { Creators } from "./store/ducks/home";

class App extends Component {
  constructor(props) {
    super();
  }

  async componentDidMount() {
    this.props.request();
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <SideBar />
          <Routes />
        </div>
        <Player />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
