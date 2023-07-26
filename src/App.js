import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import GenerateButton from "./GenerateButton";

export default function App() {
  const [jokes, setJokes] = React.useState([]);
  const [isSingleJoke, setIsSingleJoke] = React.useState(true);
  React.useEffect(() => {
    fetchRandomJoke();
  }, []);

  function fetchRandomJoke() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }

  function GenerateJoke() {
    fetchRandomJoke();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const elements = jokes.map((joke) => (
    <Main joke={joke} GenerateJoke={GenerateJoke} />
  ));

  function isSingleJokeFunction(event) {
    const { name } = event.target;
    const contition =
      (name == "singleJoke" && !isSingleJoke) ||
      (name == "tenJokes" && isSingleJoke);
    if (contition) {
      setIsSingleJoke((prev) => !prev);
    }
  }

  return (
    <>
      <Navbar
        isSingleJoke={isSingleJoke}
        isSingleJokeFunction={isSingleJokeFunction}
      />
      {isSingleJoke ? elements[0] : elements}
      {jokes.length > 0 && (
        <GenerateButton
          GenerateJoke={GenerateJoke}
          isSingleJoke={isSingleJoke}
        />
      )}
    </>
  );
}
