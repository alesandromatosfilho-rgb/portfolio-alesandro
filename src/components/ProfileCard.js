import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

function ProfileCard() {
  return (
    <motion.div
      className="profile-card"
      initial={{ opacity: 0, y: 35, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.45 }}
      whileHover={{ y: -8 }}
    >
      <div className="profile-glow" />

      <div className="profile-image-wrapper">
        <img src="/minha-foto.jpg" alt="Foto profissional de Alesandro Matos" />
      </div>

      <h3>Alesandro Matos</h3>
      <p>Desenvolvedor Web | IA | Cloud</p>

      <div className="profile-actions">
        <a href="/curriculo.pdf" download className="btn-primary small-btn">
          <FaDownload /> Currículo
        </a>

        <a
          href="https://github.com/alesandromatosfilho-rgb"
          target="_blank"
          rel="noreferrer"
          className="icon-button"
          aria-label="GitHub de Alesandro Matos"
        >
          <FaGithub />
        </a>

        <a
          href="www.linkedin.com/in/alesandro-filho-7a1617306/"
          target="_blank"
          rel="noreferrer"
          className="icon-button"
          aria-label="LinkedIn de Alesandro Matos"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
}

export default ProfileCard;
