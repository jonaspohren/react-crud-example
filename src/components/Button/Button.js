import React from 'react';

const Button = ({ type, value, click, ...props }) => (
  <input type={type} value={value} onClick={click} {...props}/>
);

export default Button;