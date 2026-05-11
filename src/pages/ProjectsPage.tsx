import { useNavigate } from "react-router-dom";
import { projects } from "../core/data/portfolio";

export function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <section className="container section-block" id="projects">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <div>
          <h2>All Projects</h2>
          <p>Personal projects and Academic Projects.</p>
        </div>
        <button
          className="button button-outline"
          onClick={() => navigate("/")}
          style={{ whiteSpace: "nowrap" }}
        >
          ← Back Home
        </button>
      </div>

      <div className="card-grid three-up">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card glass-card"
            style={{ cursor: "default" }}
          >
            <div className="project-image-wrap">
              <img src={project.image} alt={project.alt} loading="lazy" />
              <div className="project-image-overlay" />
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
