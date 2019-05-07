import React from 'react';

import { Slider, Direction } from 'react-player-controls';

export const Player = () => {
  return (
  <section className="player">
    <Slider />
    <Direction />
  </section>
  );
};