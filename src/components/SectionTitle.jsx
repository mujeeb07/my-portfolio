function SectionTitle({ eyebrow, title, description }) {
  return (
    <header>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="section-title mt-3">{title}</h2>
      {description ? <p className="section-subtitle">{description}</p> : null}
    </header>
  );
}

export default SectionTitle;
