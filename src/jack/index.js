import React from "React";
import PropTypes from "prop-types";
const Jack = ({ className, color }) => {
  return <div className={`${className}__jack jack jack--${color}`}></div>;
};
Jack.propTypes = {
  color: PropTypes.oneOf(["black", "red", "blue", "violet"]).isRequired
};
