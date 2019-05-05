import React, { Component } from "react";

// COMPONENTS
// import { Siderbar } from "../components/header/index";
import { SideBar } from "../components/menu/index";
import { Card } from "../components/card/index";

// ICONS
import capa from "../imagens/Richie-Kotzen-Mother-Heads-Family-Reunion-1994.jpg";

class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <SideBar />
        <div className="content">
          <section className="navigation">
            <div className="container">
              <nav className="nav-tabs">
                <ul>
                  <li>Em Destaque</li>
                  <li>Podcasts</li>
                  <li>paradas</li>
                  <li>Gêneros</li>
                  <li>lançamentos</li>
                  <li>Descobrir</li>
                </ul>
              </nav>
            </div>
          </section>
          <section className="colections">
            <div className="container">
              <h2 className="colections__title">Lançamentos</h2>
              <span className="viewMore">Ver Mais</span>
              <div className="colections-grid">
                <Card Image={capa} />
                <Card Image={capa} />
                <Card Image={capa} />
                <Card Image={capa} />
                <Card Image={capa} />
                <Card Image={capa} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
