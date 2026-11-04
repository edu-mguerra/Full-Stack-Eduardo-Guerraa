"use client";

import './style.css';
import ImageSwitcher from './sectionImg';
import InteractiveParticleSphere from '../ParticleSphere';
import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiCode, FiCpu, FiZap, FiChevronRight, FiChevronDown, FiFolder } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactChannels = [
  {
    name: "WhatsApp",
    label: "Conversa rápida e direta",
    url: "https://wa.me/5587992020340",
    icon: <FaWhatsapp size={18} />,
    color: "#25D366",
  },
  {
    name: "LinkedIn",
    label: "Conecte-se profissionalmente",
    url: "https://www.linkedin.com/in/eduardo-guerra-mh/",
    icon: <FaLinkedin size={18} />,
    color: "#0077B5",
  },
  {
    name: "GitHub",
    label: "Veja meus projetos e código",
    url: "https://github.com/edu-mguerra",
    icon: <FaGithub size={18} />,
    color: "#a78bfa",
  },
];

export const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className='section' id='hero'>
      <div className='contentWrapper'>
        <div className='heroLeftCol'>
          <ImageSwitcher />
        </div>

        <div className='textContainer heroRightCol'>
          <div className='sphereInteractiveWrapper'>
            <InteractiveParticleSphere
              particleCount={3400}
              particleSize={1.7}
              sphereSize={88}
              rotationSpeed={1.0}
              particleColor="#667eea"
              mouseRepulsion={65}
              mouseRadius={170}
              clickExplosion={true}
              glowEffect={true}
            />
          </div>

          <div className='divText'>
            <div className='titleWrapper'>
              <h1 className='title'>
                <span className='titlePart'>Eduardo <span className='titleAccent'>Guerra</span></span>
              </h1>
            </div>

            <div className='techBadges'>
              <span className='techBadge'><FiCode /> Front-end</span>
              <span className='techBadge'><FiCpu /> Back-end</span>
              <span className='techBadge'><FiZap /> Full Stack</span>
            </div>

            <div className='descriptionContainer'>
              <div className='line'></div>
              <p className='description'>
                <span className='typewriter'>Desenvolvedor Full Stack</span>
              </p>
              <div className='line'></div>
            </div>

            <p className='subtitle'>
              Transformando ideias em soluções digitais inovadoras com tecnologia de ponta
            </p>

            <div className="buttonContainer">
              <div className="buttonWrapper">
                <a
                  href="#projects"
                  className="buttonH projectsBtn"
                  aria-label="Ver Projetos em Destaque"
                >
                  <FiFolder className="btnIcon" />
                  <span className="btnText">Ver Projetos</span>
                  <FiChevronRight className="btnArrow" />
                  <div className="btnGlow"></div>
                </a>
              </div>

              <div className="buttonWrapper contactDropdownWrapper" ref={contactDropdownRef}>
                <button
                  type="button"
                  className="buttonH contactBtn"
                  onClick={() => setIsContactOpen((prev) => !prev)}
                  aria-haspopup="true"
                  aria-expanded={isContactOpen}
                  aria-label="Opções de contato"
                >
                  <FiMessageSquare className="btnIcon" />
                  <span className="btnText">Fale Comigo</span>
                  <FiChevronDown className={`btnChevron ${isContactOpen ? 'rotate' : ''}`} />
                </button>

                {isContactOpen && (
                  <div className="contactDropdownMenu" role="menu">
                    {contactChannels.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contactDropdownItem"
                        role="menuitem"
                        onClick={() => setIsContactOpen(false)}
                      >
                        <div
                          className="contactItemIcon"
                          style={{
                            color: item.color,
                            backgroundColor: `${item.color}15`,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div className="contactItemInfo">
                          <span className="contactItemName">{item.name}</span>
                          <span className="contactItemSub">{item.label}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className='scrollIndicator'>
              <div className='scrollLine'></div>
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
