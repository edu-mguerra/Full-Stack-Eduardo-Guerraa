import "./contact.css";

export default function Contact() {

  return (
    <section className="contato">
      <h2>Entre em Contato</h2>
      <p>Se você deseja conversar ou tem alguma dúvida, não hesite em me contatar!
        <br></br>
        Aqui estão minhas formas de contato:</p>

      <div className="contato-opcoes">

        <a href="https://wa.me/558791065219" className="btn-social" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" /> WhatsApp
        </a>


        <a href="https://www.linkedin.com/in/eduardo-guerra-mh/" className="btn-social" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /> LinkedIn
        </a>


        <a href="https://github.com/edu-mguerra" className="btn-social" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" /> GitHub
        </a>


        <a href="https://www.instagram.com/eduardo.mguerra/" className="btn-social" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" /> Instagram
        </a>
      </div>
    </section>

  )
}
