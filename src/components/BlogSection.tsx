import { useState } from "react";

import { blogPosts, type BlogPost } from "../data/portfolio";
import { DetailModal } from "./DetailModal";
import { SectionHeader } from "./SectionHeader";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
        closeLabel=""
        onClose={() => setSelectedPost(null)}
      >
        {selectedPost ? (
          <article className="blog-modal-layout">
            <header className="blog-modal-header">
              <div>
                <div className="blog-modal-kicker-row">
                  <span>Engineering Deep Dive</span>
                  <i aria-hidden="true" />
                  <span>{selectedPost.date}</span>
                </div>
                <h2>{selectedPost.title}</h2>
              </div>
            </header>

            <div className="blog-modal-scroll">
              <div className="blog-modal-hero">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5o-GgqCL8mgsiQLU6KaW1ELy1DESTyhq68oIhTy515Hm9QyNstzTPs7noB8YaLdrtP8ZrE31uL19X51X9BXi_3hidOh3yQrR1_ydxGEmxbismJXXhfciCywYmthi6trzi8y1SKgkcWSltU4-6NrvGvwkY1NTeBdjJVOLkx2QLv37mgaOldkYGAxFPh802psU1RLKFY38c5fEzQ7xLda_7gmeGlrQxv-EP04Xuap2a80rYKhX3laV--mxUpQvRR4CjFmxjTNLcqzY"
                  alt="Cinematic server room with emerald indicators"
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
                <p>{selectedPost.detailSummary}</p>

                <h3>Implementation Highlights</h3>
                <p>
                  Managing concurrency and consistency in distributed systems
                  requires more than generic defaults. The article focuses on
                  operational choices that hold under real production load.
                </p>

                <div className="blog-modal-code">
                  <div className="blog-modal-code-head">
                    <span>distributed_lock.go</span>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      content_copy
                    </span>
                  </div>
                  <pre>
                    <code>
                      {`func AcquireLock(ctx context.Context, key string) bool {
  val := uuid.New().String()
  ok, err := rdb.SetNX(ctx, key, val, 10*time.Second).Result()
  return err == nil && ok
}`}
                    </code>
                  </pre>
                </div>

                <div className="detail-block blog-modal-points">
                  <h4>Key Points</h4>
                  <ul className="detail-list">
                    {selectedPost.detailPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <section className="blog-modal-related">
                <h4>Related Technical Briefs</h4>
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
                <button type="button">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    thumb_up
                  </span>
                  <span>128 APPLAUDS</span>
                </button>
                <button type="button">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    share
                  </span>
                  <span>EXPORT ARCHIVE</span>
                </button>
              </div>
              <div>
                <button type="button" className="button button-outline">
                  Dismiss
                </button>
                <button type="button" className="button button-primary">
                  Subscribe to Updates
                </button>
              </div>
            </footer>
          </article>
        ) : null}
      </DetailModal>
    </section>
  );
}
