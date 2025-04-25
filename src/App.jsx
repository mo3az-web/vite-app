import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ProjectsSection from './components/projects'
import About from './components/about'
import Skills from './components/skills'
function App() {
  return(
    <>
      <Navbar />
      <About />
      <Skills></Skills>
      <ProjectsSection />
      </>

  );

}

export default App
