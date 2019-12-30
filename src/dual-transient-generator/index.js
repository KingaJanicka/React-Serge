import React from "react";
import Module from "../module";
import * as Jack from "../jack";

const DualTransientGenerator = ({ className }) => {
  return (
    <Module
      name="Dual Transient Generator"
      className="dual-transient-generator"
    >
      <Jack.RedJack />
    </Module>
  );
};

export default DualTransientGenerator;
