import React from "react";
import { skills } from "../data/portfolio";
import "../styles/skill-modal.css";

function formatSkillGroupTitle(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function SkillModalContent() {
  return (
    <div className="skills-modal">
      <div className="skills-modal-header">
        <div className="skills-modal-heading">
          <span className="material-symbols-outlined" aria-hidden>
            terminal
          </span>
          <div>
            <h2>Technical Stack</h2>
          </div>
        </div>
      </div>

      <div className="skills-modal-content custom-scrollbar">
        {skills.map((skill) => (
          <section key={skill.tag} className="skills-modal-group">
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
    </div>
  );
}

export default SkillModalContent;
