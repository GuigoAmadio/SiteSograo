import { FAQ } from '../components/FAQ'
import { Hero } from '../components/Hero'
import { Instagram } from '../components/Instagram'
import { ProposalShowcase } from '../components/ProposalShowcase'
import { Testimonials } from '../components/Testimonials'

export function HomePage() {
  return (
    <>
      <div className="opening">
        <Hero />
        <ProposalShowcase />
      </div>
      <Instagram />
      <Testimonials />
      <FAQ />
    </>
  )
}
