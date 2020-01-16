import React, { useRef, useEffect, useContext } from "react";
import { engineContext } from "../rack";

const Oscilloscope = ({ input, width, height }) => {
  const canvas = useRef(null);
  const analyser = useRef(null);
  const { engine } = useContext(engineContext);

  useEffect(() => {
    if (engine && input) {
      analyser.current = engine.createAnalyser();
      input.connect(analyser);
      analyser.fftSize = 2048;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const canvasCtx = canvas.current.getContext("2d");
      canvasCtx.clearRect(0, 0, width, height);

      const draw = () => {
        window.requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);
        canvasCtx.fillStyle = "rgb(200,200,200)";
        canvasCtx.fillRect(0, 0, width, height);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "rgb(0,200,0)";
        canvasCtx.beginPath();
        const sliceWidth = (width * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          let v = dataArray[i] / 128.0;
          let y = (v * height) / 2;
          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }
          x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      };

      window.requestAnimationFrame(draw);
    }
  }, [engine, height, input, width]);

  return <canvas width={width} height={height} ref={canvas}></canvas>;
};

Oscilloscope.defaultProps = {
  width: 500,
  height: 500
};

export default Oscilloscope;
