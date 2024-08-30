import React, { useEffect, useRef, useState } from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import TL_image from '../../assets/TL_image.jpg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import CYSC_2021 from '../../assets/CYSC_2021.jpg'
import student_image from '../../assets/student_image.jpg'

const Experience = () => {

// const [isOpen, setIsOpen] = useState(false)

// const paraStyles = {
//     WebkitLineClamp: 3,
//     WebkitBoxOrient: 'vertical',
//     overflow: 'hidden',
//     display: '-webkit-box',
// }

  return (
    <div id="experience" className='experience'>
        <div className="experience-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="experience-container">
            <div className="experience1-format">
                {/* DRPS YIP - Team Leader Experience */}
                <div className="TL-experience-left">
                    <h3>01</h3>
                    <h2>DRPS Youth In Policing</h2>
                    <p /*style={isOpen ? null: paraStyles}*/ >
                        <strong>Role: </strong> Team Leader &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>From: </strong> Nov 2023 - Mar 2024 <br></br><br></br>
                        As a Team Leader in the Youth In Policing, I supervised 80 students, worked with the snior leadership team to ensure smooth running of daily activities, and and led my team of 10 students to ensure the success of our event, the IMPACT Youth Forum.
                    </p>
                    <div className="links">
                        <a href='www.linkedin.com/in/harnoor-sagar' target='_blank'>
                            <button className="experience1-learnmore">
                                <p>Learn More!</p>
                            </button>
                        </a>

                        <a href='https://www.drps.ca/news/4th-annual-impact-youth-forum/' target='_blank'>
                            <button className="experience1-impact">
                                <p>IMPACT News Report!</p>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="TL-experience-right">
                    <img src={TL_image} alt="" />
                </div>
            </div>

            <div className="experience2-format">
                {/* DRPS YIP - Student Experience */}
                <div className="student-experience-left">
                    <img src={student_image} alt="" />
                </div>

                <div className="student-experience-right">
                    <h3>02</h3>
                    <h2>DRPS Youth In Policing</h2>
                    <p /*style={isOpen ? null: paraStyles}*/ >
                        <strong>Role: </strong> Student &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>From: </strong> Nov 2022 - Mar 2023 <br></br><br></br>
                        As a student in the Youth In Policing, I collaborated and networked with several like-minded colleagues to ensure the success of Youth In Policing events. Specifically, I planned and worked with team members to plan the Para Sports events, and assisted 40+ players with disabilities over the course of the events.
                    </p>
                    <div className="links">
                        <a href='www.linkedin.com/in/harnoor-sagar' target='_blank'>
                            <button className="experience2-learnmore">
                                <p>Learn More!</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="experience3-format">
                {/* Durham College - Volunteer Experience */}
                <div className="DC-experience-left">
                    <h3>03</h3>
                    <h2>Durham College</h2>
                    <p /*style={isOpen ? null: paraStyles}*/ >
                        <strong>Role: </strong> Social Media Content Creator (Volunteer) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>From: </strong> Dec 2021 - Dec 2023 <br></br><br></br>
                        As a Volunteer with the Durham College, I created social media content that would promote events that the School of IT, Business, and Management were conducting. I interacted with professors to gather information needed to create the content for various events such as hackathons, workshops, project shocases, and more!
                    </p>
                    <div className="links">
                        <a href='www.linkedin.com/in/harnoor-sagar' target='_blank'>
                            <button className="experience3-learnmore">
                                <p>Learn More!</p>
                            </button>
                        </a>

                        <a href='https://drive.google.com/drive/folders/1QftXRSpmj5qIF6lQ4JG93JAzdJxxzqZB?usp=sharing' target='_blank'>
                            <button className="experience3-posters">
                                <p>See More Content!</p>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="DC-experience-right">
                    <img src={CYSC_2021} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience