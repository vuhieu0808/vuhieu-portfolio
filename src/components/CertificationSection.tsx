import { certifications } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function CertificationSection() {
  return (
    <section className="certifications-band section-block" id="certifications">
      <div className="container">
        <SectionHeader
          title="Certifications"
          description="Personal credentials."
          meta={`Count: ${certifications.length}`}
        />

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card glass-card"
            >
              <div className="certification-header">
                <h3>{cert.name}</h3>
              </div>
              <div className="certification-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <div className="certification-arrow">
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
