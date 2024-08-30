import React from 'react'
import Navbar from './Components/navbar/Navbar' /*The files from that component is mounted to this main web file */
import Main from './Components/Main/Main'
import About from './Components/About/about'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import { Contact } from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  <meta name='viewport' content='width=device-width, initial scale=1.0'></meta>
  
  return (
    <div>
      <Navbar/> 
      <Main/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App