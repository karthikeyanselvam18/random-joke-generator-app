import React from "react";
import logo from "./image/laugh.png";

export default function Navbar(props) {
  const singleJokeStyle = props.isSingleJoke
    ? { backgroundColor: "#252525", color: "#e9e9e9" }
    : {};

  const tenJokesStyle = props.isSingleJoke
    ? {}
    : { backgroundColor: "#252525", color: "#e9e9e9" };

  return (
    <div className="navbar">
      <img src={logo} className="logo-img" />
      <h3 className="logo">Random Joke</h3>
      <ul className="menu">
        <button
          style={singleJokeStyle}
          name="singleJoke"
          onClick={props.isSingleJokeFunction}
        >
          Single joke
        </button>
        <button
          style={tenJokesStyle}
          name="tenJokes"
          onClick={props.isSingleJokeFunction}
        >
          Ten jokes
        </button>
      </ul>
    </div>
  );
}
