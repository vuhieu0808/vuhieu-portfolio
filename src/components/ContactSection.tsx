import { ContactCard } from "./ContactCard";
import { contactInfo } from "../core/data/portfolio";
import "../common/styles/contact-section.css";

export function ContactSection() {
  
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {Object.values(contactInfo).map((contact) => (
          <ContactCard
            key={contact.label}
            icon={contact.icon}
            label={contact.label}
            href={contact.href}
          />
        ))}
      </div>
    </section>
  );
}
