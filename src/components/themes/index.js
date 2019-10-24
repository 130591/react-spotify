import React from 'react';

const Theme = ({ children, className }, props) => {
  return (
    <div {...props} className={className} >{children}</div>
  );
}

export default Theme
