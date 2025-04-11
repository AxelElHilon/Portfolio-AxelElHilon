import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact  from './components/Contact'
import Project1 from "./components/projects/Proyect1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
import Project4 from "./components/projects/Project4";
import Project5 from "./components/projects/Project5";
import Project6 from "./components/projects/Project6";
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark bg-[#1a1a1a] text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/proyecto2" element={<Project2 />} />
        <Route path="/projects/proyecto3" element={<Project3 />} />
        <Route path="/projects/proyecto4" element={<Project4 />} />
        <Route path="/projects/proyecto5" element={<Project5 />} />
        <Route path="/projects/proyecto6" element={<Project6 />} />
      </Routes>

      <Footer darkMode={darkMode} />
    </div>
  )
}


export default App
