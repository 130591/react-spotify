import React from "react";
import PropTypes from "prop-types";

export const MenuList = ({ players, category }) => {
  return (
    <article className="menu-list">
      <h2>{category}</h2>
      <ul>{!!players ? players.map(play => <li>{play}</li>) : ""}</ul>
    </article>
  );
};

MenuList.propTypes = {
  players: PropTypes.array,
  category: PropTypes.string.isRequired
};
