import React from "react";

export default function GenerateButton(props) {
  return (
    <button className="randomButton" onClick={props.GenerateJoke}>
      {props.isSingleJoke
        ? "Generate a random joke"
        : "Generate 10 random joke"}
    </button>
  );
}
