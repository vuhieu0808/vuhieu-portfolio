import "./App.css";

import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { IntroSection } from "./components/IntroSection";
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";
import { navItems } from "./data/portfolio";

function App() {
  return (
    <div className="app-shell">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-surface/60 shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a
            className="font-mono-label text-mono-label font-bold uppercase tracking-[0.2em] text-primary"
            href="#top"
            aria-label="PORTFOLIO home"
          >
            PORTFOLIO
          </a>

          <nav
            className="hidden items-center gap-6 font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b-2 border-transparent pb-1 transition-colors hover:border-primary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="border border-transparent bg-primary-container px-5 py-2 font-mono-label text-mono-label uppercase tracking-widest text-on-primary-container transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            href="#contact"
          >
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

      <footer className="border-t border-outline-variant bg-surface-container-lowest/70 py-8">
        <div className="container grid gap-4 text-sm text-on-surface-variant md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="font-mono-label text-caption uppercase tracking-[0.2em] text-primary">
            PORTFOLIO
          </div>
          <div className="md:justify-self-center">
            Built by{" "}
            <span className="font-semibold text-on-surface">vuhieu</span> -
            &copy; 2024. All rights reserved.
          </div>
          <div className="flex items-center gap-4 md:justify-self-end">
            <a
              className="transition-colors hover:text-primary"
              href="#projects"
            >
              Source
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Terminal
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="#experience"
            >
              Network
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
