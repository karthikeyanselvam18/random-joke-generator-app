import React from "react";
import CopyTextButton from "./CopyTextButton";

export default function Joke(props) {
  const { setup, punchline } = props.joke;

  return (
    <div className="main">
      <div className="joke-box">
        {setup && <p className="title">Setup:</p>}
        <p className="joke">{setup}</p>
        {punchline && <p className="title">Punchline:</p>}
        <p className="joke">{punchline}</p>
      </div>
      <CopyTextButton textToCopy={`Setup: ${setup} Punchline: ${punchline}`} />
    </div>
  );
}
