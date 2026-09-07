import { campaign, candidatePhoto, instagramVideos } from '../data/campaign'
import { InstagramIcon } from './Icons'

export function Instagram() {
  return (
    <section className="section instagram" id="instagram">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Do feed para a rua</p>
          <h2>A campanha nos stories</h2>
          <p className="lead">Os vídeos que o Elcio posta — o mesmo recado, agora aqui no site.</p>
        </div>

        <div className="ig-profile">
          <div className="ig-profile-left">
            <img className="ig-avatar" src={candidatePhoto} alt="" />
            <div>
              <strong>@{campaign.instagram}</strong>
              <span>Acompanhe o dia a dia da campanha</span>
            </div>
          </div>
          <a className="btn btn-navy" href={campaign.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon />
            Seguir no Instagram
          </a>
        </div>

        <div className="ig-grid ig-grid-video">
          {instagramVideos.map((clip) => (
            <article className="ig-card ig-video-card" key={clip.id}>
              <video src={clip.src} controls playsInline preload="metadata" />
              <div className="ig-card-body">
                <p>{clip.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
