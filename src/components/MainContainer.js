import React, { useState } from "react";

export default function MainContainer() {
  const [file, setFile] = useState("");
  return (
    <div className="main-container">
      <div className="ent-panel">
        {/* <div className="header">Entertainment</div> */}
        <div className="spotify-panel">Yha spotify aayega</div>
        <div className="social-media-panel">Yha social media apps</div>
        <div className="todo-panel">Todo</div>
      </div>
      <div className="working-area"></div>
      <div className="work-panel">
        {/* <div className="header">Work</div> */}
        <div className="files-panel">Files</div>
        <div className="mails-panel">Mails</div>
      </div>
    </div>
  );
}
