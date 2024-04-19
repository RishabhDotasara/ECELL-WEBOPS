import React, { useState } from 'react'
import { IoMdMail } from "react-icons/io";
import FileComponent from './FileComponent';


export default function Mails() {

    const [mails,setMails] = useState([
        {
            title:"This is a mail.",
            by:"Author"
        },
        {
            title:"This is a mail.",
            by:"Author"
        },
        
    ])
  return (
    <>
      <div className="mail-header"><IoMdMail style={{backgroundColor:"white"}}/></div>
      <div className="mail-mails">
            {mails.map((mail)=>{
                return (
                    <FileComponent title={mail.title} by={mail.by}/>
                )
            })}
      </div>
    </>
  )
}
