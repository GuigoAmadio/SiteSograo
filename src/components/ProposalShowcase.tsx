import { useState } from "react";
import { brand } from "../assets/brand";
import porqueVideo from "../assets/videos/porque.mp4";
import { proposals } from "../data/campaign";
import { ProposalIcon } from "./Icons";

export function ProposalShowcase() {
  const [active, setActive] = useState(0);
  const current = proposals[active];

  return (
    <section className="section proposals showcase" id="propostas">
      <div className="container">
        <div className="why-video">
          <div className="phone-frame">
            <video src={porqueVideo} controls playsInline preload="metadata" />
          </div>
        </div>

        <div className="section-head">
          <img
            className="section-invite"
            src={brand.invite}
            alt="Conheça a trajetória e as propostas"
          />
        </div>

        <div className="proposal-picks">
          {proposals.map((item, index) => {
            const isOn = active === index;
            return (
              <button
                type="button"
                key={item.num}
                className={`proposal-pick${isOn ? " is-on" : ""}`}
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
            );
          })}
        </div>

        <div className="proposal-detail" key={current.num}>
          <small>{current.num}</small>
          <h3>{current.title}</h3>
          <p>{current.detail}</p>
        </div>
      </div>
    </section>
  );
}
