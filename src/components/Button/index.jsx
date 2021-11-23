import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

Button.propTypes = {
  onClick: PropTypes.func,
};

function Button({ onClick, title }) {
  return (
    <button className="btn" onClick={onClick ? () => onClick() : null}>
      {title}
    </button>
  );
}

export function ButtonOutline({ onClick, title, className }) {
  return (
    <button
      className={`btn btn-outline${className ? " small" : ""}`}
      onClick={onClick ? () => onClick() : null}
    >
      {title}
    </button>
  );
}

export default Button;
