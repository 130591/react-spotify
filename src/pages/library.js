import React, { Component } from "react";

// COMPONENTS
import { Navigation } from "../components/header";
import { Button } from "../components/buttons";
import ModalPlaylist from "../components/modal";
// ACTIONS
import Creators from "../store/ducks/playlist";

export default class Library extends Component {
  render() {
    return (
      <div className="content">
        <Navigation
          content={[
            "Playlist",
            "Feito para você",
            "Musicas",
            "Albuns",
            "Artistas",
            "Podcasts"
          ]}
        />
        <div className="create">
          <ModalPlaylist onCreate={this.CreatePlayList} />
        </div>
      </div>
    );
  }
}
