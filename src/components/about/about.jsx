import React from 'react'
import './about.css'
import ME from '../../assets/Soumya_port.jpg'
import { FaAward } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" >
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
            </article>
            <article className='about__card'>
            <IoBookSharp className='about__icon'/> 
            <h5>Education</h5>
            <small>B.Tech in CSE</small>
            </article>
            <article className='about__card'>
            <IoFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Completed</small>
            </article>
          </div>

          <p>
          I'm Soumyajit Paul, a programmer skilled in Python, C, C++, and JavaScript, with a keen interest in blockchain technology and machine learning. My focus lies in data analysis using Pandas and Numpy, as well as web development utilizing HTML, CSS, and React Js to create robust software solutions. I'm experienced in MySQL database management and object-oriented programming. Committed to continuous growth, I aim to make meaningful contributions to the tech industry by integrating blockchain and machine learning into innovative projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About