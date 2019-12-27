import React from "react";

const Light = ({ className, color, on }) => {
  return (
    <svg className={`${className}__light light`} width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill={on ? color : "grey"}
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};
Light.defaultProps = { color: "red" };
export default Light;
