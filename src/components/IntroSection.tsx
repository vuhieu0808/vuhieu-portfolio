import vuhieu from "../assets/vuhieu.webp";

export function IntroSection() {
  return (
    <section className="container flex flex-col gap-10 py-20 pb-10">
      {/* Hàng 1: Ảnh (trái) + Tên & Summary (phải) */}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div
              className="absolute -inset-6 rounded-full bg-emerald/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-high/70 p-3 backdrop-blur-glass">
              <img
                src={vuhieu}
                alt="Portfolio Avatar"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {/* <div className="eyebrow">System Architect // v4.0.1</div> */}
          <h1 className="text-h1 font-bold tracking-[-0.02em] text-on-surface">
            Vũ Trần Minh Hiếu
            <br />
            <span></span>
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
            I'm a second-year IT student focused on backend development and
            systems programming. I enjoy building with Node.js and C/C++,
            solving technical problems, and learning through personal projects.
          </p>
        </div>
      </div>

      {/* Hàng 2: Social Media (trái) + Actions (phải) */}
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/vuhieu886"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/vuhieu0808"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:col-span-7 md:justify-start">
          <a
            className="border border-transparent bg-primary px-6 py-3 font-mono-label text-mono-label uppercase tracking-widest text-on-primary transition-all hover:brightness-110"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="border border-primary px-6 py-3 font-mono-label text-mono-label uppercase tracking-widest text-primary transition-colors hover:bg-primary/10"
            href="#contact"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
