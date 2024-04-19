import React, { useState } from 'react'
import { PiFilesFill } from "react-icons/pi";
import FileComponent from './FileComponent';

export default function Files() {
      
      
    const [files,setFiles] = useState([
        {
            title:"File",
            by:"Author"
        },
        {
            title:"File",
            by:"Author"
        },
        {
            title:"File",
            by:"Author"
        },
    ])
  return (
    <>
        <div className="files-header"><PiFilesFill style={{backgroundColor:"white"}}/></div>
        <div className="files-file">
            {files.map((file)=>{
                return (
                    <FileComponent title={file.title} by={file.by}/>
                )
            })}
      </div>
    </>
  )
}
