import { motion } from "framer-motion";
import { FaBrain, FaDatabase, FaLaptopCode } from "react-icons/fa";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    text: "Criação de interfaces modernas, responsivas e organizadas com HTML, CSS, JavaScript e React.",
  },
  {
    icon: <FaBrain />,
    title: "IA e Automação",
    text: "Interesse em ferramentas de inteligência artificial, automações e uso de APIs para criar soluções úteis.",
  },
  {
    icon: <FaDatabase />,
    title: "Dados e Sistemas",
    text: "Experiência acadêmica com banco de dados, Power BI, CRUD e relatórios para tomada de decisão.",
  },
];

function AboutSection() {
  return (
    <section id="sobre" className="section about-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>Sobre mim</span>
        <h2>Um desenvolvedor em construção, focado em projetos reais.</h2>
      </motion.div>

      <motion.p
        className="section-text"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Sou estudante de Ciência da Computação e busco oportunidade como desenvolvedor.
        Tenho interesse em programação, análise de dados, banco de dados e inteligência
        artificial, sempre procurando evoluir com projetos práticos e úteis.
      </motion.p>

      <div className="about-grid">
        {highlights.map((item, index) => (
          <motion.div
            className="about-card"
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="about-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
