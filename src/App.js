import React from "react";

import { SideBar } from "./components/menu/index";
import { Routes } from "./routes";

const App = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <Routes />
    </div>
  );
};

export default App;
