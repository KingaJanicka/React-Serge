import React from "react";
import Module from "../module";
import * as Jack from "../jack";
import Toggle from "../toggle";
import "./styles.css";
const DualUniversalSlopeGenerator = ({ className }) => {
  return (
    <Module
      name="Dual Universal Slope Generator"
      className="dual-universal-slope-generator"
    >
      <Jack.RedJack />
      <Toggle />
    </Module>
  );
};

export default DualUniversalSlopeGenerator;
