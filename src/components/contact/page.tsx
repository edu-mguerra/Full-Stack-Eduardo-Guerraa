import "./contact.css";

export default function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      url: "https://wa.me/5587992020340",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      color: "#25D366",
      description: "Conversa rápida e direta"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eduardo-guerra-mh/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      color: "#0077B5",
      description: "Conecte-se profissionalmente"
    },
    {
      name: "GitHub",
      url: "https://github.com/edu-mguerra",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
      color: "#6e5494",
      description: "Veja meus projetos"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/eduardo.mguerra/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      color: "#E4405F",
      description: "Me acompanhe no dia a dia"
    }
  ];

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