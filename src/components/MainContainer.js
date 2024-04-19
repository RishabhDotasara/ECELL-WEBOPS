import React, { useEffect, useState } from "react";

import SocialMedia from "./SocialMedia";
import SpotifyPanel from "./SpotifyPanel";
import Mails from "./Mails";
import Files from "./Files";
import Todo from "./Todo";
import { MdDateRange } from "react-icons/md";


export default function MainContainer() {
  const [file, setFile] = useState(-1);
  const [datetoday,setDate] = useState();

  
  useEffect(()=>{
    const today = new Date();
    setDate(`${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`);
  },[])

  return (
    <div className="main-container">
      <div className="ent-panel">
        {/* <div className="header">Entertainment</div> */}
        <div className="spotify-panel">
          <SpotifyPanel/>
        </div>
        <div className="social-media-panel">
            <SocialMedia/>
        </div>
        <div className="mails-panel"><Mails/></div>
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
        <div className="files-panel"><Files/></div>
        <div className="calender-panel">
            <div className="calender-header"><MdDateRange style={{backgroundColor:"white"}}/></div>
            <div className="date-today">
                {datetoday}
            </div>
        </div>
        <div className="todos-panel"><Todo/></div>
      </div>
    </div>
  );
}
