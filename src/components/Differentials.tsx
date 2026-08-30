import {
  communityPhoto,
  defaultWhatsappMessage,
  differentials,
  whatsappLink,
} from '../data/campaign'
import { WhatsAppIcon } from './Icons'

export function Differentials() {
  return (
    <section className="section" id="presenca">
      <div className="container diff-grid">
        <div>
          <p className="eyebrow">Por que o Sogrão</p>
          <h2>Presença e cobrança a favor da nossa gente.</h2>
          <p className="lead">
            Lidar sozinho com a prefeitura cansa. Um protocolo mal feito some. Um vereador que mora o problema
            não deixa o pedido morrer na gaveta.
          </p>
          <ul className="diff-list">
            {differentials.map((item) => (
              <li key={item.title}>
                <strong>{item.title}: </strong>
                {item.text}
              </li>
            ))}
          </ul>
          <a className="btn btn-navy" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Chamar no WhatsApp
          </a>
        </div>
        <div className="diff-photo">
          <img src={communityPhoto} alt="Moradores reunidos em mutirão de bairro" />
        </div>
      </div>
    </section>
  )
}
