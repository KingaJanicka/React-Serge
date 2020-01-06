import React from "react";
import Module from "../module";
import * as Jack from "../jack";
import Toggle from "../toggle";
import "./styles.css";
import Knob from "../knob";
import Light from "../light";
const DualUniversalSlopeGenerator = ({ className }) => {
  return (
    <Module
      name="Dual Universal Slope Generator"
      className="dual-universal-slope-generator"
    >
      <Jack.BlackJack /> <Jack.BlackJack /> <Jack.BlueJack />
      <Knob /> <Jack.BlueJack /> <Light />
      <Knob /> <Jack.BlueJack /> <Jack.RedJack />
      <Knob /> <Toggle /> <Jack.RedJack />
      <Jack.BlackJack /> <Jack.BlackJack /> <Jack.BlueJack />
      <Knob /> <Jack.BlueJack /> <Light />
      <Knob /> <Jack.BlueJack /> <Jack.RedJack />
      <Knob /> <Toggle /> <Jack.RedJack />
    </Module>
  );
};

export default DualUniversalSlopeGenerator;
