import React from 'react'
import './Main.css'
import { Content } from '../styled';
import  WhatsApp  from '../assets/whatsapp.png';
import VLibras from '@djpfs/react-vlibras'

const Main = () => {
return (
<>
  <Content>
    <div className="banner">
      <VLibras forceOnload={true} />
      <a href="https://api.whatsapp.com/send?phone=1397420-0501
        &text=Olá, gostaria de obter mais informações sobre os cursos">
        <img src={WhatsApp} id="wp-icon" alt="Clique aqui para falar com a gente pelo Whatsapp!" />
      </a>
      <div className="center">

      </div>
    </div>
  </Content>
</>
)
}

export default Main;