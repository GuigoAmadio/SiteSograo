import {
  campaign,
  candidatePhoto,
  defaultWhatsappMessage,
  whatsappLink,
} from '../data/campaign'
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
          <h1>{campaign.headline}</h1>
          <p>{campaign.subheadline}</p>
          <div className="hero-actions">
            <a className="btn btn-white" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Fale com o Sogrão
            </a>
            <a className="btn btn-ghost" href="#trabalhos">
              Ver trabalhos
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={candidatePhoto} alt={`${campaign.fullName}, o ${campaign.nickname}`} />
          <div className="hero-badge">
            <small>Vote</small>
            <strong>{campaign.numberDisplay}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
