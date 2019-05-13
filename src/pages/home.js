import React, { Component } from "react";

// COMPONENTS
import { Card } from "../components/card/index";
import { Navigation } from "../components/header/index";
import { Collections, CollectionGrid } from "../components/colections/index";

// ICONS
import capa from "../imagens/Richie-Kotzen-Mother-Heads-Family-Reunion-1994.jpg";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Navigation content={['Em Destaque', 'Podcasts', 'paradas', 'Gêneros', 'lançamentos','Descobrir']} />
        <Collections title="Lançamentos">
          <CollectionGrid>
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
          </CollectionGrid>
        </Collections>
        <Collections title="Lançamentos">
          <CollectionGrid>
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
          </CollectionGrid>
        </Collections>
        <Collections title="Lançamentos">
          <CollectionGrid>
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
          </CollectionGrid>
        </Collections>
      </div>
    );
  }
}

export default Home;
