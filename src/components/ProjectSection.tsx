import { useState } from "react";

import { projects, type Project } from "../data/portfolio";
import { DetailModal } from "./DetailModal";
import { SectionHeader } from "./SectionHeader";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const detail = selectedProject?.detail;

  return (
    <section className="container section-block" id="projects">
      <SectionHeader
        title="Projects"
        description="Architectural solutions for complex data problems."
        meta={`Index: ${projects.length}`}
      />

      <div className="card-grid three-up">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card glass-card interactive-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            <div className="project-image-wrap">
              <img src={project.image} alt={project.alt} loading="lazy" />
              <div className="project-image-overlay" />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <DetailModal
        isOpen={Boolean(selectedProject)}
        panelClassName="project-modal"
        closeClassName="project-modal-close"
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && detail ? (
          <div className="project-modal-layout">
            <header className="project-modal-hero">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt}
                loading="lazy"
              />
              <div className="project-modal-hero-overlay" />
              <div className="project-modal-hero-content">
                <div className="project-modal-chip-row">
                  {selectedProject.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="project-modal-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2>{detail.heroTitle}</h2>
              </div>
            </header>

            <div className="project-modal-body">
              <div className="project-modal-main">
                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {detail.roleSection.icon}
                    </span>
                    {detail.roleSection.title}
                  </h3>
                  <p>{detail.roleSection.description}</p>
                </section>

                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {detail.summarySection.icon}
                    </span>
                    {detail.summarySection.title}
                  </h3>
                  <p>{detail.summarySection.description}</p>
                </section>

                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {detail.architectureSection.icon}
                    </span>
                    {detail.architectureSection.title}
                  </h3>
                  <div className="project-modal-architecture">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      memory
                    </span>
                    <p>{detail.architectureSection.description}</p>
                  </div>
                </section>

                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {detail.challengesSection.icon}
                    </span>
                    {detail.challengesSection.title}
                  </h3>

                  <div className="project-modal-challenges">
                    {detail.challenges.map((item) => (
                      <article
                        key={item.title}
                        className="project-modal-challenge-item"
                      >
                        <div
                          className="project-modal-timeline"
                          aria-hidden="true"
                        >
                          <span />
                          <i />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="project-modal-solution">
                            SOLUTION: {item.solution}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {detail.lessonsSection.icon}
                    </span>
                    {detail.lessonsSection.title}
                  </h3>
                  <ul className="detail-list">
                    {detail.lessonsSection.items.map((lesson) => (
                      <li key={lesson}>{lesson}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="project-modal-side">
                <div className="project-modal-side-card">
                  <h4>{detail.coreStackTitle}</h4>
                  <div className="project-modal-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-side-card">
                  <h4>{detail.vitalsTitle}</h4>
                  <div className="project-modal-metrics">
                    {detail.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="metric-head">
                          <span>{metric.label}</span>
                          <span>{metric.value}</span>
                        </div>
                        <div className="metric-bar">
                          <i style={{ width: metric.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-modal-actions">
                  {detail.actionButtons.map((label, index) => (
                    <button
                      key={label}
                      type="button"
                      className={
                        index === 0
                          ? "button button-primary"
                          : "button button-outline"
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </aside>
            </div>

            <footer className="project-modal-footer">
              <span>{detail.footerLabel}</span>
              <div>
                {detail.footerButtons.map((label) => (
                  <button key={label} type="button">
                    {label}
                  </button>
                ))}
              </div>
            </footer>
          </div>
        ) : null}
      </DetailModal>
    </section>
  );
}
