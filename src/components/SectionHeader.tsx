type SectionHeaderProps = {
  title: string;
  description: string;
  meta: string;
};

export function SectionHeader({
  title,
  description,
  meta,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr_auto] md:items-end md:gap-8">
      <div>
        <h2 className="text-h2 font-semibold text-on-surface">{title}</h2>
        <p className="mt-2 max-w-xl text-on-surface-variant">{description}</p>
      </div>
      <div
        className="h-px bg-gradient-to-r from-outline-variant to-transparent"
        aria-hidden="true"
      />
      <span className="font-mono-label text-caption uppercase tracking-[0.16em] text-primary">
        {meta}
      </span>
    </div>
  );
}
