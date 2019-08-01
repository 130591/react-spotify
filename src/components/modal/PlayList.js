import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

export const PlayList = ({ OnChange }) => {
  const handleChange = value => {
    OnChange(value);
  };

  const emitChange = debounce(handleChange, 2000);

  return (
    <div className="contentPlay">
      <span>Nome da Playlist</span>
      <input
        type="text"
        className="input-play"
        placeholder="Comece a escrever..."
        onChange={e => emitChange(e.target.value)}
      />
    </div>
  );
};

PlayList.propTypes = {
  OnChange: PropTypes.func.isRequired
};
