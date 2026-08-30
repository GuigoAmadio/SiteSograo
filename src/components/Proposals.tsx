import { defaultWhatsappMessage, proposals, whatsappLink } from '../data/campaign'
import { WhatsAppIcon } from './Icons'

export function Proposals() {
  return (
    <section className="section proposals" id="propostas">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Plano de mandato</p>
          <h2>Seis frentes. Uma cidade que funciona.</h2>
          <p className="lead">Prioridade do mandato escrita em linguagem de rua — para você cobrar depois.</p>
        </div>
        <div className="proposal-grid">
          {proposals.map((item) => (
            <article className="proposal" key={item.num}>
              <span>{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <a className="btn btn-navy" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Quero somar nessa luta
          </a>
        </div>
      </div>
    </section>
  )
}
