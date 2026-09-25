import { useState, type FormEvent } from "react";
import { brand } from "../assets/brand";
import { campaign, whatsappLink } from "../data/campaign";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  const [name, setName] = useState("");
  const [bairro, setBairro] = useState("");
  const [phone, setPhone] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const message = [
      `Olá, Elcio! Quero entrar na campanha.`,
      `Nome: ${name}`,
      `Bairro: ${bairro}`,
      phone ? `WhatsApp: ${phone}` : "",
      `Número ${campaign.numberDisplay}.`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <footer className="site-footer" id="apoiar">
      <div className="container">
        <div className="footer-body">
          <div className="footer-identity">
            <div className="footer-brand">
              <img
                className="footer-avante"
                src={brand.avante}
                alt={campaign.party}
              />
              <img
                className="footer-number"
                src={brand.number}
                alt={campaign.numberDisplay}
              />
            </div>
            <div className="footer-copy">
              <p className="footer-name">{campaign.fullName}</p>
              <p className="footer-role">
                {campaign.office} · {campaign.party}
              </p>
            </div>
          </div>

          <form className="footer-form" onSubmit={onSubmit}>
            <div className="footer-join-copy">
              <h2>Entre na campanha</h2>
              <p>
                Deixe seu nome. A gente te chama no WhatsApp com a próxima ação.
              </p>
            </div>
            <label className="field">
              <span>Nome</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Como te chamam"
              />
            </label>
            <label className="field">
              <span>Bairro</span>
              <input
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                required
                placeholder="Onde você mora"
              />
            </label>
            <label className="field">
              <span>WhatsApp</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 90000-0000"
              />
            </label>
            <button className="btn btn-white" type="submit">
              <WhatsAppIcon />
              Enviar
            </button>
          </form>

          <div className="footer-aside">
            <div className="footer-block">
              <h3>Contato</h3>
              <a className="footer-link" href={`https://wa.me/${campaign.whatsapp}`}>
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a className="footer-link" href={`mailto:${campaign.email}`}>
                <MailIcon />
                {campaign.email}
              </a>
              <a className="footer-link" href={campaign.instagramUrl} target="_blank" rel="noreferrer">
                <InstagramIcon />
                @{campaign.instagram}
              </a>
            </div>
            <div className="footer-block">
              <h3>Comitê</h3>
              <p>{campaign.address}</p>
              <p>{campaign.hours}</p>
            </div>
          </div>
        </div>
        <div className="legal">
          <p>
            Eleições {campaign.year}. Esta página tem caráter informativo da
            campanha de {campaign.fullName} ({campaign.nickname}),{" "}
            {campaign.office.toLowerCase()}, número {campaign.numberDisplay}.
            CNPJ {campaign.cnpj}.
          </p>
        </div>
      </div>
    </footer>
  );
}
