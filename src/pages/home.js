import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PropTypes from "prop-types";

// COMPONENTS
import { Card } from "../components/card";
import { Navigation } from "../components/header";
import { Collections, CollectionGrid } from "../components/colections";

// ACTIONS
import Creators from "../store/ducks/albums";

class Home extends Component {
  render() {
    const { reprodutions, audioControl } = this.props;
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
            {reprodutions &&
              reprodutions.map(item => (
                <Card
                  Key={item.album.id}
                  Image={item.album.images[0].url}
                  Title={item.album.name}
                  Artist={item.artists[0].name}
                  songInfo={item}
                  audioControl={audioControl}
                />
              ))}
          </CollectionGrid>
        </Collections>
      </div>
    );
  }
}

Home.propTypes = {
  audioControl: PropTypes.func,
  reprodutions: PropTypes.array
}

const mapStateToProps = state => ({
  albums: state.albums.albums,
  reprodutions: state.reprodution.list,
  sound: state.sound,
  song: state.Song
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...Creators }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
