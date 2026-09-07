type IconProps = { className?: string }

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.3L1 23l5.9-1.1A11 11 0 1 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.1-.3c0-.1 0-.3 0-.4s-.6-1.5-.8-2-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3a2.1 2.1 0 0 0-.7 1.6 3.7 3.7 0 0 0 .8 2c.1.1 1.4 2.2 3.5 3.1 2 .8 2 .5 2.4.5s1.3 0 1.8-.3 1.6-1.2 1.8-1.5.2-.3.1-.4Z" />
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

const workIcons = {
  shield: (
    <>
      <path d="M12 3.5 19 6.2v5.3c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V6.2L12 3.5Z" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="7" r="2.4" />
      <path d="M7.5 19.5v-1.8c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4v1.8" />
      <path d="M8.2 13.2 6 15.6M15.8 13.2 18 15.6" />
    </>
  ),
  law: (
    <>
      <path d="M7 20h10M12 4v16M6.5 8h11M8 8v3.5a2.5 2.5 0 0 1-2.5 2.5H5M16 8v3.5A2.5 2.5 0 0 0 18.5 14H19" />
    </>
  ),
  traffic: (
    <>
      <rect x="8.5" y="3" width="7" height="15" rx="3.2" />
      <circle cx="12" cy="7" r="1.15" />
      <circle cx="12" cy="10.6" r="1.15" />
      <circle cx="12" cy="14.2" r="1.15" />
      <path d="M12 18v3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="4.2" />
      <path d="m14.2 14.2 4.3 4.3" />
      <circle cx="10.5" cy="10.2" r="1.5" />
    </>
  ),
  food: (
    <>
      <path d="M5 11.5c0 4 3.1 7 7 7s7-3 7-7H5Z" />
      <path d="M8 11.5V7.2M12 11.5V5.5M16 11.5V7.2" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 5.2h9.2a2.3 2.3 0 0 1 2.3 2.3v11H9.2A2.2 2.2 0 0 0 7 20.7V5.2Z" />
      <path d="M7 5.2A2.2 2.2 0 0 0 4.8 7.4v13.3" />
      <path d="M10 9.2h6M10 12.2h6M10 15.2h4.2" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4.5 11.2v2.2c0 .8.6 1.4 1.4 1.4H7l1.6 3.4h1.8l-1.2-3.4h.4L19.5 18V6.4L9.6 9.8H5.9c-.8 0-1.4.6-1.4 1.4Z" />
    </>
  ),
  gavel: (
    <>
      <path d="m4.8 13.2 6.4-6.4 2.2 2.2-6.4 6.4z" />
      <path d="m12.8 5.4 2.2 2.2 1.8-1.8-2.2-2.2z" />
      <path d="M5.2 18.8h9.6" />
      <path d="m9.6 11.4 3.4 3.4" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.2h5.4c1.4 0 2.6.8 2.6 2.2v11.4c0-1.2-1.2-2-2.6-2H5V5.2Z" />
      <path d="M19 5.2h-5.4c-1.4 0-2.6.8-2.6 2.2v11.4c0-1.2 1.2-2 2.6-2H19V5.2Z" />
    </>
  ),
  mask: (
    <>
      <path d="M4.5 10.2c2.2-2.4 5-3.4 7.5-3.4s5.3 1 7.5 3.4c-.2 3.2-2.8 6.6-7.5 6.6s-7.3-3.4-7.5-6.6Z" />
      <path d="M4.5 10.2 3 9M19.5 10.2 21 9" />
      <path d="M9.2 12.6h5.6" />
    </>
  ),
  paw: (
    <>
      <circle cx="8" cy="8.4" r="1.5" />
      <circle cx="16" cy="8.4" r="1.5" />
      <circle cx="10.2" cy="5.8" r="1.35" />
      <circle cx="13.8" cy="5.8" r="1.35" />
      <path d="M8.4 16.2c1.1-2.4 2.4-3.4 3.6-3.4s2.5 1 3.6 3.4c-1.2 1.8-2.4 2.6-3.6 2.6s-2.4-.8-3.6-2.6Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="4.5" y="6" width="15" height="13.5" rx="2" />
      <path d="M8 4.5v3M16 4.5v3M4.5 10.2h15" />
    </>
  ),
  building: (
    <>
      <path d="M5 20.5V7.2L12 4.2l7 3v13.3" />
      <path d="M10 20.5v-4.2h4v4.2" />
      <path d="M8.2 10.2h1.6M14.2 10.2h1.6M8.2 13.4h1.6M14.2 13.4h1.6" />
    </>
  ),
  stamp: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 9.2v3.2l2 1.2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="2.2" />
      <path d="M4.8 18.2v-1.4c0-2 1.8-3.6 4.2-3.6s4.2 1.6 4.2 3.6v1.4" />
      <circle cx="16.2" cy="8.6" r="1.8" />
      <path d="M15.2 18.2v-1.2c0-1.5 1-2.7 2.6-3.2" />
    </>
  ),
  city: (
    <>
      <path d="M4 20.5h16" />
      <path d="M5.5 20.5V11h4v9.5" />
      <path d="M9.5 20.5V6.5h5v14" />
      <path d="M14.5 20.5V13h4v7.5" />
      <path d="M7 13.5h1M11.2 9.2h1.4M16.2 15.4h1" />
    </>
  ),
} as const

export type WorkIconName = keyof typeof workIcons

export function WorkIcon({ name, className }: IconProps & { name: WorkIconName }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {workIcons[name]}
    </svg>
  )
}

const proposalIcons = {
  hospital: (
    <>
      <path d="M4 20.5h16" />
      <path d="M6 20.5V8.2L12 4.5l6 3.7v12.3" />
      <path d="M10 20.5v-5h4v5" />
      <path d="M12 9v4.2M9.9 11.1h4.2" />
    </>
  ),
  pharmacy: (
    <>
      <path d="M9 3.8h6v4.8h4.8v6.6H15V20.2H9v-5h-4.8V8.6H9V3.8Z" />
    </>
  ),
  bus: (
    <>
      <rect x="4.2" y="4.8" width="15.6" height="11.2" rx="2.6" />
      <path d="M4.2 11.6h15.6M7.6 16v2.4M16.4 16v2.4M7 8.4h3.2M14 8.4h3.2" />
      <circle cx="8" cy="13.4" r="1" />
      <circle cx="16" cy="13.4" r="1" />
    </>
  ),
} as const

export type ProposalIconName = keyof typeof proposalIcons

export function ProposalIcon({ name, className }: IconProps & { name: ProposalIconName }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {proposalIcons[name]}
    </svg>
  )
}
