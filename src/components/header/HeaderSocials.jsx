import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/soumyajit-paul/" target='blank'><FaLinkedin /></a>
        <a href="https://github.com/SoumyajitPaul-git" target='blank'><FaGithub /></a>
        <a href="mailto:soumyajit@gmail.com" target='blank'><MdEmail /></a>
        
    </div>
  )
}

export default HeaderSocials