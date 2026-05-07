type LegalPageProps = {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <section className="legal-page">
      <span className="eyebrow">CYE ASESORES</span>
      <h1>{title}</h1>
      <p className="legal-intro">{intro}</p>
      <div className="legal-content">
        {sections.map((section) => (
          <article key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
