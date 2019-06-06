import React, { Component } from "react";

// COMPONENTS
import { Navigation } from "../components/header/index";
import { Button } from "../components/buttons/index";
import { ModalPlaylist } from "../components/modal/index";

export default class Library extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
          <ModalPlaylist />
        </div>
      </div>
    );
  }
}
