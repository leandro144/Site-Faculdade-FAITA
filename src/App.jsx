import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact'
import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar'


function App() {

  return (
    <>
      <SubNavbar/>
      <Navbar />
      <Main />
      <About />
      <Cards />
      <Courses />
      <Contact />
      <Footer />
    </>
      
  )
}

export default App
