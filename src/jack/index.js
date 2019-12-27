import React from "react";
import PropTypes from "prop-types";
const Jack = ({ className, color }) => {
  return (
    <div className={`${className}__jack jack jack--${color}`}>
      <svg width="100" height="100">
        <circle cx="50" cy="50" fill={color} r="50"></circle>
        <circle cx="50" cy="50" fill="#333" r="25"></circle>
      </svg>
    </div>
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
