import React from "react";
import PropTypes from "prop-types";
const Jack = ({ className, color }) => {
  return (
    <svg
      width="auto"
      viewBox="0 0 100 100"
      className={`${className}__jack jack jack--${color}`}
    >
      <circle cx="50" cy="50" fill={color} r="50"></circle>
      <circle cx="50" cy="50" fill="#333" r="25"></circle>
    </svg>
  );
};
Jack.propTypes = {
  color: PropTypes.oneOf(["black", "red", "blue", "purple"]).isRequired
};

export default Jack;

export const BlackJack = () => {
  return <Jack color="black"></Jack>;
};

export const BlueJack = () => {
  return <Jack color="blue"></Jack>;
};

export const RedJack = () => {
  return <Jack color="red"></Jack>;
};

export const PurpleJack = () => {
  return <Jack color="purple"></Jack>;
};
