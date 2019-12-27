import React from "react";

const Knob = ({ value }) => {
  const rotation = (value / 100) * 270;
  return (
    <svg
      version="1.1"
      width="138.97034"
      height="139.26537"
      viewBox="0 0 36.769234 36.847296"
    >
      <g transform="translate(1.5896488,11.370325)">
        <g id="g4104" transform={`rotate(-64,16.917087,7.2302417)`}>
          <g transform={`rotate(${rotation},16.917087,7.2302417)`}>
            <path
              fill="#1f1a17"
              fillOpacity={1}
              fillRule="evenodd"
              stroke="none"
              d="m 0,0 -0.12,0.24 -0.06,0.18 v 0.24 l -0.06,0.18 v 0.84 l 0.06,0.24 V 2.16 L -0.12,2.34 0,2.82 0.06,3 0.12,3.24 0.24,3.48 0.36,3.9 0.54,4.38 0.6,4.56 0.66,4.8 0.78,5.04 0.84,5.22 0.96,5.7 1.02,5.94 1.08,6.18 V 6.36 L 1.14,6.6 V 7.5 L 1.08,7.74 V 7.92 L 1.02,8.16 0.9,8.64 0.84,8.82 0.78,9.06 0.66,9.3 0.6,9.54 0.54,9.72 0.36,10.2 0.24,10.62 0.12,10.86 0.06,11.1 0,11.28 l -0.12,0.48 -0.06,0.18 v 0.24 l -0.06,0.24 v 0.84 l 0.06,0.18 v 0.24 l 0.06,0.18 0.12,0.24 0.06,0.18 0.48,0.72 0.18,0.12 0.12,0.18 0.72,0.48 0.24,0.12 0.36,0.24 0.24,0.12 0.18,0.12 0.42,0.18 0.48,0.18 0.18,0.12 0.24,0.12 0.18,0.12 0.24,0.12 0.18,0.06 0.24,0.12 0.36,0.24 0.18,0.18 0.36,0.24 0.18,0.18 0.12,0.18 0.3,0.3 0.12,0.24 0.36,0.54 0.12,0.24 0.12,0.18 0.12,0.24 0.06,0.18 0.12,0.24 0.24,0.42 0.18,0.42 0.12,0.24 0.12,0.18 0.06,0.24 0.48,0.72 0.18,0.18 0.12,0.18 0.3,0.3 0.9,0.6 0.24,0.06 0.36,0.12 h 0.48 l 0.18,0.06 0.24,-0.06 h 0.42 l 0.24,-0.06 0.18,-0.06 0.48,-0.12 0.18,-0.06 0.48,-0.12 0.42,-0.18 0.48,-0.18 0.18,-0.06 0.48,-0.12 0.24,-0.12 0.18,-0.06 0.48,-0.12 h 0.24 l 0.18,-0.06 h 0.24 l 0.24,-0.06 h 0.42 l 0.24,0.06 h 0.24 l 0.24,0.06 h 0.18 l 0.72,0.18 0.18,0.12 0.72,0.18 0.42,0.18 0.48,0.18 0.18,0.06 0.72,0.18 0.18,0.06 0.24,0.06 0.18,0.06 h 0.48 l 0.18,0.06 0.24,-0.06 h 0.42 l 0.18,-0.06 0.24,-0.06 0.18,-0.06 0.24,-0.12 0.54,-0.36 0.6,-0.6 0.48,-0.72 0.12,-0.24 0.24,-0.36 0.06,-0.24 0.24,-0.42 0.18,-0.42 0.12,-0.24 0.12,-0.18 0.06,-0.24 0.12,-0.18 0.12,-0.24 0.36,-0.54 0.18,-0.24 0.12,-0.12 0.12,-0.18 0.48,-0.48 0.18,-0.12 0.18,-0.18 0.24,-0.12 0.36,-0.24 0.24,-0.06 0.18,-0.12 0.24,-0.12 0.18,-0.12 0.24,-0.12 0.84,-0.36 0.24,-0.12 0.18,-0.12 0.24,-0.12 1.08,-0.72 0.3,-0.3 0.12,-0.18 0.18,-0.18 0.06,-0.18 0.24,-0.36 0.06,-0.24 0.06,-0.18 0.06,-0.24 v -0.18 l 0.06,-0.24 V 12.84 L 34.26,12.6 V 12.18 L 34.2,11.94 34.14,11.76 34.02,11.28 33.96,11.1 33.9,10.86 33.84,10.62 33.66,10.2 33.54,9.72 33.42,9.54 33.36,9.3 33.3,9.06 33.24,8.82 33.12,8.64 33.06,8.4 33,8.16 V 7.92 L 32.94,7.74 V 7.5 L 32.88,7.26 V 6.84 L 32.94,6.6 V 6.36 L 33,6.18 V 5.94 L 33.06,5.7 33.12,5.46 33.24,5.22 33.3,5.04 33.36,4.8 33.42,4.56 33.54,4.38 33.66,3.9 33.84,3.48 33.96,3 34.02,2.82 34.14,2.34 34.2,2.16 34.26,1.92 V 1.5 L 34.32,1.26 V 1.08 L 34.26,0.84 V 0.6 L 34.2,0.42 34.14,0.24 34.08,0 33.48,-0.9 33.18,-1.2 32.64,-1.56 32.46,-1.74 32.28,-1.86 32.1,-1.92 31.86,-2.04 31.68,-2.16 31.44,-2.28 31.02,-2.46 30.6,-2.7 30.36,-2.76 30.18,-2.88 29.94,-3 29.76,-3.12 29.52,-3.24 29.34,-3.3 29.16,-3.48 28.92,-3.6 28.56,-3.84 28.44,-4.02 28.26,-4.14 28.08,-4.32 27.84,-4.68 27.66,-4.86 27.42,-5.22 27.3,-5.46 27.06,-5.82 27,-6.06 26.88,-6.3 26.76,-6.48 26.58,-6.9 l -0.24,-0.42 -0.06,-0.24 -0.12,-0.18 -0.12,-0.24 -0.6,-0.9 -0.18,-0.18 -0.12,-0.18 -0.18,-0.12 -0.3,-0.3 -0.18,-0.06 -0.18,-0.12 -0.24,-0.12 -0.18,-0.06 -0.24,-0.06 -0.18,-0.06 H 23.22 L 23.04,-10.2 H 22.8 l -0.18,0.06 h -0.48 l -0.18,0.06 -0.24,0.06 -0.18,0.06 -0.72,0.18 -0.18,0.06 -0.48,0.18 -0.42,0.12 -0.24,0.12 -0.48,0.12 -0.18,0.06 L 18.6,-9 h -0.24 l -0.24,0.06 -0.18,0.06 -0.24,0.06 H 17.22 L 17.04,-8.76 16.8,-8.82 H 16.32 L 16.14,-8.88 15.66,-9 h -0.24 l -0.18,-0.12 -0.72,-0.18 -0.18,-0.12 -0.48,-0.12 -0.42,-0.18 -0.48,-0.12 -0.18,-0.06 -0.48,-0.12 -0.18,-0.06 -0.24,-0.06 h -0.42 l -0.24,-0.06 h -0.18 l -0.24,0.06 H 10.56 L 10.2,-10.02 9.96,-9.96 9.6,-9.72 9.42,-9.66 9.24,-9.48 8.88,-9.24 8.64,-8.88 8.46,-8.7 7.98,-7.98 7.92,-7.74 7.8,-7.56 7.68,-7.32 7.5,-6.9 7.26,-6.48 7.14,-6.24 7.08,-6.06 6.96,-5.82 6.72,-5.46 6.6,-5.22 6.12,-4.5 5.94,-4.32 5.82,-4.14 5.64,-4.02 5.46,-3.84 4.92,-3.48 4.74,-3.3 4.5,-3.24 4.32,-3.12 4.08,-3 3.9,-2.88 3.66,-2.76 3.48,-2.7 3,-2.46 2.58,-2.28 2.4,-2.16 2.16,-2.04 1.98,-1.92 1.8,-1.86 1.56,-1.74 1.38,-1.56 0.84,-1.2 0.72,-1.02 0.54,-0.9 0.06,-0.18 0,0"
            />
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="none"
              d="M 0,0 -0.78,1.74 17.16,9.36 17.88,7.56 0,0"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Knob;
