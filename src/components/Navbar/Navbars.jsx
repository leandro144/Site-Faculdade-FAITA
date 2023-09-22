import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Container, Nav} from '../styled'

const Navbars = () => {

const [show, setShow] = useState(false);


return (
<Container>
  <Nav>
    <div className="center">
      <div className="logo"><img src={logo} alt="" /></div>
      <ul className='toggle__desktop'>
        <li><a href="#">Início</a></li>
        <li><a href="#About">Sobre</a></li>
        <li><a href="https://faculdadefaita.com.br/sessao-2?tutors=0&courses=0">Cursos</a></li>
        <NavDropdown className='idem' title="Graduação" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contact">Presencial</NavDropdown.Item>
              <NavDropdown.Item href="#contact">
                EAD
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='idem' title="Biblioteca" id="basic-nav-dropdown">
              <NavDropdown.Item href='https://sso.saraivaeducacao.com.br/login'>Saraiva</NavDropdown.Item>
              <NavDropdown.Item href="https://bdsolucto.librarika.com/search/catalogs">
                Solucto
              </NavDropdown.Item>
              <NavDropdown.Item href="https://bibliogratuita.curatoriaeditora.com.br/">
                Curatoria
              </NavDropdown.Item>
            </NavDropdown>
        <li><a href="#contact">Contato</a></li>
        <li><a href="https://faculdadefaita.com.br/sys">Acesso ao Portal</a></li>
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
          <NavDropdown className='idem' title="Graduação" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Presencial</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                EAD
              </NavDropdown.Item>
            </NavDropdown>
          <li><a href="#contact">Contato</a></li>
          <li><a href="https://faculdadefaita.com.br/sys">Acesso ao Portal</a></li>
        </ul>
      </div> ) : null}
    </div>
  </Nav>
</Container>
)
}


export default Navbars;