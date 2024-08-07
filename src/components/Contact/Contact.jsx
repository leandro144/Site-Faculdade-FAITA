import React from 'react';
import './Contact.css';
import logo from '../assets/MEC.png';

const Contact = () => {
  return (
    <>
      <div className="contact_back" id='contact'>
        <h1>Contato</h1>
        <p>
          Entre em contato, para maiores informações<b> Whatsapp (13) 97420-0501 || Fone: (13) 3426-5040</b> <br />
          A Faculdade Faita oferece também Pós Graduação e Cursos Livres, Consulte já!!
        </p>
        <div className="grid_color">
          <div className="left">
            <div className="flex">
              <form action="https://formsubmit.co/atendimento.faita@gmail.com" method="POST">
                <fieldset>
                  <legend><b>Fórmulário de Contato</b></legend>
                  <br />
                  <div className="inputBox">
                    <input type="text" name="nome" id="nome" className="inputUser" required />
                    <label htmlFor="nome" className="labelInput">Nome completo</label>
                  </div>
                  <br /><br />
                  <div className="inputBox">
                    <input type="text" name="email" id="email" className="inputUser" required />
                    <label htmlFor="email" className="labelInput">O Email</label>
                  </div>
                  <br /><br />
                  <div className="inputBox">
                    <input type="tel" name="telefone" id="telefone" className="inputUser" required />
                    <label htmlFor="telefone" className="labelInput">Telefone</label>
                  </div>
                  <br /><br />
                  <div className="inputBox">
                    <textarea name="message" id="message" cols="10" rows="10" className="inputUser textArea" required></textarea>
                    <label htmlFor="message" className="labelInput labelArea">Mensagem...</label>
                  </div>
                  <br /><br />
                  <div className="inputBox">
                    <select name="curso" id="curso" className="inputUser" required>
                      <option value="" disabled selected>Selecione um curso</option>
                      <option value="pedagogia">Pedagogia</option>
                      <option value="administracao">Administração</option>
                      <option value="logistica">Logística</option>
                    </select>
                  </div>
                  <br /><br />
                  <div className="inputBox">
                    <select name="modalidade" id="modalidade" className="inputUser" required>
                      <option value="" disabled selected>Selecione a modalidade</option>
                      <option value="presencial">Presencial</option>
                      <option value="ead">EAD</option>
                    </select>
                  </div>
                  <br /><br />
                  <input type="submit" name="submit" id="submit" />
                </fieldset>
              </form>
            </div>
          </div>
          <div className="right_contact">
            <h1>Faita</h1>
            <p>@faita.edu.br</p>
            <p>Preencha todo o formulário e em breve entraremos em contato, seja Faita também!</p>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div />
    </>
  );
}

export default Contact;
