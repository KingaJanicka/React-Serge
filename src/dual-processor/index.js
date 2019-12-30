import React from "react";
import Module from "../module";
import * as Jack from "../jack";
import Light from "../light";
const DualProcessor = ({ className }) => {
  return (
    <Module name="Dual Processor" className="dual-processor">
      <Jack.BlackJack />
      <Jack.BlueJack />
      <Jack.RedJack />
      <Jack.PurpleJack />
      <Light></Light>
      <Light on={true}></Light>
    </Module>
  );
};

export default DualProcessor;
