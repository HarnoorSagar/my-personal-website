import React, { useState } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profileme from '../../assets/about_profileme.jpg'

// TODO: Change the paragraph in the about section
// TODO: Fill in the skills and extracurriculars

const About = () => {
const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) => {
    setToggleState(index)
}
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={about_profileme} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Grade 12 student at Maxwell Heights Secondary School. I am an aspiring Web Developer and UI/UX Designer and have a passion for learning multiple programming languages. </p>
                    <p>At the moment, I am working towards developing my skills in HTML5, CSS3, and JavaScript. I plan on pursuing a degree in Computer Science or Software Engineering in the future to achieve my career goals.</p>
                </div>

                <div className="container">
                    <div className="bloc-tabs">
                        <button className={toggleState === 1? 'tabs active-tabs' : 'tabs'}  onClick={()=> toggleTab(1)}>Skills</button>
                        <button className={toggleState === 2? 'tabs active-tabs' : 'tabs'}  onClick={()=> toggleTab(2)}>Education</button>
                        <button className={toggleState === 3? 'tabs active-tabs' : 'tabs'}  onClick={()=> toggleTab(3)}>Extracurriculars</button>
                    </div>

                    <div className="content-tabs">
                        <div className={toggleState === 1? 'content active-content': 'content'}>
                            <ul>
                                <li>
                                    <span>2024-Present</span><br />Engineering 1 (Co-op) - McMaster University
                                </li>
                                <li>
                                    <span>2020-2024</span><br />Maxwell Heights Secondary School
                                </li>
                            </ul>
                        </div>

                        <div className={toggleState === 2? 'content active-content': 'content'}>
                            <ul>
                                <li>
                                    <span>2024-Present</span><br />Engineering 1 (Co-op) - McMaster University
                                </li>
                                <li>
                                    <span>2020-2024</span><br />Maxwell Heights Secondary School
                                </li>
                            </ul>
                        </div>

                        <div className={toggleState === 3? 'content active-content': 'content'}>
                            <ul>
                                <li>
                                    <span>2024-Present</span><br />Engineering 1 (Co-op) - McMaster University
                                </li>
                                <li>
                                    <span>2020-2024</span><br />Maxwell Heights Secondary School
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About