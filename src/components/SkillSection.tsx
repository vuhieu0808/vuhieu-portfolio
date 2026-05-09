import { skills } from "../data/portfolio";

export function SkillSection() {
  return (
    <section className="section-block bg-surface-container-low/45" id="skills">
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-h2 font-semibold text-on-surface">
            Technical Skills
          </h2>
          <p className="mt-4 text-body-md leading-relaxed text-on-surface-variant">
            Quantifiable mastery of core backend technologies and architectural
            patterns. I focus on low-level performance and high-level
            scalability.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item glass-card">
              <span
                className="material-symbols-outlined text-2xl text-primary"
                aria-hidden="true"
              >
                {skill.icon}
              </span>
              <div className="flex flex-wrap gap-2">
                {skill.label.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded border border-primary/50 bg-primary/10 px-2 py-1 font-mono-label text-caption uppercase tracking-wide text-primary"
                  >
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
