import { useState } from "react";

import { blogPosts, type BlogPost } from "../data/portfolio";
import { DetailModal } from "./DetailModal";
import { SectionHeader } from "./SectionHeader";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const detail = selectedPost?.detail;

  const relatedPosts = selectedPost
    ? blogPosts.filter((post) => post.title !== selectedPost.title).slice(0, 2)
    : [];

  return (
    <section className="container section-block" id="blog">
      <SectionHeader
        title="Technical Blog"
        description="Insights on systems architecture and backend performance."
        meta="Logs: Latest"
      />

      <div className="card-grid three-up">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="glass-card blog-card interactive-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedPost(post)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedPost(post);
              }
            }}
          >
            <span className="card-date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button
              type="button"
              className="inline-link inline-link-button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedPost(post);
              }}
            >
              READ MORE <span aria-hidden="true">arrow_forward_ios</span>
            </button>
          </article>
        ))}
      </div>

      <DetailModal
        isOpen={Boolean(selectedPost)}
        panelClassName="blog-modal"
        closeClassName="blog-modal-close"
        onClose={() => setSelectedPost(null)}
      >
        {selectedPost && detail ? (
          <article className="blog-modal-layout">
            <header className="blog-modal-header">
              <div>
                <div className="blog-modal-kicker-row">
                  <span>{detail.kickerLabel}</span>
                  <i aria-hidden="true" />
                  <span>{selectedPost.date}</span>
                </div>
                <h2>{selectedPost.title}</h2>
              </div>
            </header>

            <div className="blog-modal-scroll">
              <div className="blog-modal-hero">
                <img
                  src={detail.heroImage}
                  alt={detail.heroAlt}
                  loading="lazy"
                />
                <div className="blog-modal-hero-overlay" />
              </div>

              <div className="blog-modal-reading-info">
                <div>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    schedule
                  </span>
                  <span>{selectedPost.readTime.toUpperCase()}</span>
                </div>
                <div>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    database
                  </span>
                  <span>{selectedPost.category.toUpperCase()}</span>
                </div>
              </div>

              <div className="blog-modal-article">
                <p>{detail.overviewText}</p>

                <h3>{detail.overviewTitle}</h3>
                <p>{detail.implementationText}</p>

                <div className="blog-modal-code">
                  <div className="blog-modal-code-head">
                    <span>{detail.codeFileName}</span>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      content_copy
                    </span>
                  </div>
                  <pre>
                    <code>{detail.codeSnippet}</code>
                  </pre>
                </div>

                <div className="detail-block blog-modal-points">
                  <h4>{detail.pointsTitle}</h4>
                  <ul className="detail-list">
                    {detail.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <section className="blog-modal-related">
                <h4>{detail.relatedTitle}</h4>
                <div className="blog-modal-related-grid">
                  {relatedPosts.map((post, index) => (
                    <article
                      key={post.title}
                      className="blog-modal-related-card"
                    >
                      <span>ARCH_STABLE • 0{index + 2}</span>
                      <h5>{post.title}</h5>
                      <div>
                        <span>
                          {post.category.replaceAll(" ", "_").toUpperCase()}
                        </span>
                        <span>RELIABILITY</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <footer className="blog-modal-footer">
              <div>
                {detail.footerStats.map((action) => (
                  <button key={action.label} type="button">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {action.icon}
                    </span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
              <div>
                {detail.footerButtons.map((btn, index) => (
                  <button
                    key={btn.label}
                    type="button"
                    className={
                      index === 0
                        ? "button button-outline"
                        : "button button-primary"
                    }
                    onClick={() => {
                      window.location.href = btn.link;
                      if (btn.link.startsWith("#")) {
                        const targetElement = document.querySelector(btn.link);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                          setSelectedPost(null);
                        }
                      }
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </footer>
          </article>
        ) : null}
      </DetailModal>
    </section>
  );
}
