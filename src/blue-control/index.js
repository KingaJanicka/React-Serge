import React from "react";
import Panel from "../panel";
import Module from "../module";
import DualProcessor from "../dual-processor";

const BlueControl = ({ className }) => {
  return (
    <Panel footer={<h2>Blue Control</h2>}>
      <Module name="Random Source"></Module>
      <Module name="Smooth/Stepped Generator"></Module>
      <Module name="Dual Transient Generator"></Module>
      <DualProcessor></DualProcessor>
      <Module name="Dual Universal Slope Generator"></Module>
      <Module name="Dual Universal Slope Generator"></Module>
      <Module name="Quadrature Oscillator"></Module>
    </Panel>
  );
};

export default BlueControl;
