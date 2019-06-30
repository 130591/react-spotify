import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// COMPONENTS
import { OffSearch } from "../components/search/index";
import { Navigation } from "../components/header/index";
import { Collections, CollectionGrid } from "../components/colections/index";
import { Card } from "../components/card/index";

import rk from "../imagens/Richie-Kotzen-Mother-Heads-Family-Reunion-1994.jpg";
// ACTIONS
import { Creators as Actions } from "../store/ducks/playlist";

class Search extends Component {
  render() {
    return (
      <div className="content">
        <OffSearch hasResult={false} />
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

const mapStateToProps = state => ({ playlists: { ...state.playlists } });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
