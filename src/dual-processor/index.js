import React from "react";
import Module from "../module";
import * as Jacks from "../jack";
import Light from "../light";
const DualProcessor = ({ className }) => {
  return (
    <Module name="Dual Processor" className="dual-processor">
      <Jacks.BlackJack />
      <Jacks.BlueJack />
      <Jacks.RedJack />
      <Jacks.PurpleJack />
      <Light></Light>
      <Light on={true}></Light>
    </Module>
  );
};

export default DualProcessor;
