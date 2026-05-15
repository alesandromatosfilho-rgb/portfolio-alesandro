import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaChartBar,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const techs = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Power BI", icon: <FaChartBar /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

function TechSection() {
  return (
    <section id="tecnologias" className="section tech-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>Stack</span>
        <h2>Tecnologias que uso e estudo.</h2>
      </motion.div>

      <div className="tech-grid">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechSection;
