import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button
      className={`${props.color} font-bold py-2 px-4 rounded-lg inline-flex items-center`}
      
    >
      <Link to={props.href}>{props.text}</Link>
    </button>
  );
};

export default Button;
