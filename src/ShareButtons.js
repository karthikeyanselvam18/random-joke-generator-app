import React from "react";
import CopyTextButton from "./CopyTextButton";
import whatsapp from "./image/whatsapp.png";
import facebook from "./image/facebook.png";
import twitter from "./image/twitter.png";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareButtons = ({ url, jokeContent }) => {
  return (
    <div className="share-buttons">
      <FacebookShareButton url={url} quote={jokeContent}>
        <img className="shareLogo" src={facebook} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={jokeContent}>
        <img className="shareLogo" src={twitter} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={jokeContent}>
        <img className="shareLogo" src={whatsapp} />
      </WhatsappShareButton>
      <CopyTextButton textToCopy={jokeContent} />
    </div>
  );
};

export default ShareButtons;
