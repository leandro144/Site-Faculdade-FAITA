import React from 'react'
import { Content } from '../styled'
import './About.css'
import faita from '../assets/vemprafaita.jpg'

const About = () => {
  return (
    <>

            <div className="about_back" id='About'>
                <div className="grid">
                    <div className="left">
                        <h1>Sobre Nós</h1>
                        <p>A FAITA é localizada na região do Litoral Sul do Estado de São Paulo, abrangendo os municípios de Praia Grande, Mongaguá, Itanhaém, Peruíbe, Itariri e Pedro de Toledo.
                          A Faculdade oferece cursos superiores em Adminstração, Logística e Pedagogia.
                          Cursos de Pós-Graduação nas Áreas: Educação, Saúde, Administração e Logística.</p>
                    </div>
                    <div className="right">
                        <img src={faita} alt="logo"/> 
                    </div>
                 </div>
            </div>
    </>
  )
}

export default About