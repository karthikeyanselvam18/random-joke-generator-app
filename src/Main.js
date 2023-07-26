import React from "react";
import CopyTextButton from "./CopyTextButton";
import WhatsAppShareButton from "./WhatsappShareButton";

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
      <div className="button-cont">
        <CopyTextButton
          textToCopy={`Setup: ${setup}\n\nPunchline: ${punchline}`}
        />
        <WhatsAppShareButton
          textToShare={`whatsapp://send?text=Setup:%20${encodeURIComponent(
            setup
          )}%0A%0APunchline:%20${encodeURIComponent(punchline)}`}
        />
      </div>
    </div>
  );
}
