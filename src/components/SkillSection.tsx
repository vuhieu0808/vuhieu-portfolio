import { skills } from "../data/portfolio";

export function SkillSection() {
  return (
    <section className="skills-band section-block" id="skills">
      <div className="container grid-12 skills-layout">
        <div className="span-4">
          <h2>Technical Proficiency</h2>
          <p className="lead compact">
            Quantifiable mastery of core backend technologies and architectural
            patterns. I focus on low-level performance and high-level
            scalability.
          </p>
        </div>

        <div className="span-8 skills-grid">
          {skills.map((skill) => (
            <div key={skill.label} className="skill-item glass-card">
              <span className="material-symbols-outlined" aria-hidden="true">
                {skill.icon}
              </span>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
