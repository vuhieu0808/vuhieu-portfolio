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
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section-divider" aria-hidden="true" />
      <span className="section-meta">{meta}</span>
    </div>
  );
}
