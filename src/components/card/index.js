import React from "react";

import disc from "../../imagens/tick.svg";

export const Card = ({ Image }) => {
  return (
    <article className="card">
      <div className="card-header">
        <img src={Image} className="card-header__cover" alt="artista" />
        <img src={disc} className="card-header__disc" alt="artista" />
      </div>
      <h2 className="card__title">
        Into to Black
        <span>Richie Koten</span>
      </h2>
    </article>
  );
};
