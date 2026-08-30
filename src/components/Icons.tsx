type IconProps = { className?: string }

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.3L1 23l5.9-1.1A11 11 0 1 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.1-.3c0-.1 0-.3 0-.4s-.6-1.5-.8-2-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3a2.1 2.1 0 0 0-.7 1.6 3.7 3.7 0 0 0 .8 2c.1.1 1.4 2.2 3.5 3.1 2 .8 2 .5 2.4.5s1.3 0 1.8-.3 1.6-1.2 1.8-1.5.2-.3.1-.4Z" />
    </svg>
  )
}

export function StreetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 38V22l16-12 16 12v16" />
      <path d="M20 38V28h8v10" />
      <path d="M6 38h36" />
    </svg>
  )
}

export function HealthIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="8" width="28" height="32" rx="4" />
      <path d="M24 16v16M16 24h16" />
    </svg>
  )
}

export function SchoolIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 20 24 10l18 10-18 10L6 20Z" />
      <path d="M12 24v10c6 4 18 4 24 0V24" />
    </svg>
  )
}

export function SafetyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 8 10 14v10c0 10 6.5 16 14 18 7.5-2 14-8 14-18V14L24 8Z" />
      <path d="m18 24 4 4 8-9" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}
