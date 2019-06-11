import React from "react";

import disc from "../../imagens/tick.svg";

export const Card = ({ Image, Title, Artist, Key }, styled) => {
  return (
    <article className={`card ${styled.card}`} key={Key}>
      <div className={`card-header ${styled.cardHead}`}>
        <img
          src={Image}
          className={`card-header__cover ${styled.cardCover}`}
          alt="artista"
        />
        <img
          src={disc}
          className={`card-header__disc ${styled.cardDisc}`}
          alt="artista"
        />
      </div>
      <h2 className={`card__title ${styled.cardTitle}`}>
        {Title}
        <span>{Artist}</span>
      </h2>
    </article>
  );
};
