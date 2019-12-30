import React from "react";
import Module from "../module";
import * as Jack from "../jack";

const QuadratureOscillator = className => {
  return (
    <Module name="Quadrature Oscillator" className="quadrature-oscillator">
      <Jack.RedJack />
    </Module>
  );
};

export default QuadratureOscillator;
