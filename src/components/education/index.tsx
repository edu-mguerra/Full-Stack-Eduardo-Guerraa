import { Certificate } from 'crypto';
import './style.css';
import { Certificatee } from './certifica/certificate';


export default function Education() {
  return (
    <section className="education">
      <h2>Capacitação</h2>

      <div className="educationItem">
        <h3>Graduando em Análise e Desenvolvimento de Sistemas</h3>
        <p className="institution">Universidade Federal do Vale do São Francisco ( UNIVASF )</p>
        <p className="date">2024 - 2027</p>
      </div>

      <Certificatee />
      <br></br>
      <br></br>

    </section>
  );
}
