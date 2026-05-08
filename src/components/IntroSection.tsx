export function IntroSection() {
  return (
    <section className="hero-section container grid-12">
      <div className="hero-copy span-7">
        <div className="eyebrow">System Architect // v4.0.1</div>
        <h1>
          Building Scalable <br />
          <span>Backend Systems</span>
        </h1>
        <p className="lead">
          Specializing in high-concurrency architectures, distributed data
          processing, and cloud-native infrastructure. I design systems where
          stability under load isn&apos;t a goal, it&apos;s the baseline.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-outline" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="terminal-card span-5">
        <div className="terminal-window glass-card">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">guest@sys_arch:~$</span> tail -f
              logs/architecture.log
            </p>
            <p>[2024-05-21 10:44:02] INFO: Initializing load balancer...</p>
            <p className="terminal-success">
              [2024-05-21 10:44:03] SUCCESS: Node cluster synchronized.
            </p>
            <p>
              [2024-05-21 10:44:05] INFO: Cache layer warm (98.4% hit rate).
            </p>
            <p className="terminal-success">
              [2024-05-21 10:44:08] ACTIVE: Handling 450k req/sec.
            </p>
            <p className="cursor">_</p>
          </div>
        </div>
      </div>
    </section>
  );
}
