import { useNavigate } from "react-router-dom";
import { certifications } from "../core/data/portfolio";
import "../common/styles/skill-modal.css";

export function CertificationsPage() {
  const navigate = useNavigate();

  return (
    <section className="container section-block" id="certifications">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <div>
          <h2>All Certifications</h2>
          <p>Professional certifications and credentials.</p>
        </div>
        <button
          className="button button-outline"
          onClick={() => navigate("/")}
          style={{ whiteSpace: "nowrap" }}
        >
          ← Back Home
        </button>
      </div>

      <div
        className="skills-modal-content custom-scrollbar"
        style={{ maxHeight: "none" }}
      >
        <div className="certification-modal-grid">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              className="cert-modal-item glass-card"
              href={cert.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="cert-modal-left">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
              <div className="cert-modal-right">
                <div className="cert-date">{cert.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
