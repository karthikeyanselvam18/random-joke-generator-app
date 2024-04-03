import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Joke } from "./components/Joke";
import { JsxAttribute } from "typescript";
function App() {
  const [jokes, setJokes]: any = useState([]);
  const [darkMode, setDarkMode]: any = useState(false);
  useEffect(() => {
    const api = "https://official-joke-api.appspot.com/random_ten";
    fetch(api)
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <div className="jokes-container">
        {jokes.map((joke: any, index: number) => (
          <Joke key={index} setup={joke.setup} punchline={joke.punchline} />
        ))}
      </div>
    </div>
  );
}

export default App;
