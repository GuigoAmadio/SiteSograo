import {
  campaign,
  candidatePhoto,
  defaultWhatsappMessage,
  whatsappLink,
} from '../data/campaign'
import { NavLink } from '../lib/route'
import { WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker">
            <b>{campaign.numberDisplay}</b>
            {campaign.office} · {campaign.city}
          </div>
          <h1>
            Dr. {campaign.firstName} <em>{campaign.lastName}</em>
            <span> para deputado federal</span>
          </h1>
          <p>{campaign.subheadline}</p>
          <div className="hero-actions">
            <a className="btn btn-white" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Fale com o Elcio
            </a>
            <NavLink className="btn btn-ghost" href="/projetos">
              Ver projetos
            </NavLink>
          </div>
        </div>

        <div className="hero-photo">
          <img src={candidatePhoto} alt={campaign.fullName} />
          <div className="hero-badge">
            <small>Vote</small>
            <strong>{campaign.numberDisplay}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
