import React, { useRef } from "react";
import Module from "../module";

const TestOsc = ({ children }) => {
  const ref = useRef(null);
  return (
    <Module>
      {engine => {
        if (!ref.current) {
          ref.current = engine.createOscillator();
          ref.current.connect(engine.destination);
          ref.current.start();
        }
        return <div>Test Oscillator</div>;
      }}
    </Module>
  );
};

export default TestOsc;
