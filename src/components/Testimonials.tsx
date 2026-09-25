import { useState } from 'react'
import { works } from '../data/campaign'
import { WorkIcon } from './Icons'

const ROPE_W = 1200
const ROPE_H = 240
const ROPE_MID = 148
const ROPE_SEG = 200

function cubic(t: number, a: number, b: number, c: number, d: number) {
  const u = 1 - t
  return u ** 3 * a + 3 * u ** 2 * t * b + 3 * u * t ** 2 * c + t ** 3 * d
}

function ropeExt(segment: number) {
  return segment % 2 === 0 ? 108 : 188
}

function buildRope() {
  let d = `M 0 ${ROPE_MID}`
  let x = 0
  let segment = 0
  while (x < ROPE_W - 0.5) {
    const next = Math.min(x + ROPE_SEG, ROPE_W)
    const span = next - x
    const ext = ropeExt(segment)
    d += ` C ${x + span * 0.38} ${ext}, ${x + span * 0.72} ${ext}, ${next} ${ROPE_MID}`
    x = next
    segment += 1
  }
  return d
}

function ropeY(x: number) {
  const segment = Math.min(Math.floor(x / ROPE_SEG), Math.ceil(ROPE_W / ROPE_SEG) - 1)
  const start = segment * ROPE_SEG
  const next = Math.min(start + ROPE_SEG, ROPE_W)
  const span = next - start
  const t = span === 0 ? 0 : (x - start) / span
  const ext = ropeExt(segment)
  return cubic(t, ROPE_MID, ext, ext, ROPE_MID)
}

function nodePoint(index: number, total: number) {
  const x = ((index + 0.5) / total) * 0.86 * ROPE_W + 0.07 * ROPE_W
  return { x, y: ropeY(x) }
}

const rope = buildRope()

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = works[active]

  return (
    <section className="section trail" id="trabalhos">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experiência, trabalho e resultados</p>
          <h2>Linha do tempo em Campinas</h2>
          <p className="lead">Cada card é um trabalho do mandato. Clique e leia o que mudou na cidade.</p>
        </div>
      </div>

      <div className="trail-stage">
        <svg
          className="trail-rope"
          viewBox={`0 0 ${ROPE_W} ${ROPE_H}`}
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path className="trail-rope-glow" d={rope} />
          <path className="trail-rope-line" d={rope} />
        </svg>

        <div className="trail-nodes">
          {works.map((item, index) => {
            const isOn = active === index
            const point = nodePoint(index, works.length)
            return (
              <div
                className="trail-node"
                key={item.short}
                style={{
                  left: `${(point.x / ROPE_W) * 100}%`,
                  top: `${(point.y / ROPE_H) * 100}%`,
                }}
              >
                <button
                  type="button"
                  className={`trail-card${isOn ? ' is-on' : ''}`}
                  onClick={() => setActive(index)}
                  aria-pressed={isOn}
                >
                  <span className="trail-card-icon">
                    <WorkIcon name={item.icon} />
                  </span>
                  <span className="trail-card-copy">
                    <small>{item.tag}</small>
                    <b>{item.short}</b>
                  </span>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container">

        <div className="trail-detail" key={current.short}>
          <span className="trail-detail-icon">
            <WorkIcon name={current.icon} />
          </span>
          <small>{current.tag}</small>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </div>
    </section>
  )
}
