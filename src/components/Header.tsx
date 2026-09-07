import { campaign, defaultWhatsappMessage, nav, whatsappLink } from '../data/campaign'
import { NavLink, usePath } from '../lib/route'
import { MenuIcon, WhatsAppIcon } from './Icons'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePath()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <NavLink className="brand" href="/" aria-label={`${campaign.nickname} campanha`} onNavigate={() => setOpen(false)}>
          <span className="brand-mark">EL</span>
          <span className="brand-copy">
            <strong>
              {campaign.firstName} <b>{campaign.lastName}</b>
            </strong>
            <span>{campaign.office}</span>
          </span>
        </NavLink>

        <nav className={`nav${open ? ' open' : ''}`} aria-label="Seções da campanha">
          {nav.map((item) => {
            const active = item.href === '/' ? path === '/' : path === item.href
            return (
              <NavLink
                key={item.href}
                href={item.href}
                className={active ? 'is-active' : undefined}
                onNavigate={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          })}
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
