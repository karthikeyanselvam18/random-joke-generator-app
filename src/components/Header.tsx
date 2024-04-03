import * as React from "react";

export interface IHeaderProps {
  darkMode: boolean;
  setDarkMode: any;
}

export function Header(props: IHeaderProps) {
  function toggleTheme() {
    props.setDarkMode((prev: boolean) => !prev);
  }
  return (
    <header>
      <div className="logo">
        <h1 className="icon">
          <i className="fa-regular fa-face-smile-wink"></i>
        </h1>
        <h1 className="title">Random Joke Generator</h1>
      </div>
      <button onClick={toggleTheme}>
        {props.darkMode ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </header>
  );
}
