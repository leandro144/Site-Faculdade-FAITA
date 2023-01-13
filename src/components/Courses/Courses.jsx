import React from 'react'
import './Courses.css'
import { Content } from '../styled'
import './Courses.css'
import logistic  from '../assets/logistic.png'
import pedagogia from '../assets/pedagogia.png'
import adm from '../assets/adm.png'

const Courses = () => {
  return (
    <>
      <Content>
        <div className="courses">
          <h1>Cursos por área de atuação</h1>
          <div className="courses__content">
            <div className="img">
              <img src={pedagogia} alt="" />
            </div>
            <div className="text">
              <h2>Pedagogia</h2>
              <p>Com o setor da Educação em constante expansão e com a evolução da tecnologia, surgiu a necessidade de mobilizar profissionais para atuarem além das salas de aula!</p>
            </div>
          </div>
          <div className="courses__content">
            <div className="img">
              <img src={adm} alt="" />
            </div>
            <div className="text">
              <h2>Administração</h2>
              <p> O curso de Administração é focado no desenvolvimento de profissionais empreendedores, críticos, criativos e com grande capacidade de liderança e realização. </p>
            </div>
          </div>
          <div className="courses__content">
            <div className="img">
              <img src={logistic} alt="" />
            </div>
            <div className="text">
              <h2>Logistica</h2>
              <p> Esta área permite o desenvolvimento de competências para uma gestão moderna, sustentável, e inovadora, garantindo o alto desempenho do trabalho em equipe.</p>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Courses