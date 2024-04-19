import React, { useState } from 'react'
import { IoMdMail } from "react-icons/io";


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
                    <div className="mail">
                        <span className='title'>{mail.title}</span>
                        <span className='by'>{mail.by}</span>
                    </div>
                )
            })}
      </div>
    </>
  )
}
