import React, { useContext } from "react";
import { engineContext } from "../rack";

const Module = ({ children }) => {
  const engine = useContext(engineContext);
  return children(engine);
};

export default Module;
