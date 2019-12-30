import React from "react";
import Panel from "../panel";
import Module from "../module";
import DualProcessor from "../dual-processor";
import RandomSource from "../random-source";
import SmoothSteppedGenerator from "../smoooth-stepped-generator";
import DualTransientGenerator from "../dual-transient-generator";
import DualUniversalSlopeGenerator from "../dual-universal-slope-generator";
import QuadratureOscillator from "../quadrature-oscillator";
const BlueControl = ({ className }) => {
  return (
    <Panel footer={<h2>Blue Control</h2>}>
      <RandomSource></RandomSource>
      <SmoothSteppedGenerator />
      <DualTransientGenerator />
      <DualProcessor></DualProcessor>
      <DualUniversalSlopeGenerator />
      <DualUniversalSlopeGenerator />
      <QuadratureOscillator />
    </Panel>
  );
};

export default BlueControl;
