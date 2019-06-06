import React, { useState } from "react";

import play from "../../imagens/play-button.svg";
import pause from "../../imagens/pause.svg";
import left from "../../imagens/fast-forward-button (1).svg";

export const Player = () => {
  const [track, setTrack] = useState(false);
  const [tracksID, settracksID] = useState(false);
  const [audio, setAudio] = useState(false);

  function handleTrack() {
    track === false ? setTrack(true) : setTrack(false);
  }

  return (
    <section className="player">
      <ul className="controls">
        <li>
          <img src={left} className="controls__left" alt="left" />
        </li>
        {track === true ? (
          <li onClick={handleTrack}>
            <img src={pause} className="controls__play" alt="play" />
          </li>
        ) : (
          <li onClick={handleTrack}>
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
};
