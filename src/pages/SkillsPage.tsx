import { useNavigate } from "react-router-dom";
import { skills } from "../core/data/portfolio";
import "../common/styles/skill-modal.css";

function formatSkillGroupTitle(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function SkillsPage() {
  const navigate = useNavigate();

  return (
    <section className="container section-block" id="skills">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <div>
          <h2>Technical Stack</h2>
          <p>All skills and technologies.</p>
        </div>
        <button
          className="button button-outline"
          onClick={() => navigate("/")}
          style={{ whiteSpace: "nowrap" }}
        >
          ← Back Home
        </button>
      </div>

      <div
        className="skills-modal-content custom-scrollbar"
        style={{ maxHeight: "none" }}
      >
        {skills.map((skill) => (
          <section
            key={skill.tag}
            className="skills-modal-group"
            style={{ marginBottom: "1.5rem" }}
          >
            <h3>{formatSkillGroupTitle(skill.tag)}</h3>
            <div className="skills-modal-tags">
              {skill.label.map((tech) => (
                <span key={tech} className="skills-modal-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
