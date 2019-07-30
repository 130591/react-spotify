import React, { useState } from "react";
import PropTypes from "prop-types";

export const PlayList = ({ OnChange }) => {
  return (
    <div className="contentPlay">
      <span>Nome da Playlist</span>
      <input
        type="text"
        className="input-play"
        placeholder="Comece a escrever..."
        onChange={e => OnChange(e)}
      />
    </div>
  );
};

PlayList.propTypes = {
  OnChange: PropTypes.func.isRequired
};
