
import React from "react";
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


export default function SocialMedia() {
  return (
    <>
      <span className="sm-links">
        <FaLinkedin style={{backgroundColor:"white"}}/>
      </span>
      <span className="sm-links">
        <FaInstagram style={{backgroundColor:"white"}}/>
      </span>
      <span className="sm-links">
        <FaYoutube style={{backgroundColor:"white"}}/>
      </span>
      <span className="sm-links">
        <FaTwitter style={{backgroundColor:"white"}}/>
      </span>
      <span className="sm-links">
        <FaDiscord style={{backgroundColor:"white"}}/>
      </span>
      

    </>
  );
}
