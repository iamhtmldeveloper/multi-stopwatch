import React from "react";

function GenericSpan(props) {
  switch (props.type) {
    case "start":
      return <p className="startTimer">{props.text}</p>;
    case "stop":
      return <p className="stopTimer">{props.text}</p>;
    case "timer":
      return <p className="timerValue">{props.text}</p>;
    case "pause":
      return <p className="pauseTimer">{props.text}</p>;
    case "resume":
      return <p className="resumeTimer">{props.text}</p>;
    default:
      return <p className={props.className}>{props.text}</p>;
  }
}

export default GenericSpan;
