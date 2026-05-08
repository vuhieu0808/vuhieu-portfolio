import { useEffect, type ReactNode } from "react";

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  panelClassName?: string;
  closeClassName?: string;
  closeLabel?: string;
};

export function DetailModal({
  isOpen,
  onClose,
  children,
  panelClassName,
  closeClassName,
  closeLabel = "×",
}: DetailModalProps) {
  const closeText = closeLabel || "×";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="detail-modal-overlay" role="presentation" onClick={onClose}>
      <section
        className={`detail-modal-panel glass-card ${panelClassName ?? ""}`.trim()}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={`detail-modal-close ${closeClassName ?? ""}`.trim()}
          onClick={onClose}
          aria-label="Close details"
        >
          <span aria-hidden="true">{closeText}</span>
        </button>

        <div className="detail-modal-content">{children}</div>
      </section>
    </div>
  );
}
