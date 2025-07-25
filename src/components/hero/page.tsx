import './style.css';
import ImageSwitcher from './sectionImg';

export const Hero = () => {

  return (
    <div className='section'>
      <div className='videoContainer'>
        <video autoPlay loop muted className='videoBackground'>
          <source src="https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>


      <ImageSwitcher />

      <div className='textContainer'>
        <div className='divText'>
          <h2 className='title'>Eduardo Guerra</h2>
          <p className='description'>DESENVOLVEDOR FULL STACK</p>

          <div className="buttonContainer">
            <div className="relative inline-block">
              <a
                href="/cv/curriculoDEV.pdf"
                download="Curriculo Eduardo Guerra"
                className="buttonH relative z-10"
              >
                Download CV
              </a>
            </div>

            <div className="relative inline-block">
              <a
                href="https://wa.me/5587992020340"
                className="buttonH relative z-10"
                target='_blank'
              >
                Contact me
              </a>
            </div>
          </div>
        </div>

      </div>


    </div>



  )
}

