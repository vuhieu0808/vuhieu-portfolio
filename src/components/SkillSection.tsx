import { skills } from "../data/portfolio";

export function SkillSection() {
  return (
    <section className="skills-band section-block" id="skills">
      <div className="container grid-12 skills-layout">
        <div className="span-4">
          <h2>Technical Skills</h2>
          <p className="lead compact">
            Quantifiable mastery of core backend technologies and architectural
            patterns. I focus on low-level performance and high-level
            scalability.
          </p>
        </div>

        <div className="span-8 skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item glass-card">
              <span className="material-symbols-outlined" aria-hidden="true">
                {skill.icon}
              </span>
              <div className="skill-label">
                {skill.label.map((tech, i) => (
                  <span key={i} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
