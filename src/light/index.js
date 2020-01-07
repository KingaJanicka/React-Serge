import React from "react";

const Light = ({ className, color, on }) => {
  return (
    <svg
      className={`${className}__light light`}
      width="auto"
      viewBox="0 0 96 96"
    >
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
