import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import AdvancedSpaceScene from "./AdvancedSpaceScene";
import ProfileCard from "./ProfileCard";

function Hero3D() {
  const codeText = `const developer = {
  name: "Alesandro Matos",
  stack: ["React", "JavaScript", "Cloud", "IA"],
  focus: "Soluções digitais modernas",
  status: "Buscando oportunidades"
};`;

  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedCode(codeText.slice(0, index));
      index += 1;

      if (index > codeText.length) {
        clearInterval(interval);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [codeText]);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <FaRocket /> Desenvolvedor Web em evolução
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          Criando experiências digitais com <span>design, código e inovação.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05 }}
        >
          Olá, eu sou Alesandro Matos. Desenvolvo interfaces modernas, sistemas web
          e projetos com foco em front-end, inteligência artificial, cloud e banco de dados.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <a href="#projetos" className="btn-primary">Ver projetos</a>

          <a
            href="https://github.com/alesandromatosfilho-rgb"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alesandro-filho-7a1617306/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="code-preview"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.35 }}
        >
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <pre>{typedCode}<span className="typing-cursor">|</span></pre>
        </motion.div>
      </div>

      <div className="hero-visual">
        <AdvancedSpaceScene />
        <ProfileCard />
      </div>
    </section>
  );
}

export default Hero3D;
