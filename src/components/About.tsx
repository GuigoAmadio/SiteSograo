import { about, campaign, candidatePhoto, defaultWhatsappMessage, whatsappLink } from '../data/campaign'
import { WhatsAppIcon } from './Icons'

export function About() {
  return (
    <section className="section about" id="candidato">
      <div className="container about-grid">
        <div className="about-photo">
          <img src={candidatePhoto} alt={campaign.fullName} />
          <div className="about-stat">
            <b>15+</b>
            <span>anos na luta do bairro</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          <p className="about-lead">{about.lead}</p>
          <p>{about.body}</p>
          <ul>
            {about.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="btn btn-white" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Conversar com o candidato
          </a>
        </div>
      </div>
    </section>
  )
}
