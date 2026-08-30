import { testimonials } from '../data/campaign'

export function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Quem já caminhou junto</p>
          <h2>Depoimentos da vizinhança</h2>
          <p className="lead">Gente real, de rua real — o tipo de avaliação que não se compra.</p>
        </div>
        <div className="quote-grid">
          {testimonials.map((item) => (
            <article className="quote" key={item.name}>
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
