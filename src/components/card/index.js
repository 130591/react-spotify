import React from "react";

import disc from "../../imagens/tick.svg";

export const Card = ({ Image }, styled) => {
  return (
    <article className={`card ${styled.card}`}>
      <div className={`card-header ${styled.cardHead}`}>
        <img src={Image} className={`card-header__cover ${styled.cardCover}`} alt="artista" />
        <img src={disc} className={`card-header__disc ${styled.cardDisc}`} alt="artista" />
      </div>
      <h2 className={`card__title ${styled.cardTitle}`}>
        Into to Black
        <span>Richie Koten</span>
      </h2>
    </article>
  );
};
