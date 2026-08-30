import { defaultWhatsappMessage, whatsappLink } from '../data/campaign'
import { WhatsAppIcon } from './Icons'

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp da campanha"
    >
      <WhatsAppIcon />
    </a>
  )
}
