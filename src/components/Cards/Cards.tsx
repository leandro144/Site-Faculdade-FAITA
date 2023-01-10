import React from 'react'
import { Button, Content } from '../styled'
import './Cards.css'
import { RiStarSLine } from 'react-icons/Ri';

const Cards = () => {
  return (
    <>
      <div className="content">
         <div className="container">
          <article className='card'>
            <div className="card_container"></div>
            <h4>Pedagogia</h4>
              <p>O curso de Pedagogia são voltadas para o estudo da educação e dos processos de aprendizagem. O curso é bastante teórico e aborda temas como a capacidade de crianças e adolescentes aprenderem.</p>
              <div className="btn_stars">
                <button className="btn">Inscreva-se</button>
                <span className="star">
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                </span>
              </div>
          </article>
          <article className='card'>
            <div className="card_container"></div>
            <h4>Administração</h4>
              <p>O curso de Administração também costuma ser um excelente caminho para aqueles que sonham em ter o próprio negócio</p>
              <div className="btn_stars">
                <button className="btn">Inscreva-se</button>
                <span className="star">
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                </span>
              </div>
          </article>
          <article className='card'>
            <div className="card_container"></div>
            <h4>Logistica</h4>
              <p>O curso de Logística capacita projetar e implementar sistemas de transporte, armazenamento, distribuição e entrega.</p>
              <div className="btn_stars">
                <button className="btn">Inscreva-se</button>
                <span className="star">
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                  <RiStarSLine/>
                </span>
              </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Cards