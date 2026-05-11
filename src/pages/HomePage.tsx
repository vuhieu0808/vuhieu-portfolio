import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { IntroSection } from "../components/IntroSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";
import { CertificationSection } from "../components/CertificationSection";

export function HomePage() {
  return (
    <>
      <section id="about">
        <IntroSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="certifications">
        <CertificationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
