import React, { createContext, useRef } from "react";
export const engineContext = createContext(null);
const Rack = ({ children }) => {
  const engineRef = useRef(null);
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!engineRef.current) {
    engineRef.current = new AudioContext();
  }
  return (
    <engineContext.Provider value={engineRef.current}>
      {children}
    </engineContext.Provider>
  );
};

export default Rack;
