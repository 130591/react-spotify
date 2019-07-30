import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, styled, onPress }) => {
  return (
    <button className={`btn ${styled}`} onClick={() => onPress()} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  onPress: PropTypes.func,
  styled: PropTypes.string
};
