import "./App.css";

import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { IntroSection } from "./components/IntroSection";
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";
import { CertificationSection } from "./components/CertificationSection";
import { navItems } from "./data/portfolio";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#about" aria-label="PORTFOLIO home">
            PORTFOLIO
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-primary header-button" href="#contact">
            Download CV
          </a>
        </div>
      </header>

      <main id="about" className="page-content">
        <IntroSection />
        <ProjectSection />
        {/* <BlogSection /> */}
        <SkillSection />
        <ExperienceSection />
        <CertificationSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">PORTFOLIO</div>
          <div className="footer-copy">
            Built by <span className="footer-brand">vuhieu</span> - &copy; 2024.
            All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#projects">Source</a>
            <a href="#contact">Terminal</a>
            <a href="#experience">Network</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
