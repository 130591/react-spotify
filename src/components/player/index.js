import React from "react";

import play from '../../imagens/play-button.svg';
import pause from '../../imagens/pause.svg';
import left from '../../imagens/fast-forward-button (1).svg';

export const Player = () => {
  return (
    <section className="player">
      <ul className="controls">
        <li><img src={left} className="controls__left" alt="left"/></li>
        <li>
          <img src={play} className="controls__play" alt="play"/>
        </li>
        <li><img src={left} className="controls__right" alt="right" /></li>
      </ul>
      <article className="progress">
        <div className="progress-play"/>
      </article>
      <audio src="foo.ogg">
        <track kind="captions" src="foo.en.vtt" srclang="en" label="English" />
        <track kind="captions" src="foo.sv.vtt" srclang="sv" label="Svenska" />
      </audio>
    </section>
  );
};
