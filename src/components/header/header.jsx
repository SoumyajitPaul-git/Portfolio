import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Soumya.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
         <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Soumyajit Paul</h1>
          <h5 className='text-light'>Computer Science Undergrad</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
          </div> 
    </header>
  )
}

export default header



