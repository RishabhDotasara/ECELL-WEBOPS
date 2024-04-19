import React, { useState } from "react";

import SocialMedia from "./SocialMedia";


export default function MainContainer() {
  const [file, setFile] = useState(-1);
  return (
    <div className="main-container">
      <div className="ent-panel">
        {/* <div className="header">Entertainment</div> */}
        <div className="spotify-panel">Yha spotify aayega</div>
        <div className="social-media-panel">
            <SocialMedia/>
        </div>
        <div className="mails-panel">mails</div>
      </div>
      <div className="working-area">
        {file !== -1 && (
          <div>
            <h1>This is the working area</h1>
          </div>
        )}
        {file === -1 && <span className="filler">No File Opened!</span>}
      </div>
      <div className="work-panel">
        {/* <div className="header">Work</div> */}
        <div className="files-panel">Files</div>
        <div className="calender-panel">
           
        </div>
        <div className="todo-panel">Todo</div>
      </div>
    </div>
  );
}
