import React, { Component } from "react";

import { Header } from "../components/header/index";

class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <aside className="menu">everton</aside>
        <Header />
      </div>
    );
  }
}

export default Home;
