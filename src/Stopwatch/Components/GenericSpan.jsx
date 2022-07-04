import React from "react";

function GenericSpan(props) {
  switch (props.type) {
    case "start":
      return (
        <p
          className="startTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </p>
      );
    case "stop":
      return (
        <p
          className="stopTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </p>
      );
    case "timer":
      return (
        <p
          className="timerValue"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </p>
      );
    case "pause":
      return (
        <p
          className="pauseTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </p>
      );
    case "resume":
      return (
        <p
          className="resumeTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </p>
      );
    default:
      return <p className={props.className}>{props.text}</p>;
  }
}

export default GenericSpan;
