import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// COMPONENTS
import { Card } from "../components/card";
import { Navigation } from "../components/header";
import { Collections, CollectionGrid } from "../components/colections";

// ACTIONS
import Creators from "../store/ducks/albums";
import { request } from '../store/ducks/home';

class Home extends Component {

  componentDidMount = () => {
    this.props.request()
  }

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
              reprodutions.items.map(item => (
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

const mapStateToProps = state => ({
  albums: state.albums.albums,
  reprodutions: state.reprodution.list,
  sound: state.sound,
  song: state.Song
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ request, Creators }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
