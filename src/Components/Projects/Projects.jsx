import React, { useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MoneyHeistVid from '../../assets/MoneyHeistVid.mp4'
import JailBreakVid from '../../assets/JailBreakVid.mp4'
import main from '../../assets/main.png'
import buy from '../../assets/buy.png'
import sell from '../../assets/sell.png'
import exchange from '../../assets/exchange.png'
import donate from '../../assets/donate.png'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Projects = () => {

    const images = [
        {src: main, alt : "Image 1"},
        {src: buy, alt : "Image 2"},
        {src: sell, alt : "Image 3"},
        {src: exchange, alt : "Image 4"},
        {src: donate, alt : "Image 5"},
    ]
    
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === images.length - 1 ? 0 : slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? images.length - 1 : slide - 1);
    }

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <div id="projects" className='projects'>
        <div className="projects-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="projects-container">
            <div className="projects-bloc-tabs">
                <button className={toggleState === 1? 'projects-tabs projects-active-tabs' : 'projects-tabs'}  onClick={()=> toggleTab(1)}>ShelfSwap</button>
                <button className={toggleState === 2? 'projects-tabs projects-active-tabs' : 'projects-tabs'}  onClick={()=> toggleTab(2)}>Money Heist</button>
                <button className={toggleState === 3? 'projects-tabs projects-active-tabs' : 'projects-tabs'}  onClick={()=> toggleTab(3)}>Jail Break</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1? 'projects-content active-content': 'projects-content'}>
                    <div className="projects-text">
                        <h1>ShelfSwap: Where Book Lovers Unite</h1>
                        <div className = "carousel">
                            <BsArrowLeftCircleFill className = "arrow arrow-left" onClick={prevSlide}/>
                            {images.map((item, idx) => {
                                return (
                                    <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : 'slide slide-hidden'}/> 
                                );
                            })}
                            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
                            <span className='indicators'>
                                {images.map((_, idx) => {
                                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}></button>
                                })}
                            </span>
                        </div>
                        <p> Paper is a major environmental issue, making up approximately 26% of total waste in landfills around the world. Around 320 million books are discarded every single year, many of them being unread. Our mission was to create an application that not only reduces this waste but also provides a seamless, sustainable way for users to access and share the books they love. Our app empowers users to buy, sell, and exchange books within a vibrant community of book enthusiasts or donate them to institutions in need.
                        <br></br>
                        <br></br>   
                        The backend functionality of the buy/sell feature was developed using Python and SQLite to develop a robust database system that would manage and query book data efficiently. One aspect of the frontend was developed using HTML, CSS, and JavaScript where we integrated the Google Books API to allow users to be able to get the title, author, and decription of their book by merely inputting the ISBN number. Finally, we developed a complete prototype of the app in Figma while keeping user interface and user experience aspects in mind.
                        <br></br>
                        <br></br>    
                        Here is the link to the <a target='_blank' href='https://github.com/HarnoorSagar/ShelfSwap'>Github,</a> 
                        <a target='_blank' href='https://devpost.com/software/shelfswap?ref_content=my-projects-tab&ref_feature=my_projects'> Devpost, </a>and
                        <a target='_blank' href='https://www.figma.com/proto/1VLzPyi5XSCS7t0tRaw9vu/ShelfSwap?page-id=0%3A1&node-id=48-268&p=f&viewport=151%2C237%2C0.35&t=Lyl8caQgdaQgTUnY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1'> Figma Prototype</a>.</p>
                    </div>
                </div>

                <div className={toggleState === 2? 'projects-content active-content': 'projects-content'}>
                    <div className="projects-text">
                        <h1>Money Heist: Video Game</h1>
                        <div className="projects-video">
                            <video src={MoneyHeistVid} controls/>
                        </div>
                        <p> The purpose of this project was to create a two-player game where the user-controlled characters must work together in order to collect all the keys and bring them back to the vault before the time runs out. This game was created in C# using the Visual Studio 2015 IDE and the XNA Framework. 
                        <br></br>
                        <br></br>   
                        This game has been designed using object-oriented programming concepts, and is simple and fun to play. The players can control their characters using an Xbox controller or a laptop/PC keyboard. The UI/UX interface is clean and has been created in a way that is fun to interact with.
                        <br></br>
                        <br></br>    
                        The code for this project can be viewed <a target='_blank' href='https://github.com/HarnoorSagar/Money-Heist'>here</a>.</p>
                    </div>
                    
                </div>

                <div className={toggleState === 3? 'projects-content active-content': 'projects-content'}>
                    <div className="projects-text">
                        <h1>JailBreak: Video Game</h1>
                        <div className="projects-video">
                            <video src={JailBreakVid} controls/>
                        </div>
                        <p> JailBreak is a video game where two brothers have escaped from prison and are collecting money bags to survive. This game was created in C# using Visual Studio 2015.This game is a two-player platform game where the brothers are working together to collect money bags. If they touch the green acid, they are teleported back to their starting positions. They have 45 seconds to collect all 10 coins, or they lose. If they collect all 10 coins before the time runs out, they win. Every time they complete the game in less time, the high score is updated to reflect the time they used. 
                        <br></br>
                        <br></br>   
                        This game is simple and fun to play, and the players can control their characters using a laptop/PC keyboard. The UI/UX interface is clean and has been created in a way that is fun to interact with.
                        <br></br>
                        <br></br>    
                        The code for this project can be viewed <a target='_blank' href='https://github.com/HarnoorSagar/JailBreak'>here</a>.</p>
                    </div>
                    
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Projects