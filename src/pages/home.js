import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// COMPONENTS
import { Card } from "../components/card/index";
import { Navigation } from "../components/header/index";
import { Collections, CollectionGrid } from "../components/colections/index";

// ICONS
import capa from "../imagens/Richie-Kotzen-Mother-Heads-Family-Reunion-1994.jpg";
// ACTIONS
import { Creators as homeActions } from "../store/ducks/home";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    // this.props.getLoad()
    console.log("LOAD", this.props.getLoad);
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
          {this.props.home}
          <CollectionGrid>
            <Card Image={capa} />
            <Card Image={capa} />
            <Card Image={capa} />
          </CollectionGrid>
        </Collections>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators(homeActions, dispatch);
};

const mapStateToProps = state => ({ home: state.home });

export default connect(state => ({
  mapStateToProps,
  mapDispatchToProps
}))(Home);
