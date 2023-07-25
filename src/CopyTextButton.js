import React from "react";
import Clipboard from "clipboard";
import copyLogo from "./image/copy.png";

export default function CopyTextButton({ textToCopy }) {
  const copyButtonRef = React.useRef(null);

  React.useEffect(() => {
    const clipboard = new Clipboard(copyButtonRef.current, {
      text: () => textToCopy,
    });

    return () => clipboard.destroy();
  }, [textToCopy]);

  return (
    <button className="logo-button" ref={copyButtonRef}>
      <img src={copyLogo} className="copyLogo" />
    </button>
  );
}
