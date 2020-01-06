import React from "react";
import Module from "../module";
import * as Jack from "../jack";
import Light from "../light";
import Knob from "../knob";
import "./styles.css";
const DualProcessor = ({ className }) => {
  return (
    <Module name="Dual Processor" className="dual-processor">
      <Knob></Knob> <Jack.BlueJack></Jack.BlueJack>
      <Jack.BlueJack></Jack.BlueJack> <Knob></Knob>
      <Jack.BlueJack></Jack.BlueJack> <Knob></Knob>
      <Jack.BlueJack></Jack.BlueJack> <Knob></Knob>
      <Knob></Knob> <Jack.BlueJack></Jack.BlueJack>
      <Jack.BlueJack></Jack.BlueJack> <Knob></Knob>
      <Jack.BlueJack></Jack.BlueJack> <Knob></Knob>
      <Jack.BlueJack></Jack.BlueJack> <Knob></Knob>
    </Module>
  );
};

export default DualProcessor;
