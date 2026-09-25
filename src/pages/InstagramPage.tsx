import { InstagramVideoGrid } from '../components/Instagram'
import { PageHero } from '../components/PageHero'
import { campaign, candidatePhoto, instagramVideos } from '../data/campaign'
import { InstagramIcon } from '../components/Icons'

export function InstagramPage() {
  return (
    <>
      <PageHero
        eyebrow="Do feed para a rua"
        lead="Todos os vídeos da campanha, no mesmo lugar."
      />
      <section className="section instagram">
        <div className="container">
          <div className="ig-profile">
            <div className="ig-profile-left">
              <img className="ig-avatar" src={candidatePhoto} alt="" />
              <div>
                <strong>@{campaign.instagram}</strong>
                <span>{instagramVideos.length} vídeos da campanha</span>
              </div>
            </div>
            <a className="btn btn-navy" href={campaign.instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon />
              Seguir no Instagram
            </a>
          </div>
          <InstagramVideoGrid clips={instagramVideos} />
        </div>
      </section>
    </>
  )
}
