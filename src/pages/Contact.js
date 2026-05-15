// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de envio de e-mail (ex: Formspree, EmailJS, ou seu próprio backend)
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada! (Funcionalidade de envio real precisa ser implementada)');
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
  };

  return (
    <div className="contact-page container">
      <h1>Entre em Contato</h1>
      <p className="intro-text">
        Tem um projeto em mente, uma pergunta ou apenas quer bater um papo? Ficarei feliz em ouvir você!
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Informações de Contato</h3>
          <p><strong>Email:</strong> alesandro.matosfilho@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alesandro-filho-7a1617306" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alesandro-filho-7a1617306</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/alesandromatosfilho-rgb" target="_blank" rel="noopener noreferrer">https://github.com/alesandromatosfilho-rgb</a></p>
          <p><strong>Telefone:</strong> (85) 99759-3793</p>
        </div>

        <div className="contact-form-container">
          <h3>Envie uma Mensagem</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;