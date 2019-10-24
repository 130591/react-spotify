import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

export const PlayList = ({ OnChange }) => {
  const handleChange = value => {
    if (value) OnChange(value);
  };

  const emitChange = debounce(handleChange, 400);

  return (
    <div className="contentPlay">
      <span>Nome da Playlist</span>
      <input
        type="text"
        className="input-play"
        placeholder="Adicionar uma playlist"
        onChange={e => emitChange(e.target.value)}
      />
    </div>
  );
};

PlayList.propTypes = {
  OnChange: PropTypes.func.isRequired
};
