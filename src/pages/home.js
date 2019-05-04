import React, { Component } from "react";

import { Header } from "../components/header/index";
import { Menu } from "../components/menu/index";

class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <Menu />
        <div className="content">
          <Header />
          <section className="navigation">
            <div className="container">
              <h2>Navegar</h2>
              <nav className="nav-tabs">
                <ul>
                  <li>Visão Geral</li>
                  <li>Paradas</li>
                  <li>Gêneros e Momentos</li>
                  <li>Lançamentos</li>
                  <li>Descobrir</li>
                </ul>
              </nav>
            </div>
          </section>
          
        </div>
      </div>
    );
  }
}

export default Home;
