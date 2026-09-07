import { useState } from 'react'
import { proposals } from '../data/campaign'
import { ProposalIcon } from './Icons'

export function ProposalCards() {
  const [active, setActive] = useState(0)
  const current = proposals[active]

  return (
    <section className="section proposals" id="propostas">
      <div className="container">
        <div className="proposal-picks">
          {proposals.map((item, index) => {
            const isOn = active === index
            return (
              <button
                type="button"
                key={item.num}
                className={`proposal-pick${isOn ? ' is-on' : ''}`}
                onClick={() => setActive(index)}
                aria-pressed={isOn}
              >
                <span className="proposal-pick-icon">
                  <ProposalIcon name={item.icon} />
                </span>
                <small>{item.num}</small>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </button>
            )
          })}
        </div>

        <div className="proposal-detail" key={current.num}>
          <small>{current.num}</small>
          <h3>{current.title}</h3>
          <p>{current.detail}</p>
        </div>
      </div>
    </section>
  )
}
