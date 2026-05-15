import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page container">
      <section className="about-me-section">
        <h1>Sobre Mim</h1>
        <p className="intro-text">
          Olá! Sou Alesandro Matos Almeida Filho, um profissional apaixonado por tecnologia e inovação,
          com uma sólida base em suporte técnico e vendas, e agora focado em desenvolvimento web full-stack.
          Minha jornada me permitiu desenvolver uma visão única sobre as necessidades do cliente e como a tecnologia
          pode oferecer soluções eficazes e impactantes.
        </p>

        <div className="experience-skills">
          <div className="experience-column">
            <h2>Experiência</h2>
            <div className="job-entry">
              <h3>Desenvolvedor Web Full-Stack (Autônomo/Projetos)</h3>
              <p className="duration">2024 - Presente</p>
              <ul>
                <li>Desenvolvimento de aplicações web modernas utilizando React para o front-end e Node.js/Express.js para o back-end.</li>
                <li>Criação de soluções personalizadas para e-commerce e sistemas de gerenciamento.</li>
                <li>Foco em experiência do usuário (UX) e performance.</li>
              </ul>
            </div>
            <div className="job-entry">
              <h3>Especialista em Suporte Técnico</h3>
              <p className="duration">Anos de Experiência</p>
              <ul>
                <li>Resolução de problemas técnicos e estratégias de vendas.</li>
                <li>Habilidade em identificar e propor soluções que agregam valor real aos clientes.</li>
                <li>Comunicação eficaz e construção de relacionamentos duradouros.</li>
              </ul>
            </div>
            {/* Adicione mais experiências aqui */}
          </div>

          <div className="skills-column">
            <h2>Habilidades</h2>
            <div className="skill-category">
              <h3>Front-end</h3>
              <p>React, JavaScript (ES6+), HTML5, CSS3, SASS, Responsive Design, Redux (opcional)</p>
            </div>
            <div className="skill-category">
              <h3>Back-end</h3>
              <p>Node.js, Express.js, RESTful APIs</p>
            </div>
            <div className="skill-category">
              <h3>Banco de Dados</h3>
              <p>PostgreSQL, MongoDB</p>
            </div>
            <div className="skill-category">
              <h3>Ferramentas & Outros</h3>
              <p>Git, GitHub, VS Code, npm/yarn, Figma (básico)</p>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <p>Resolução de Problemas, Comunicação, Trabalho em Equipe, Proatividade, Foco no Cliente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;