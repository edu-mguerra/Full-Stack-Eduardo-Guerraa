import { Certificate } from 'crypto';
import './style.css';
import { Certificatee } from './certifica/certificate';
import { Stats } from './stats/page';

export default function Education() {
  return (
    <section className="education">


      <div className="educationItem">
        <h2>Formação</h2>
        <h3>Graduando em Análise e Desenvolvimento de Sistemas</h3>
        <p className="institution">Universidade Federal do Vale do São Francisco ( UNIVASF )</p>
        <p className="date">2024 - 2027</p>
      </div>

      <Certificatee />
      <br></br>
      <br></br>
      <Stats />

    </section>
  );
}
