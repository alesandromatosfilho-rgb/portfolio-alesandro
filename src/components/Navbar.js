import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="#inicio" className="logo-link">
        <span className="logo-mark">AM</span>
        <span>Alesandro Matos</span>
      </a>

      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">Experiência</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
