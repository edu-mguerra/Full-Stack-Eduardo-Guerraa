import './style.css';
import ImageSwitcher from './sectionImg';

export const Hero = () => {

return (
  <div className='section'>
    <div className='videoContainer'>
      <video autoPlay loop muted playsInline className='videoBackground'>
        <source src="https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className='videoOverlay'></div>
    </div>

    <div className='contentWrapper'>
      <ImageSwitcher />
      
      <div className='textContainer'>
        <div className='divText'>
          <div className='titleWrapper'>
            <h2 className='title'>Eduardo</h2>
            <h2 className='title accent'>Guerra</h2>
          </div>
          
          <div className='descriptionContainer'>
            <div className='line'></div>
            <p className='description'>DESENVOLVEDOR FULL STACK</p>
            <div className='line'></div>
          </div>

          <p className='subtitle'>Criando soluções digitais inovadoras</p>

          <div className="buttonContainer">
            <div className="buttonWrapper">
              <a
                href="/cv/curriculoDEV.pdf"
                download="Curriculo Eduardo Guerra"
                className="buttonH downloadBtn"
              >
                <span className="btnText">Download CV</span>
                <div className="btnIcon">↓</div>
              </a>
            </div>

            <div className="buttonWrapper">
              <a
                href="https://wa.me/5587992020340"
                className="buttonH contactBtn"
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className="btnText">Contact me</span>
                <div className="btnIcon">→</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

