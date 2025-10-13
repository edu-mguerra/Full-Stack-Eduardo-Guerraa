import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eduardo-guerra-mh/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      color: "#0077B5"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5587992020340",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      color: "#25D366"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/eduardo.mguerra/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      color: "#E4405F"
    },
    {
      name: "GitHub",
      url: "https://github.com/edu-mguerra",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
      color: "#6e5494"
    }
  ];

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
              {socialLinks.map((social) => (
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