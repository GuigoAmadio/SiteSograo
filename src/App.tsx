import { About } from './components/About'
import { Differentials } from './components/Differentials'
import { FAQ } from './components/FAQ'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Instagram } from './components/Instagram'
import { Proposals } from './components/Proposals'
import { Situations } from './components/Situations'
import { Testimonials } from './components/Testimonials'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Works } from './components/Works'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Situations />
        <Differentials />
        <About />
        <Works />
        <Proposals />
        <Instagram />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
