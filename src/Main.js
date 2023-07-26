import React from "react";
import CopyTextButton from "./CopyTextButton";
import ShareButtons from "./ShareButtons";

export default function Joke(props) {
  const { setup, punchline } = props.joke;

  const contentUrl =
    "For more random joke : https://karthikeyanselvam18.github.io/random-joke-generator-app/";
  const jokeContent = `Setup: ${setup}\n\nPunchline: ${punchline}\n\n`;

  return (
    <div className="main">
      <div className="joke-box">
        {setup && <p className="title">Setup:</p>}
        <p className="joke">{setup}</p>
        {punchline && <p className="title">Punchline:</p>}
        <p className="joke">{punchline}</p>
      </div>
      <ShareButtons url={contentUrl} jokeContent={jokeContent} />
    </div>
  );
}
