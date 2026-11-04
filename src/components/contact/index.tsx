import React from "react";
import "./contact.css";
import { contacts } from "@/data/contacts";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contactHeader">
        <h2 className="contactTitle">Vamos Conversar?</h2>
        <div className="headerDivider"></div>
        <p className="contactSubtitle">
          Estou sempre aberto a novas conversas. 
          Escolha a melhor forma de entrar em contato comigo!
        </p>
      </div>

      <div className="contactGrid2x2">
        <div className="contactRow">
          <a
            href={contacts[0].url}
            className="contactCard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--card-color': contacts[0].color } as React.CSSProperties}
          >
            <div className="cardIcon">
              <img src={contacts[0].icon} alt={contacts[0].name} />
              <div className="iconBackground"></div>
            </div>
            
            <div className="cardContent">
              <h3>{contacts[0].name}</h3>
              <p>{contacts[0].description}</p>
            </div>

            <div className="cardArrow">
              <span>→</span>
            </div>
          </a>

          <a
            href={contacts[1].url}
            className="contactCard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--card-color': contacts[1].color } as React.CSSProperties}
          >
            <div className="cardIcon">
              <img src={contacts[1].icon} alt={contacts[1].name} />
              <div className="iconBackground"></div>
            </div>
            
            <div className="cardContent">
              <h3>{contacts[1].name}</h3>
              <p>{contacts[1].description}</p>
            </div>

            <div className="cardArrow">
              <span>→</span>
            </div>
          </a>
        </div>

        <div className="contactRow">
          <a
            href={contacts[2].url}
            className="contactCard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--card-color': contacts[2].color } as React.CSSProperties}
          >
            <div className="cardIcon">
              <img src={contacts[2].icon} alt={contacts[2].name} />
              <div className="iconBackground"></div>
            </div>
            
            <div className="cardContent">
              <h3>{contacts[2].name}</h3>
              <p>{contacts[2].description}</p>
            </div>

            <div className="cardArrow">
              <span>→</span>
            </div>
          </a>

          <a
            href={contacts[3].url}
            className="contactCard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--card-color': contacts[3].color } as React.CSSProperties}
          >
            <div className="cardIcon">
              <img src={contacts[3].icon} alt={contacts[3].name} />
              <div className="iconBackground"></div>
            </div>
            
            <div className="cardContent">
              <h3>{contacts[3].name}</h3>
              <p>{contacts[3].description}</p>
            </div>

            <div className="cardArrow">
              <span>→</span>
            </div>
          </a>
        </div>
      </div>

      <div className="contactFooter">
        <p className="footerText">
          Respondo em até 24 horas. Vamos criar algo incrível juntos! 🚀
        </p>
      </div>
    </section>
  );
}
