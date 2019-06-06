import React, { Component } from "react";

export const Button = ({ children, styled, onPress }) => {
  return (
    <button className={`btn ${styled}`} onClick={() => onPress()} type="button">
      {children}
    </button>
  );
};
