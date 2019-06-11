import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// COMPONENTS
import { Card } from "../components/card/index";
import { Navigation } from "../components/header/index";
import { Collections, CollectionGrid } from "../components/colections/index";

// ICONS
import capa from "../imagens/Richie-Kotzen-Mother-Heads-Family-Reunion-1994.jpg";
// ACTIONS
import { Creators as Actions } from "../store/ducks/home";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    console.log(this.props);
  }

  componentDidMount = () => {
    this.props.request();
  };

  render() {
    return (
      <div className="content">
        <Navigation
          content={[
            "Em Destaque",
            "Podcasts",
            "paradas",
            "Gêneros",
            "lançamentos",
            "Descobrir"
          ]}
        />
        <Collections title="Lançamentos">
          <CollectionGrid>
            {!!this.props.home.data
              ? this.props.home.data.map(data => (
                  <Card
                    Key={data.title}
                    Image={capa}
                    Title={data.title}
                    Artist={data.name}
                  />
                ))
              : "carregando"}
          </CollectionGrid>
        </Collections>
      </div>
    );
  }
}

const mapStateToProps = state => ({ home: { ...state.Home } });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
