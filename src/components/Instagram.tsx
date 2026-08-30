import { campaign, candidatePhoto, instagramPosts } from '../data/campaign'
import { InstagramIcon } from './Icons'

export function Instagram() {
  return (
    <section className="section instagram" id="instagram">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Do feed para a rua</p>
          <h2>A campanha no Instagram</h2>
          <p className="lead">Bastidor, mutirão e cobrança — o mesmo recado que você vê no bairro.</p>
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

        <div className="ig-grid">
          {instagramPosts.map((post) => (
            <a
              className="ig-card"
              key={post.id}
              href={campaign.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src={post.image} alt="" />
              <div className="ig-card-body">
                <div className="ig-stats">
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>{post.date}</span>
                </div>
                <p>{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
