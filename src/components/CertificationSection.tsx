import { useNavigate } from 'react-router-dom';
import { certifications } from "../core/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function CertificationSection() {
  const navigate = useNavigate();
  return (
    <section className="certifications-band section-block" id="certifications">
      <div className="container">
        <SectionHeader
          title="Certifications"
          description="Personal credentials."
          meta={`Count: ${certifications.length}`}
        />

        <div className="certifications-grid">
          {certifications.slice(0, 4).map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card glass-card cert-item"
            >
              <div className="cert-item-left">
                <h1 className="cert-name">{cert.name}</h1>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="certifications-actions">
          <button
            type="button"
            className="button button-outline"
            onClick={() => navigate('/certifications')}
          >
            Expand certifications
          </button>
        </div>
      </div>
    </section>
  );
}