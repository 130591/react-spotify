import React, { Component } from 'react';

// import { Container } from './styles';

export const Button = ({children, styled}) => {
    return (
     <button className={`btn ${styled}`} type="button">{children}</button>
    );
}
