import { profile } from "../core/data/portfolio";

export function IntroSection() {
  return (
    <section className="hero-section container">
      {/* Hàng 1: Ảnh (trái) + Tên & Summary (phải) */}
      <div className="grid-12 hero-main-row">
        <div className="avatar-section span-5">
          <div className="avatar-glow-wrapper">
            <div className="avatar-container">
              <img
                src={profile.avatar}
                alt="Portfolio Avatar"
                className="avatar-image"
              />
            </div>
          </div>
        </div>

        <div className="hero-copy span-7">
          {/* <div className="eyebrow">System Architect // v4.0.1</div> */}
          <h1>
            {profile.name}
            <br />
          </h1>
          <div className="intro-location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {profile.location}
          </div>
          <p className="lead">
            {profile.summary}
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
      </div>
    </section>
  );
}