import { PageHero } from '../components/PageHero'
import { ProposalCards } from '../components/ProposalCards'

export function ProposalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mandato federal"
        lead="Hospital Metropolitano, farmácia solidária e mobilidade regional. Clique no card e leia embaixo."
      />
      <ProposalCards />
    </>
  )
}
