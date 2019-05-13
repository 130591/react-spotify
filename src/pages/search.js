import React, { Component } from "react";

// COMPONENTS
import { OffSearch } from "../components/search/index";
import { Navigation } from "../components/header/index";
import { Collections, CollectionGrid } from "../components/colections/index";
import { Card } from "../components/card/index";

import rk from "../imagens/Richie-Kotzen-Mother-Heads-Family-Reunion-1994.jpg";

export default class Search extends Component {
  render() {
    return (
      <div className="content">
        <OffSearch />
        <Navigation
          content={[
            "Principais Resultados",
            "Artistas",
            "Músicas",
            "Álbuns",
            "playlists",
            "Podcasts"
          ]}
        />
        <Collections title="Lançamentos">
          <CollectionGrid>
            <Card
              Image={rk}
              styled={{
                card: "card",
                cardHead: "card-header",
                cardCover: "card-header__cover",
                cardDisc: "card-header__disc",
                cardTitle: "card__title"
              }}
            />
          </CollectionGrid>
        </Collections>
      </div>
    );
  }
}
