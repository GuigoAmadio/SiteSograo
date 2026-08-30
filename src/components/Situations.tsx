import { defaultWhatsappMessage, situations, whatsappLink } from '../data/campaign'
import { HealthIcon, SafetyIcon, SchoolIcon, StreetIcon, WhatsAppIcon } from './Icons'

const icons = {
  street: StreetIcon,
  health: HealthIcon,
  school: SchoolIcon,
  safety: SafetyIcon,
}

export function Situations() {
  return (
    <section className="section situations" id="situacoes">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">A rua fala</p>
          <h2>Você se identifica com alguma destas situações?</h2>
          <p className="lead">Se alguma destas frases é a história da sua casa, esta campanha também é sua.</p>
        </div>

        <div className="cards-4">
          {situations.map((item) => {
            const Icon = icons[item.icon]
            return (
              <article className="card" key={item.title}>
                <Icon className="card-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>

        <div className="center-cta">
          <a className="btn btn-navy" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Quero que isso mude
          </a>
        </div>
      </div>
    </section>
  )
}
