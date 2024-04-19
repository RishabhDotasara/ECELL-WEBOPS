import React, { useState } from 'react'
import { PiFilesFill } from "react-icons/pi";

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
                    <div className="file">
                        <span className='title'>{file.title}</span>
                        <span className='by'>{file.by}</span>
                    </div>
                )
            })}
      </div>
    </>
  )
}
