import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sistema KCN Representações",
    description:
      "Sistema web para controle de clientes, pedidos, assistência, relatórios e impressão de documentos.",
    tags: ["JavaScript", "HTML", "PostgreSQL"],
    github: "https://github.com/alesandromatosfilho-rgb",
    deploy: "#",
  },
  {
    title: "Portfólio Pessoal 3D",
    description:
      "Portfólio moderno com animações, partículas, experiência 3D, timeline e formulário funcional.",
    tags: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/alesandromatosfilho-rgb",
    deploy: "#",
  },
  {
    title: "Projetos com IA e Cloud",
    description:
      "Estudos e soluções usando inteligência artificial, APIs, automações e ferramentas em nuvem.",
    tags: ["IA", "API", "Cloud"],
    github: "https://github.com/alesandromatosfilho-rgb",
    deploy: "#",
  },
];

function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>O que eu desenvolvi</span>
        <h2>Projetos</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
          >
            <div className="project-number">0{index + 1}</div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Código
              </a>

              <a href={project.deploy} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Ver projeto
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
