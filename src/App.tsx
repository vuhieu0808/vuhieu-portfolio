import "./App.css";

import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { IntroSection } from "./components/IntroSection";
import { BlogSection } from "./components/BlogSection";
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";
import { navItems } from "./data/portfolio";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="SYS_ARCH home">
            SYS_ARCH
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

      <main id="top" className="page-content">
        <IntroSection />
        <ProjectSection />
        <BlogSection />
        <SkillSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">SYS_ARCH // v4.0.1</div>
          <div className="footer-copy">
            © 2024 ARCH_STABLE. Built for performance.
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
