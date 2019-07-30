import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// COMPONENTS
import { Card } from "../components/card";
import { Navigation } from "../components/header";
import { Collections, CollectionGrid } from "../components/colections";

// ACTIONS
import Creators from "../store/ducks/albums";

class Home extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { reprodutions } = this.props;
    console.log(reprodutions);
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
        <Collections title="Player Recentes">
          <CollectionGrid>
            {!!reprodutions
              ? reprodutions.items.map(data => (
                  <Card
                    Key={data.album.id}
                    Image={data.album.images[0].url}
                    Title={data.album.name}
                    Artist={data.artists[0].name}
                    Uri={data.album.uri}
                  />
                ))
              : "carregando"}
          </CollectionGrid>
        </Collections>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums.albums,
  reprodutions: state.reprodution.list
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Creators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
