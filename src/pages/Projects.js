import React, { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/https://github.com/alesandromatosfilho-rgb/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Erro ao buscar repositórios:", error));
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>Meus Projetos</h2>
      <p className="projects-subtitle">
        Alguns projetos que desenvolvi e publiquei no GitHub.
      </p>

      <div className="projects-grid">
        {repos.slice(0, 6).map((repo) => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "Projeto desenvolvido por Alesandro Matos."}</p>

            <div className="project-info">
              <span>{repo.language || "Código"}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>

            <a href={repo.html_url} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;