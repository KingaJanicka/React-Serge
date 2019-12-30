import React from "react";
import Module from "../module";
import * as Jack from "../jack";
const RandomSource = ({ className }) => {
  return (
    <Module name="Random Source" className="random-source">
      <Jack.RedJack />
    </Module>
  );
};
export default RandomSource;
