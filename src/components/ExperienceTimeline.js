import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaGraduationCap, FaRobot } from "react-icons/fa";

const timeline = [
  {
    year: "2024 - 2028",
    title: "Ciência da Computação - FBUNI",
    description: "Graduação em andamento com foco em programação, lógica, banco de dados e desenvolvimento de sistemas.",
    icon: <FaGraduationCap />,
  },
  {
    year: "Projetos acadêmicos",
    title: "CRUD, Power BI e automações",
    description: "Criação de dashboard em Power BI, sistema CRUD em Java e automações em planilhas com macros e tabelas dinâmicas.",
    icon: <FaDatabase />,
  },
  {
    year: "Formação Front-End",
    title: "HTML, CSS, JavaScript e React",
    description: "Estudo e prática em interfaces modernas, componentes reutilizáveis, responsividade e organização visual.",
    icon: <FaCode />,
  },
  {
    year: "Evolução atual",
    title: "IA, Cloud e sistemas web",
    description: "Aprofundamento em inteligência artificial, APIs, deploy em nuvem e construção de projetos para portfólio.",
    icon: <FaRobot />,
  },
];

function ExperienceTimeline() {
  return (
    <section id="experiencia" className="section timeline-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>Trajetória</span>
        <h2>Experiência, estudos e evolução.</h2>
      </motion.div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-card">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
