import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

const GITHUB_USERNAME = "alesandromatosfilho-rgb";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
        );

        if (!response.ok) {
          throw new Error("Não foi possível carregar os repositórios.");
        }

        const data = await response.json();
        const filteredRepos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 8);

        setRepos(filteredRepos);
      } catch (err) {
        setError("Não consegui carregar os projetos do GitHub agora.");
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  return (
    <section id="projetos" className="section projects-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>Projetos</span>
        <h2>Repositórios reais puxados do GitHub.</h2>
      </motion.div>

      <p className="section-text">
        Essa seção busca automaticamente seus repositórios públicos mais recentes.
      </p>

      {loading && <p className="loading-text">Carregando projetos...</p>}
      {error && <p className="loading-text">{error}</p>}

      {!loading && !error && (
        <div className="projects-grid">
          {repos.map((repo, index) => (
            <motion.article
              className="project-card"
              key={repo.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-header">
                <FaGithub />
                <span>{repo.language || "Código"}</span>
              </div>

              <h3>{repo.name}</h3>

              <p>
                {repo.description ||
                  "Projeto desenvolvido para prática, estudo e evolução em programação web."}
              </p>

              <div className="project-stats">
                <span><FaStar /> {repo.stargazers_count}</span>
                <span><FaCodeBranch /> {repo.forks_count}</span>
              </div>

              <a href={repo.html_url} target="_blank" rel="noreferrer" className="project-link">
                Ver no GitHub <FaExternalLinkAlt />
              </a>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}

export default GitHubProjects;
