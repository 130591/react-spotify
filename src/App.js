import React from "react";

import { SideBar } from "./components/menu/index";
import { Player } from "./components/player/index";
import { Routes } from "./routes";

const App = () => {
  return (
    <>
      <div id="wrapper">
      <SideBar />
        <Routes />
      </div>
      <Player />
    </>
  );
};

export default App;
