import React from "react";
import { Provider } from "react-redux";

import { SideBar } from "./components/menu/index";
import { Player } from "./components/player/index";
import { Routes } from "./routes";

import store from "./store/index";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div id="wrapper">
          <SideBar />
          <Routes />
        </div>
        <Player />
      </Provider>
    </>
  );
};

export default App;
