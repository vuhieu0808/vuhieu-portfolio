import { useNavigate } from "react-router-dom";
import { projects } from "../core/data/portfolio";
import { ProjectImage } from "../utils/ProjectImage";

export function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <section className="container section-block" id="projects">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <button
          className="button button-outline"
          onClick={() => navigate("/#projects")}
          style={{ whiteSpace: "nowrap" }}
        >
          ← Back Home
        </button>
      </div>
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <div>
          <h2>All Projects</h2>
          <p>Personal projects and Academic Projects.</p>
        </div>
        <div className="section-divider" aria-hidden="true" />
        <span className="section-meta">{`Count: ${projects.length}`}</span>
      </div>

      <div className="card-grid three-up">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card glass-card"
            style={{ cursor: "default" }}
          >
            <ProjectImage src={project.image} alt={project.alt} />
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
