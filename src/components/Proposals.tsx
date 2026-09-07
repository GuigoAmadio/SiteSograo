import { useEffect, useRef, useState } from 'react'
import { proposals } from '../data/campaign'

export function Proposals() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLElement | null)[]>([])
  const [pinTop, setPinTop] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      const track = trackRef.current
      if (!track) return

      const trackRect = track.getBoundingClientRect()
      const mid = window.innerHeight / 2
      const raw = mid - trackRect.top
      setPinTop(Math.max(12, Math.min(trackRect.height - 12, raw)))

      let best = 0
      let bestDist = Number.POSITIVE_INFINITY
      rowRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - mid)
        if (dist < bestDist) {
          bestDist = dist
          best = index
        }
      })
      setActive(best)
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="section proposals" id="propostas">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">O que vem no mandato</p>
          <h2>Propostas</h2>
          <p className="lead">Três frentes do mandato federal. A linha acompanha o foco enquanto você desce.</p>
        </div>

        <div className="timeline" ref={trackRef}>
          <div className="timeline-pin" style={{ top: pinTop }} aria-hidden="true" />
          {proposals.map((item, index) => (
            <article
              key={item.num}
              className={`timeline-row${index % 2 === 1 ? ' is-right' : ''}${active === index ? ' is-active' : ''}`}
              ref={(node) => {
                rowRefs.current[index] = node
              }}
            >
              <div className="timeline-card">
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
