type PageHeroProps = {
  eyebrow: string;
  lead: string;
};

export function PageHero({ eyebrow, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
