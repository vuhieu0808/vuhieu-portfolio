import { skills } from "../core/data/portfolio";
import { SectionHeader } from "./SectionHeader";

import { useNavigate } from "react-router-dom";

function formatSkillGroupTitle(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function SkillSection() {
  const navigate = useNavigate();
  return (
    <section className="skills-band section-block" id="skills">
      <div className="container">
        <SectionHeader
          title="Skills"
          description="Technical stack."
          meta={`Count: ${skills.length}`}
        />

        <div className="skills-grid">
          {skills.slice(0, 4).map((skill) => (
            <article key={skill.tag} className="skill-card glass-card">
              <div className="skill-card-header">
                <h3>{formatSkillGroupTitle(skill.tag)}</h3>
                {/* <span className="skill-card-meta">
                  {skill.label.length} items
                </span> */}
              </div>

              <div className="skill-label">
                {skill.label.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-actions">
          <button
            type="button"
            className="button button-outline skills-expand-button"
            onClick={() => navigate("/skills")}
          >
            Expand skills
          </button>
        </div>
      </div>
    </section>
  );
}
