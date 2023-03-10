import React from 'react'
import './Cards.css'
import { RiStarSLine } from 'react-icons/ri';

const Cards = () => {
  return (
    <>
      <div className="content">
         <div className="container">
          <article className='card'>
            <div className="card_container"></div>
            <h4>Pedagogia</h4>
              <p>O curso de Pedagogia é voltado para a área da educação com ênfase nos processos de aprendizagem.</p>
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
              <p>O curso de Administração constrói um excelente caminho para aqueles que sonham em ter o próprio negócio</p>
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
              <p>O curso de Logística capacita profissionais para avaliar, projetar e implementar sistemas de transporte, armazenamento distribuição e entrega de produtos de uma empresa ou instituição.</p>
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