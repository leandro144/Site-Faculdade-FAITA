import React from 'react'
import './SubNavbar.css'
import {Container, Nav, Navbar} from '../styled'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs';

const SubNavbar = () => {

return (
<Container>
  <Navbar>
    <Nav>
      <div className="center">
        <div id="graduation">Acessibilidade</div>
        <div className="disclosure">Graduação FAITA - Inscreva-se já!</div>
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