import { works } from '../data/campaign'

export function Works() {
  return (
    <section className="section" id="trabalhos">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Já feito, já cobrado</p>
          <h2>Trabalhos que a cidade viu de perto</h2>
          <p className="lead">Não é promessa de palanque. É histórico de mutirão, protocolo e resultado.</p>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <img src={work.image} alt="" />
              <div className="work-body">
                <div className="work-meta">
                  <span>{work.tag}</span>
                  <span>{work.year}</span>
                </div>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
