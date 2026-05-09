export function ContactSection() {
  return (
    <section className="container section-block" id="contact">
      <div className="contact-card glass-card">
        <div className="contact-mark" aria-hidden="true">
          <span className="material-symbols-outlined">Contact</span>
        </div>
        <div className="contact-content">
          <h2>
            Let&apos;s build <br />
            something <span>robust</span>.
          </h2>
          <p className="lead">
            I&apos;m currently open to architectural consulting or high-impact
            backend roles. If you have a scaling challenge, let&apos;s talk.
          </p>

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="form-grid">
              <label>
                <span>Identity</span>
                <input type="text" placeholder="John Doe" />
              </label>
              <label>
                <span>Email_Address</span>
                <input type="email" placeholder="john@example.com" />
              </label>
            </div>

            <label>
              <span>System_Message</span>
              <textarea
                placeholder="Describe your technical requirements..."
                rows={4}
              />
            </label>

            <button
              className="button button-primary submit-button"
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
