import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../core/data/portfolio";
import { profile, footerLinks } from "../core/data/portfolio";


interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/#about" aria-label="PORTFOLIO home">
            PORTFOLIO
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => {
              return (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Link className="button button-primary header-button" to={profile.resumeLink} target="_blank" rel="noopener noreferrer">
            Download Resume
          </Link>
        </div>
      </header>

      <main className="page-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">PORTFOLIO</div>
          <div className="footer-copy">
            &copy; 2026 <span className="footer-brand">vuhieu</span>. All rights
            reserved.
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                className="project-detail-footer-button"
                onClick={() => window.open(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
