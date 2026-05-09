import vuhieu from "../common/assets/vuhieu.webp";

export function IntroSection() {
  return (
    <section className="hero-section container">
      {/* Hàng 1: Ảnh (trái) + Tên & Summary (phải) */}
      <div className="grid-12 hero-main-row">
        <div className="avatar-section span-5">
          <div className="avatar-glow-wrapper">
            <div className="avatar-container">
              <img
                src={vuhieu}
                alt="Portfolio Avatar"
                className="avatar-image"
              />
            </div>
          </div>
        </div>

        <div className="hero-copy span-7">
          {/* <div className="eyebrow">System Architect // v4.0.1</div> */}
          <h1>
            Vũ Trần Minh Hiếu
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
            Ho Chi Minh City, Viet Nam
          </div>
          <p className="lead">
            I'm a second-year IT student focused on backend development and
            systems programming. I enjoy building with Node.js and C/C++,
            solving technical problems, and learning through personal projects.
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