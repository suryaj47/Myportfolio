import React from 'react'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import Home from './pages/home'
import Skills from './pages/skills'
import Achievements from './pages/achievements'
import Contact from './pages/contact'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {


  return (
<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
           <Route path="/contact" element={<Contact />} />
          

      </Routes>
    </Router>
  )
}

export default App
