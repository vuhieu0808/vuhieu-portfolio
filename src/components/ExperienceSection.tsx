import { milestones } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <section className="container section-block" id="experience">
      <h2 className="section-title centered">Structural Milestones</h2>

      <div className="timeline">
        {milestones.map((milestone) => {
          const isRight = milestone.align === "right";

          return (
            <article
              key={milestone.title}
              className={`timeline-row ${isRight ? "is-right" : ""}`}
            >
              <div
                className={`timeline-copy ${isRight ? "timeline-copy-right" : ""}`}
              >
                <span className="timeline-period">{milestone.period}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>

              <div className="timeline-node" aria-hidden="true">
                <span />
              </div>

              <div
                className={`timeline-highlight glass-card ${isRight ? "align-right" : ""}`}
              >
                <h4>{milestone.highlightLabel}</h4>
                <p>{milestone.highlightText}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
