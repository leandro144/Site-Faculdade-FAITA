import React, { useState } from 'react'
import './Navbar.css'
import styled from "styled-components";
import logo from '../assets/logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import {Container, Nav} from '../styled'

const Navbar = () => {

const [show, setShow] = useState(false);

return (
<Container>
  <Nav>
    <div className="center">
      <div className="logo"><img src={logo} alt="" /></div>
      <ul className='toggle__desktop'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#About">Sobre</a></li>
        <li><a href="https://faculdadefaita.com.br/sessao-2?tutors=0&courses=0">Cursos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      {/* MENU MOBILE */}
      <div className="toggle__menu">
          <i className="icon__menu" onClick={() => setShow(!show)}><HiOutlineMenuAlt3 /></i>
      </div>
      {show ?(
      <div className="sideNavbar">
        <ul className="sidebar d__flex">
          <li><a href="#">Inicio</a></li>
          <li><a href="#About">Sobre</a></li>
          <li><a href="https://faculdadefaita.com.br/sessao-2?tutors=0&courses=0">Cursos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div> ) : null}
    </div>
  </Nav>
</Container>
)
}


export default Navbar