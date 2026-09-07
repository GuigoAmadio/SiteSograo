import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { NavLink, usePath } from './lib/route'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProposalsPage } from './pages/ProposalsPage'

const titles: Record<string, string> = {
  '/': 'Dr. Elcio Batista para deputado federal — 7026',
  '/projetos': 'Projetos | Elcio Batista 7026',
  '/propostas': 'Propostas | Elcio Batista 7026',
}

export default function App() {
  const path = usePath()

  useEffect(() => {
    document.title = titles[path] ?? titles['/']
  }, [path])

  const page = path === '/projetos' ? <ProjectsPage /> : path === '/propostas' ? <ProposalsPage /> : <HomePage />

  return (
    <>
      <NavLink className="skip-link" href="/#inicio">
        Ir para o conteúdo
      </NavLink>
      <Header />
      <main>{page}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
