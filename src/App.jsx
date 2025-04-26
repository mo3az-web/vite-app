import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ProjectsSection from './components/projects'
import About from './components/about'
import Skills from './components/skills'
import ContactSection from './components/contactus'
function App() {
  return(
    <>
      <Navbar />
      <About />
      <Skills></Skills>
      <ProjectsSection />
      <ContactSection/>
      </>

  );

}

export default App
