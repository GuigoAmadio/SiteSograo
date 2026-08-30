import { useState, type FormEvent } from 'react'
import { campaign, whatsappLink } from '../data/campaign'
import { WhatsAppIcon } from './Icons'

export function FinalCta() {
  const [name, setName] = useState('')
  const [bairro, setBairro] = useState('')
  const [phone, setPhone] = useState('')

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const message = [
      `Olá, Sogrão! Quero entrar na campanha.`,
      `Nome: ${name}`,
      `Bairro: ${bairro}`,
      phone ? `WhatsApp: ${phone}` : '',
      `Número ${campaign.numberDisplay}.`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section final-cta" id="apoiar">
      <div className="container-narrow">
        <div className="section-head">
          <p className="eyebrow">Comitê aberto</p>
          <h2>Entre na campanha agora</h2>
          <p className="lead">
            Deixe seu nome. A gente te chama no WhatsApp com a próxima ação — carreata, rua ou grupo do bairro.
          </p>
        </div>
        <form className="final-box" onSubmit={onSubmit}>
          <label className="field">
            <span>Seu nome</span>
            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Como te chamam na rua" />
          </label>
          <label className="field">
            <span>Bairro</span>
            <input value={bairro} onChange={(e) => setBairro(e.target.value)} required placeholder="Onde você mora" />
          </label>
          <label className="field">
            <span>WhatsApp</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(11) 90000-0000" />
          </label>
          <button className="btn btn-white" type="submit">
            <WhatsAppIcon />
            Enviar para o comitê
          </button>
        </form>
      </div>
    </section>
  )
}
