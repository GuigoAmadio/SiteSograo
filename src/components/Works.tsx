import { useState } from 'react'
import { aboutIntro, works } from '../data/campaign'
import { WorkIcon } from './Icons'

export function Works() {
  const [active, setActive] = useState<number | null>(null)
  const current = active === null ? null : works[active]

  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <div className="know-head">
          <p className="eyebrow">Antes do voto, o histórico</p>
          <h2>{aboutIntro.title}</h2>
          <div className="know-copy">
            <p className="know-copy-left">{aboutIntro.paragraphs[0]}</p>
            <p className="know-copy-right">{aboutIntro.paragraphs[1]}</p>
          </div>
        </div>
        <div className="section-head wheel-head">
          <p className="eyebrow">O que já virou lei e projeto</p>
          <h2>Projetos</h2>
          <p className="lead">Passe o mouse na roda. No centro aparece o que aquele trabalho fez por Campinas.</p>
        </div>

        <div className="wheel" onMouseLeave={() => setActive(null)}>
          <div className="wheel-spin" aria-hidden="true" />
          <div className="wheel-ring" aria-hidden="true" />

          <div className="wheel-core">
            {current ? (
              <div className="wheel-core-copy">
                <WorkIcon name={current.icon} />
                <span>{current.tag}</span>
                <strong>{current.title}</strong>
                <p>{current.text}</p>
                <a
                  className="btn-source"
                  href={current.url || undefined}
                  target={current.url ? '_blank' : undefined}
                  rel={current.url ? 'noreferrer' : undefined}
                  aria-disabled={!current.url}
                  onClick={(event) => {
                    if (!current.url) event.preventDefault()
                  }}
                >
                  Ver Fonte
                </a>
              </div>
            ) : (
              <div className="wheel-core-idle">
                <span>Projetos</span>
                <p>Toque ou passe o mouse em um ponto da roda</p>
              </div>
            )}
          </div>

          {works.map((work, index) => {
            const angle = (360 / works.length) * index
            const isOn = active === index
            return (
              <button
                type="button"
                className={`wheel-item${isOn ? ' is-on' : ''}`}
                key={work.short}
                style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * var(--wheel-r))) rotate(${-angle}deg)` }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => {
                  if (work.url) window.open(work.url, '_blank', 'noopener,noreferrer')
                  else setActive(index)
                }}
              >
                <WorkIcon name={work.icon} />
                <b>{work.short}</b>
                <em>{work.tag}</em>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
