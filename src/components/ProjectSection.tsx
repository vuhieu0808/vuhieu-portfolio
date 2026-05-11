import { useState } from "react";

import { projects } from "../core/data/portfolio";
import type { Project } from "../core/types/portfolio-types";
import { DetailModal } from "./DetailModal";
import { SectionHeader } from "./SectionHeader";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const detail = selectedProject?.detail;

  return (
    <section className="container section-block" id="projects">
      <SectionHeader
        title="Projects"
        description="Personal projects and Academic Projects."
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
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">
                {project.tags.slice(0, 3).map((tag) => (
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
                <h3>{detail.projectType}</h3>
              </div>
            </header>

            <div className="project-modal-body">
              <div className="project-modal-main">
                {/* role section */}
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
                {/* summary section */}
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
                {/* architecture section */}
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

                {/* challenges section */}
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

                {/* lessons section */}
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
                      <p>{lesson}</p>
                    ))}
                  </ul>
                </section>
              </div>

              {/* side panel */}
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

                {/* action buttons */}
                <div className="project-modal-actions">
                  {detail.actionButtons.map((btn, index) => (
                    <button
                      key={btn.label}
                      type="button"
                      className={"button button-primary"}
                      onClick={() => {
                        window.location.href = btn.link;
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </aside>
            </div>

            <footer className="project-modal-footer">
              <span>{detail.footerLabel}</span>
              <div>
                {detail.footerButtons.map((btn) => (
                  <button
                    key={btn.label}
                    type="button"
                    onClick={() => {
                      window.location.href = btn.link;
                      if (btn.link.startsWith("#")) {
                        const targetElement = document.querySelector(btn.link);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                          setSelectedProject(null);
                        }
                      }
                    }}
                  >
                    {btn.label}
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
