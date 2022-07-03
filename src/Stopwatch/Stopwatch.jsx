import React from "react";
import GenericSpan from "./Components/GenericSpan";

function Stopwatch() {
  return (
    <>
      <div className="container">
        <div className="circle">
          {/* <p className="startTimer">Start</p> */}
          {/* <p className="stopTimer">Stop</p>
          <p className="timerValue">00:00:00</p>
          <p className="pauseTimer">Pause</p> */}
          {/* <p className="resumeTimer">Resume</p> */}
          <GenericSpan type="start" text="Start" />
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
