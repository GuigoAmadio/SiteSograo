import { useState } from 'react'
import { faqs } from '../data/campaign'

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container-narrow">
        <div className="section-head">
          <p className="eyebrow">Tire a dúvida</p>
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <article className="faq-item" key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span aria-hidden="true">{isOpen ? '–' : '+'}</span>
                </button>
                {isOpen ? <div className="answer">{item.a}</div> : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
