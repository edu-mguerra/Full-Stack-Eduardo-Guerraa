import React from "react";
import "./footer.css";
import { contacts } from "@/data/contacts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerMain">
          <div className="footerText">
            <h3>Eduardo Guerra</h3>
            <p>Desenvolvedor Full Stack</p>
            <div className="footerDivider"></div>
            <p className="footerQuote">
              Transformando ideias em soluções digitais inovadoras
            </p>
          </div>

          <div className="footerSocial">
            <h4>Conecte-se comigo</h4>
            <div className="socialGrid">
              {contacts.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  aria-label={social.name}
                >
                  <div className="socialIcon">
                    <img src={social.icon} alt={social.name} />
                  </div>
                  <span className="socialName">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerDividerLarge"></div>
          <div className="copyright">
            <p>© {currentYear} Eduardo Guerra. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
