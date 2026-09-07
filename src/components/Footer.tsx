import { campaign } from '../data/campaign'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>
              {campaign.nickname} {campaign.numberDisplay}
            </h3>
            <p>
              {campaign.fullName}
              <br />
              {campaign.office} · {campaign.party}
            </p>
          </div>
          <div>
            <h3>Contato</h3>
            <p>
              <a href={`https://wa.me/${campaign.whatsapp}`}>WhatsApp da campanha</a>
              <br />
              <a href={`mailto:${campaign.email}`}>{campaign.email}</a>
              <br />
              <a href={campaign.instagramUrl} target="_blank" rel="noreferrer">
                @{campaign.instagram}
              </a>
            </p>
          </div>
          <div>
            <h3>Comitê</h3>
            <p>
              {campaign.address}
              <br />
              {campaign.hours}
            </p>
          </div>
        </div>
        <div className="legal">
          <p>
            Propaganda eleitoral. Eleições {campaign.year}. Esta página tem caráter informativo da campanha de{' '}
            {campaign.fullName} ({campaign.nickname}), {campaign.office.toLowerCase()}, número {campaign.numberDisplay}.
            CNPJ {campaign.cnpj}.
          </p>
          <p>
            © {campaign.year} {campaign.nickname}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
