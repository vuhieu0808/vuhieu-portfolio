import { useState } from "react";
import { certifications } from "../core/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { DetailModal } from "./DetailModal";
import { CertificationModalContent } from "./CertificationModalContent";

export function CertificationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              {/* <div className="cert-item-right">
                <div className="cert-date">{cert.date}</div>
              </div> */}
            </a>
          ))}
        </div>
        <div className="certifications-actions">
          <button
            type="button"
            className="button button-outline"
            onClick={() => setIsModalOpen(true)}
          >
            Expand certifications
          </button>
        </div>
      </div>
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        panelClassName="skills-modal-panel"
      >
        <div style={{ height: "70vh", minHeight: 320 }}>
          <CertificationModalContent onClose={() => setIsModalOpen(false)} />
        </div>
      </DetailModal>
    </section>
  );
}
