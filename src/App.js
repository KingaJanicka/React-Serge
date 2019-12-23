import React from "react";
import "./App.css";
import Rack from "./rack";
import Row from "./row";
import TestOsc from "./util/test-osc";
import Oscilloscope from "./oscilloscope";

function App() {
  return (
    <Rack>
      <Row>
        <TestOsc />
        <Oscilloscope width={1000} height={1000} />
      </Row>
    </Rack>
  );
}

export default App;
