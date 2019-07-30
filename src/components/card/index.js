import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import disc from "../../imagens/tick.svg";

export const Card = (props, styled) => {
  const { Image, Title, Artist, Key, Uri } = props;
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
      <h2 className={`card__title ${styled.cardTitle}`} data-uri={Uri}>
        {Title}
        <span>{Artist}</span>
      </h2>
    </article>
  );
};

Card.propTypes = {
  Image: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Artist: PropTypes.string.isRequired,
  styled: PropTypes.string,
  Key: PropTypes.string.isRequired
};
