import { FAQ } from '../components/FAQ'
import { FinalCta } from '../components/FinalCta'
import { Hero } from '../components/Hero'
import { Instagram } from '../components/Instagram'
import { Proposals } from '../components/Proposals'
import { Testimonials } from '../components/Testimonials'
import { Works } from '../components/Works'

export function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <Proposals />
      <Instagram />
      <Testimonials />
      <FAQ />
      <FinalCta />
    </>
  )
}
