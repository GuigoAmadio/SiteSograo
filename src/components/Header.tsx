import { useEffect, useState } from 'react'
import { campaign, defaultWhatsappMessage, nav, whatsappLink } from '../data/campaign'
import { MenuIcon, WhatsAppIcon } from './Icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={`${campaign.nickname} campanha`}>
          <span className="brand-mark">SG</span>
          <span className="brand-copy">
            <strong>{campaign.nickname}</strong>
            <span>{campaign.office}</span>
          </span>
        </a>

        <nav className={`nav${open ? ' open' : ''}`} aria-label="Seções da campanha">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-navy header-cta" href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          Quero apoiar
        </a>

        <button className="menu-toggle" type="button" aria-label="Abrir menu" onClick={() => setOpen((v) => !v)}>
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
