import React, { useState } from "react";
import GenericSpan from "./Components/GenericSpan";

function Stopwatch() {
  const [stopWatchState, setStopWatchState] = useState(0);

  return (
    <>
      <div className="container">
        <div className="circle">
          {/* <p className="startTimer">Start</p> */}
          {/* <p className="stopTimer">Stop</p>
          <p className="timerValue">00:00:00</p>
          <p className="pauseTimer">Pause</p> */}
          {/* <p className="resumeTimer">Resume</p> */}
          {/* <GenericSpan
            type="start"
            text="Start"
            handleClick={() => {
              console.log("Start");
            }}
          /> */}

          {stopWatchState === 0 && (
            <>
              <GenericSpan
                type="start"
                text="Start"
                handleClick={() => {
                  // console.log("Start");
                  setStopWatchState(1);
                }}
              />
            </>
          )}

          {stopWatchState === 1 && (
            <>
              <GenericSpan
                type="stop"
                text="Stop"
                handleClick={() => {
                  // console.log("Stop");
                  setStopWatchState(0);
                }}
              />
              {/* <GenericSpan
                type="start"
                text="Start"
                handleClick={() => {
                  console.log("Start");
                }}
              /> */}
              <GenericSpan type="timer" text="00:00:00" />
              <GenericSpan
                type="pause"
                text="Pause"
                handleClick={() => {
                  // console.log("Pause");
                  setStopWatchState(2);
                }}
              />
            </>
          )}

          {stopWatchState === 2 && (
            <>
              <GenericSpan
                type="stop"
                text="Stop"
                handleClick={() => {
                  // console.log("Stop");
                  setStopWatchState(0);
                }}
              />
              {/* <GenericSpan
                type="start"
                text="Start"
                handleClick={() => {
                  console.log("Start");
                }}
              /> */}
              <GenericSpan type="timer" text="00:00:00" />
              <GenericSpan
                type="resume"
                text="Resume"
                handleClick={() => {
                  // console.log("Resume");
                  setStopWatchState(1);
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
