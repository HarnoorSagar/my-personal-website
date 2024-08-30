import React, { useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MoneyHeistVid from '../../assets/MoneyHeistVid.mp4'

const Projects = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <div className='projects'>
        <div className="projects-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="projects-container">
            <div className="projects-bloc-tabs">
                <button className={toggleState === 1? 'projects-tabs projects-active-tabs' : 'projects-tabs'}  onClick={()=> toggleTab(1)}>Project 1</button>
                <button className={toggleState === 2? 'projects-tabs projects-active-tabs' : 'projects-tabs'}  onClick={()=> toggleTab(2)}>Project 2</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1? 'projects-content active-content': 'projects-content'}>
                    <div className="projects-text">
                        <h1>Money Heist: Video Game</h1>
                        <p> The purpose of this project was to create a two-player game where the user-controlled characters must work together in order to collect all the keys and bring them back to the vault before the time runs out. This game was created in C# using the Visual Studio 2015 IDE and the XNA Framework. 
                        <br></br>
                        <br></br>   
                        This game has been designed using object-oriented programming concepts, and is simple and fun to play. The players can control their characters using an Xbox controller or a laptop/PC keyboard. The UI/UX interface is clean and has been created in a way that is fun to interact with.
                        <br></br>
                        <br></br>    
                        The code for this project can be viewed <a target='_blank' href='https://github.com/HarnoorSagar/Money-Heist'>here</a>.</p>
                    </div>
                    <div className="projects-video">
                        <video src={MoneyHeistVid} controls/>
                    </div>
                </div>

                <div className={toggleState === 2? 'projects-content active-content': 'projects-content'}>
                <div className="projects-text">
                        <h1>Money Heist: Video Game</h1>
                        <p> The purpose of this project was to create a two-player game where the user-controlled characters must work together in order to collect all the keys and bring them back to the vault before the time runs out. This game was created in C# using the Visual Studio 2015 IDE and the XNA Framework. 
                        <br></br>
                        <br></br>   
                        This game has been designed using object-oriented programming concepts, and is simple and fun to play. The players can control their characters using an Xbox controller or a laptop/PC keyboard. The UI/UX interface is clean and has been created in a way that is fun to interact with.
                        <br></br>
                        <br></br>    
                        The code for this project can be viewed <a target='_blank' href='https://github.com/HarnoorSagar/Money-Heist'>here</a>.</p>
                    </div>
                    <div className="projects-video">
                        <video src={MoneyHeistVid} controls/>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Projects