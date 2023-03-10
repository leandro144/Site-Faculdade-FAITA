import React from 'react'
import './SubNavbar.css'
import {Container, Nav, Navbar} from '../styled'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter, BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const SubNavbar = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [darkMode, setDarkMode] = useState(false);


return (
<Container>
  <Navbar className={darkMode ? "dark-mode" : "light-mode" }>
    <Nav>
      <div className="center">
        <Button className='graduation' onClick={handleShow}>
          Acessibilidade
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Acessibilidade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={darkMode ? "dark-mode" : "light-mode" }>
              <div className="container">
                <div className="switch-checkbox">
                  <label className="switch">
                    <input type="checkbox" onChange={()=> setDarkMode(!darkMode)} />
                    <span className="slider round"> </span>
                  </label>
                </div>
              </div>
              <div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="disclosure"><a href="#contact">Graduação FAITA - Inscreva-se já!</a></div>
        <ul className='icons__link'>
          <li><a href="https://wa.me/5513974200501?text=Ol%C3%A1%2C+fiquei+interessado+na+faculdade."><i>
                <BsWhatsapp /></i></a></li>
          <li><a href="https://www.instagram.com/faculdadefaita/"><i>
                <BsInstagram /></i></a></li>
          <li><a href="https://www.facebook.com/faculdadeitanhaem"><i>
                <BsFacebook /></i></a></li>
          <li><i>
              <BsTwitter /></i></li>
        </ul>
      </div>
    </Nav>
  </Navbar>
</Container>
)
}

export default SubNavbar