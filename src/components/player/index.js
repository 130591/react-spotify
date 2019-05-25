import React, { Component } from "react";

import { Howl, Howler } from "howler";

import play from "../../imagens/play-button.svg";
import pause from "../../imagens/pause.svg";
import left from "../../imagens/fast-forward-button (1).svg";

export class Player extends Component {
  constructor() {
    super();
    this.state = {
      player: {
        audio: {},
        tracks: {},
        tracksID: 0,
        paused: false,
        saveSeek: "",
        currentTrack: ""
      }
    };
  }

  audioExecute() {
    if (!this.state.player.tracksID) {
      this.setState({ track: new Howl(this.state.player.audio) });
      const id = this.state.player.track.play();
      this.setState({ tracksID: id });
    }
  }

  componentDidMount() {
    this.setState({
      audio: { urls: ["sounds.webm"] }
    });
  }

  handlePaused = () => {
    this.state.player.paused === true
      ? this.setState({ paused: false })
      : this.setState({ paused: true });
  };

  render() {
    return (
      <section className="player">
        <ul className="controls">
          <li>
            <img src={left} className="controls__left" alt="left" />
          </li>
          {this.state.player.paused === true ? (
            <li onClick={this.handlePaused}>
              <img src={pause} className="controls__play" alt="play" />
            </li>
          ) : (
            <li onClick={this.handlePaused}>
              <img src={play} className="controls__play" alt="play" />
            </li>
          )}
          <li>
            <img src={left} className="controls__right" alt="right" />
          </li>
        </ul>
        <article className="progress">
          <div className="progress-play" />
        </article>
      </section>
    );
  }
}
