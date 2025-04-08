import "./footer.css";

export default function Footer() {
  return (

    <footer className="footer">
      <p>© {new Date().getFullYear()} Eduardo Guerra. Todos os direitos reservados.</p>
      <div className="social-links">

        <a href="https://www.linkedin.com/in/eduardo-guerra-mh/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://wa.me/558791065219" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
        </a>

        <a href="https://www.instagram.com/eduardo.mguerra/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
        </a>
      </div>

    </footer>

  )
}
