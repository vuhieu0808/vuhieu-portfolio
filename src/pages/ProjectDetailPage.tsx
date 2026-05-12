import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../core/data/portfolio";
import { ProjectImage } from "../utils/ProjectImage";

function getMetricWidthClass(width: string) {
  return `project-detail-metric-width-${width.replace(/[^0-9]/g, "-")}`;
}

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const projectIndex = parseInt(projectId || "0", 10);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <section
        className="container section-block project-detail-page"
        id="project-detail"
      >
        <div className="project-detail-state">
          <h2>Project not found</h2>
          <p className="project-detail-state-text">
            This project doesn't exist or has been removed.
          </p>
          <button
            className="button button-primary"
            onClick={() => navigate("/projects")}
            type="button"
          >
            ← Back to Projects
          </button>
        </div>
      </section>
    );
  }

  const detail = project.detail;

  return (
    <section
      className="container section-block project-detail-page"
      id="project-detail"
    >
      {/* Hero section with image */}
      <div className="project-modal-hero">
        <ProjectImage src={project.image} alt={project.alt} />
        <div className="project-modal-hero-overlay" />
        <div className="project-modal-hero-content">
          <button
            className="button button-outline project-detail-hero-back"
            onClick={() => navigate("/projects")}
            type="button"
          >
            ← Back to Projects
          </button>
          <div className="project-modal-chip-row">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="project-modal-chip">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="project-detail-hero-title">{detail.heroTitle}</h2>
          <h3 className="project-detail-hero-subtitle">{detail.projectType}</h3>
        </div>
      </div>

      {/* Main content */}
      <div className="project-modal-body project-detail-body">
        {/* Left column */}
        <div className="project-modal-main">
          {/* Role */}
          <div>
            <div className="project-modal-section-title project-detail-section-title">
              <span className="material-symbols-outlined">
                {detail.roleSection.icon}
              </span>
              <span>{detail.roleSection.title}</span>
            </div>
            <ul className="project-detail-lessons-list">
              {detail.roleSection.description.map((desc, idx) => (
                <li key={idx} className="project-detail-lessons-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div>
            <div className="project-modal-section-title project-detail-section-title">
              <span className="material-symbols-outlined">
                {detail.summarySection.icon}
              </span>
              <span>{detail.summarySection.title}</span>
            </div>
            <ul className="project-detail-lessons-list">
              {detail.summarySection.description.map((desc, idx) => (
                <li key={idx} className="project-detail-lessons-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <div className="project-modal-section-title project-detail-section-title">
              <span className="material-symbols-outlined">
                {detail.architectureSection.icon}
              </span>
              <span>{detail.architectureSection.title}</span>
            </div>

            <div className="project-modal-architecture-grid">
              {detail.architectureSection.description.map((section, idx) => (
                <div key={idx} className="project-modal-architecture-node">
                  <div className="project-modal-architecture-node-title">
                    {section.title}
                  </div>

                  <ul className="project-detail-lessons-list">
                    {section.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="project-detail-lessons-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <ul className="project-detail-lessons-list project-modal-architecture-note">
              {detail.architectureNote.map((note, idx) => (
                <li key={idx} className="project-detail-lessons-item">
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <div className="project-modal-section-title project-detail-section-title">
              <span className="material-symbols-outlined">
                {detail.challengesSection.icon}
              </span>
              <span>{detail.challengesSection.title}</span>
            </div>
            <div className="project-modal-challenges">
              {detail.challenges.map((challenge, idx) => (
                <div key={idx} className="project-modal-challenge-item">
                  <div className="project-modal-timeline">
                    <span />
                    {idx < detail.challenges.length && <i />}
                  </div>
                  <div>
                    <h4>{challenge.title}</h4>
                    <p className="project-detail-challenge-description">
                      {challenge.description}
                    </p>
                    <div className="project-modal-solution">
                      {challenge.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons learned */}
          <div>
            <div className="project-modal-section-title project-detail-section-title">
              <span className="material-symbols-outlined">
                {detail.lessonsSection.icon}
              </span>
              <span>{detail.lessonsSection.title}</span>
            </div>
            <ul className="project-detail-lessons-list">
              {detail.lessonsSection.items.map((item, idx) => (
                <li key={idx} className="project-detail-lessons-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column (sidebar) */}
        <div className="project-modal-side">
          {/* Core Stack */}
          <div className="project-modal-side-card">
            <h4 className="project-detail-side-title">
              {detail.coreStackTitle}
            </h4>
            <div className="project-modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-detail-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Vitals */}
          {detail.metrics.length > 0 && (
            <div className="project-modal-side-card">
              <h4 className="project-detail-side-title">
                {detail.vitalsTitle}
              </h4>
              <div className="project-modal-metrics">
                {detail.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="metric-head">
                      <span className="project-detail-metric-text">
                        {metric.label}
                      </span>
                      <span className="project-detail-metric-text">
                        {metric.value}
                      </span>
                    </div>
                    <div className="metric-bar">
                      <i
                        className={`project-detail-metric-fill ${getMetricWidthClass(metric.width)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          {detail.actionButtons.length > 0 && (
            <div className="project-modal-side-card">
              <div className="project-modal-actions">
                {detail.actionButtons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.link}
                    className="button button-primary"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={btn.label}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      {detail.footerButtons.length > 0 && (
        <div className="project-modal-footer project-detail-footer">
          <span className="project-detail-footer-label">
            {detail.footerLabel}
          </span>
          <div>
            {detail.footerButtons.map((btn, idx) => (
              <button
                key={idx}
                type="button"
                className="project-detail-footer-button"
                onClick={() => window.open(btn.link)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
