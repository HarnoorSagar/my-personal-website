import React from 'react'
import './Main.css' /* Imports the css file for this react file */
import main_pic from '../../assets/main_pic.jpg' /*imports the image from assets in the react folder*/
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Main = () => {
  return (
    <div id="home" className='main'>
        <img src={main_pic} alt="" />
        <h1><span>I'm Harnoor Sagar,</span> Engineering 1 (Co-op) Student at McMaster University! </h1>
        <p>I thoroughly enjoy exploring various software and programming languages to expand my knowledge and create innovative solutions to real-world problems.</p>
        <div className="main-action">
            <div className="main-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="main-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Main