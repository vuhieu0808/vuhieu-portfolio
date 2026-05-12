import { useNavigate } from "react-router-dom";
import { projects } from "../core/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { ProjectImage } from "../utils/ProjectImage";

export function ProjectSection() {
  const navigate = useNavigate();

  return (
    <section className="container section-block" id="projects">
      <SectionHeader
        title="Projects"
        description="Personal projects and Academic Projects."
        meta={`Count: ${projects.length}`}
      />

      <div className="card-grid three-up">
        {projects.slice(0, 3).map((project, index) => (
          <article
            key={project.title}
            className="project-card glass-card interactive-card"
            onClick={() => navigate(`/projects/${index}`)}
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

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <button
          className="button button-primary"
          onClick={() => navigate("/projects")}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}
