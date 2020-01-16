import React, { createContext, useRef, useReducer } from "react";

export const rackContext = createContext(null);

const Rack = ({ children }) => {
  const engineRef = useRef(null);
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!engineRef.current) {
    engineRef.current = new AudioContext();
  }
  return (
    <rackContext.Provider value={{ engine: engineRef.current }}>
      {children}
    </rackContext.Provider>
  );
};

export default Rack;
