import { testimonials } from '../data/campaign'

export function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experiência, trabalho e resultados</p>
          <h2>Marcos de quem já fez em Campinas</h2>
          <p className="lead">Advogado, vereador duas vezes e autor de mais de 30 leis. O que a cidade já viu — sem depoimento inventado.</p>
        </div>
        <div className="quote-grid">
          {testimonials.map((item) => (
            <article className="quote" key={item.name}>
              <p>{item.text}</p>
              <strong>{item.name}</strong>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
