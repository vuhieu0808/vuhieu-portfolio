import { useState } from "react";

import { projects, type Project } from "../data/portfolio";
import { DetailModal } from "./DetailModal";
import { SectionHeader } from "./SectionHeader";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="container section-block" id="projects">
      <SectionHeader
        title="Selected Projects"
        description="Architectural solutions for complex data problems."
        meta="Index: 03"
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
        closeLabel=""
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject ? (
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
                <h2>Project: {selectedProject.title}</h2>
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
                      description
                    </span>
                    TECHNICAL_SUMMARY
                  </h3>
                  <p>{selectedProject.detailIntro}</p>
                </section>

                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      account_tree
                    </span>
                    SYSTEM_ARCHITECTURE
                  </h3>
                  <div className="project-modal-architecture">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      memory
                    </span>
                    <p>
                      [INTERACTIVE_SCHEMA: services topology, message broker,
                      and cache layer]
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="project-modal-section-title">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      bolt
                    </span>
                    CHALLENGES_&_RESOLUTIONS
                  </h3>

                  <div className="project-modal-challenges">
                    {selectedProject.detailHighlights.map((item, index) => (
                      <article
                        key={item}
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
                          <h4>
                            CHALLENGE_{String(index + 1).padStart(2, "0")}
                          </h4>
                          <p>{item}</p>
                          <div className="project-modal-solution">
                            SOLUTION:{" "}
                            {selectedProject.detailOutcomes[index] ??
                              "Optimization applied based on production tracing insights."}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="project-modal-side">
                <div className="project-modal-side-card">
                  <h4>Core_Stack</h4>
                  <div className="project-modal-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-side-card">
                  <h4>Vitals_Dashboard</h4>
                  <div className="project-modal-metrics">
                    <div>
                      <div className="metric-head">
                        <span>THROUGHPUT</span>
                        <span>98% OPTIMIZED</span>
                      </div>
                      <div className="metric-bar">
                        <i style={{ width: "98%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="metric-head">
                        <span>UPTIME</span>
                        <span>99.999%</span>
                      </div>
                      <div className="metric-bar">
                        <i style={{ width: "99.9%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="metric-head">
                        <span>DATA_RELIABILITY</span>
                        <span>SECURE</span>
                      </div>
                      <div className="metric-bar">
                        <i style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-modal-actions">
                  <button type="button" className="button button-primary">
                    Access Source Code
                  </button>
                  <button type="button" className="button button-outline">
                    Technical Docs
                  </button>
                </div>
              </aside>
            </div>

            <footer className="project-modal-footer">
              <span>SYS_ARCH // ARCH_STABLE_V2</span>
              <div>
                <button type="button">Documentation</button>
                <button type="button">API Reference</button>
                <button type="button">Contact Engineering</button>
              </div>
            </footer>
          </div>
        ) : null}
      </DetailModal>
    </section>
  );
}
