import React from "react";
import whatsapp from "./image/whatsapp.png";

export default function WhatsAppShareButton(props) {
  return (
    <a
      className="logo-button"
      href={props.textToShare}
      data-action="share/whatsapp/share"
      target="_blank"
    >
      <img src={whatsapp} className="whatsappLogo" />
    </a>
  );
}
