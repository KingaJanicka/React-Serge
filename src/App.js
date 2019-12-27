import React from "react";
import "./App.css";
import Rack from "./rack";
import Row from "./row";
import TestOsc from "./util/test-osc";
import Oscilloscope from "./oscilloscope";
import BlueControl from "./blue-control";
import Knob from "./knob";
function App() {
  return (
    <Rack>
      <Row>
        <Knob value="50" />
        <BlueControl></BlueControl>
      </Row>
    </Rack>
  );
}

export default App;
