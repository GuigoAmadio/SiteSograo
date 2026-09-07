import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'

function currentPath() {
  return window.location.pathname.replace(/\/$/, '') || '/'
}

export function usePath() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const sync = () => {
      setPath(currentPath())
      const hash = window.location.hash
      if (hash) {
        window.requestAnimationFrame(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
        })
      } else {
        window.scrollTo(0, 0)
      }
    }
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  return path
}

export function go(href: string) {
  const url = new URL(href, window.location.origin)
  if (url.origin !== window.location.origin) {
    window.location.href = href
    return
  }
  if (url.pathname === window.location.pathname && url.hash === window.location.hash) {
    if (url.hash) document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
    return
  }
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

type NavLinkProps = {
  href: string
  children: ReactNode
  onNavigate?: () => void
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function NavLink({ href, children, className, onNavigate, onClick, ...rest }: NavLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    if (/^(https?:|mailto:|tel:)/.test(href)) return
    event.preventDefault()
    go(href)
    onNavigate?.()
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
