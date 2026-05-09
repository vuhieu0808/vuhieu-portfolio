export function ContactSection() {
  return (
    <section className="container section-block" id="contact">
      <div className="glass-card relative overflow-hidden p-6 sm:p-10">
        <div
          className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded border border-primary/70 bg-primary/15 text-primary"
          aria-hidden="true"
        >
          <span className="material-symbols-outlined">terminal</span>
        </div>
        <div className="grid max-w-3xl gap-6">
          <h2 className="text-h2 font-semibold leading-tight text-on-surface">
            Let&apos;s build <br />
            something <span className="text-primary">robust</span>.
          </h2>
          <p className="text-body-lg leading-relaxed text-on-surface-variant">
            I&apos;m currently open to architectural consulting or high-impact
            backend roles. If you have a scaling challenge, let&apos;s talk.
          </p>

          <form
            className="grid gap-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-mono-label text-caption uppercase tracking-[0.14em] text-primary">
                  Identity
                </span>
                <input
                  className="w-full rounded border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface"
                  type="text"
                  placeholder="John Doe"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-mono-label text-caption uppercase tracking-[0.14em] text-primary">
                  Email_Address
                </span>
                <input
                  className="w-full rounded border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface"
                  type="email"
                  placeholder="john@example.com"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="font-mono-label text-caption uppercase tracking-[0.14em] text-primary">
                System_Message
              </span>
              <textarea
                className="w-full rounded border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface"
                placeholder="Describe your technical requirements..."
                rows={4}
              />
            </label>

            <button
              className="w-fit border border-transparent bg-primary px-6 py-3 font-mono-label text-mono-label uppercase tracking-widest text-on-primary transition-all hover:brightness-110"
              type="submit"
            >
              Execute Transfer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
