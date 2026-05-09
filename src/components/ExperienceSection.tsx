import { milestones } from "../core/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  return (
    <section className="container section-block" id="experience">
      {/* <h2 className="section-title centered">Structural Milestones</h2> */}
      <SectionHeader
        title="Structural Milestones"
        description="Key achievements and experiences throughout my career."
        meta={`Index: ${milestones.length}`}
      />

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
                {milestone.description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>

              <div className="timeline-node" aria-hidden="true">
                <span />
              </div>

              <div
                className={`timeline-highlight glass-card ${isRight ? "align-right" : ""}`}
              >
                <h4>{milestone.highlightLabel}</h4>
                <ul className="detail-list">
                  {milestone.highlightText.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
