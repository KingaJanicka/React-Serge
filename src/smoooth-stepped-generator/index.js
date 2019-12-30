import React from "react";
import * as Jack from "../jack";
import Module from "../module";
const SmoothSteppedGenerator = ({ className }) => {
  return (
    <Module
      name="Smooth/Stepped Generator"
      className="smooth-stepped-generator"
    >
      <Jack.RedJack />
    </Module>
  );
};

export default SmoothSteppedGenerator;
