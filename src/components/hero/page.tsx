import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSwitcher from './sectionImg';

export const Hero = () => {

  return (
    <div className='section'>
      <div className='videoContainer'>
        <video autoPlay loop muted className='videoBackground'>
          <source src="/videos/1.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>

      <ImageSwitcher />

      <div className='textContainer'>
        <div className='divText'>
          <h2 className='title'>Eduardo Guerra</h2>
          <p className='description'>DESENVOLVEDOR FULL STACK</p>

          <div className='buttonContainer'>
            <a href='/cv/curriculoDEV.pdf'
              download='Curriculo Eduardo Guerra'
              className='buttonH'>
              Download CV
            </a>

            <a href='mailto:eduguerra.dev@gmail.com'
              className='buttonH'>
              Contact me
            </a>
          </div>

        </div>


      </div>


    </div >
  )
}

