import { brand } from '../assets/brand'
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
        <div className="hero-copy">
          <img className="hero-art hero-slogan-art" src={brand.slogan} alt={campaign.slogan} />
          <h1 className="visually-hidden">{campaign.fullName} deputado federal</h1>
          <img className="hero-art hero-wordmark" src={brand.wordmark} alt={campaign.fullName} />
          <p className="hero-intro">{campaign.subheadline}</p>
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
          <img className="hero-number" src={brand.number} alt={campaign.numberDisplay} />
        </div>
      </div>
    </section>
  )
}
