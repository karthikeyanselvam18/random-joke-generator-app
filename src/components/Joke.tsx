export interface IJokeProps {
  setup: string;
  punchline: string;
}

export function Joke(props: IJokeProps) {
  const setup = props.setup;
  const punchline = props.punchline;
  const message = `Setup:\n${setup}\n\nPunchline:\n${punchline}`;
  function handleCopyToClipboard() {
    const textField = document.createElement("textarea");
    textField.value = message;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <div className="joke-component">
      <div className="setup-container">
        <span>Setup:</span>
        <span className="setup">{setup}</span>
      </div>
      <div className="punchline-container">
        <span>Punchline:</span>
        <span className="punchline">{punchline}</span>
      </div>
      <div className="share-buttons">
        <a href={`whatsapp://send?text=${encodeURIComponent(message)}`}>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#" onClick={() => handleCopyToClipboard()}>
          <i className="fa-regular fa-copy"></i>
        </a>
      </div>
    </div>
  );
}
