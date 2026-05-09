import React from "react";
import { certifications } from "../core/data/portfolio";
import "../common/styles/skill-modal.css";

type Props = {
  onClose?: () => void;
};

export function CertificationModalContent({ onClose }: Props) {
  return (
    <div className="skills-modal">
      <div className="skills-modal-header">
        <div className="skills-modal-heading">
          <span className="material-symbols-outlined" aria-hidden>
            verified
          </span>
          <div>
            <h2>Certifications</h2>
          </div>
        </div>
      </div>

      <div className="skills-modal-content custom-scrollbar">
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
    </div>
  );
}

export default CertificationModalContent;
