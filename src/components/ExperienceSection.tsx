import { milestones } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <section className="container section-block" id="experience">
      <h2 className="mb-12 text-center text-h2 font-semibold text-on-surface">
        Structural Milestones
      </h2>

      <div className="grid gap-8">
        {milestones.map((milestone) => {
          const isRight = milestone.align === "right";

          return (
            <article
              key={milestone.title}
              className="relative grid grid-cols-1 gap-5 rounded-lg border border-outline-variant/70 bg-surface-container/45 p-5 md:grid-cols-2 md:gap-12 md:p-8"
            >
              <div
                className={[
                  "space-y-3",
                  isRight ? "md:col-start-2 md:text-right" : "md:col-start-1",
                ].join(" ")}
              >
                <span className="font-mono-label text-caption uppercase tracking-[0.15em] text-primary">
                  {milestone.period}
                </span>
                <h3 className="text-h3 font-semibold text-on-surface">
                  {milestone.title}
                </h3>
                {milestone.description.map((desc) => (
                  <p
                    key={desc}
                    className="text-body-md leading-relaxed text-on-surface-variant"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <div className="timeline-node hidden md:block" aria-hidden="true">
                <span />
              </div>

              <div
                className={[
                  "glass-card",
                  isRight ? "md:col-start-1 md:row-start-1" : "md:col-start-2",
                ].join(" ")}
              >
                <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-primary">
                  {milestone.highlightLabel}
                </h4>
                <ul className="space-y-2 text-body-md leading-relaxed text-on-surface-variant">
                  {milestone.highlightText.map((text) => (
                    <li
                      key={text}
                      className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald"
                    >
                      {text}
                    </li>
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
