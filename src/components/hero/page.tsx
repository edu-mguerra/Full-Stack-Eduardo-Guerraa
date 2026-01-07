import './style.css';
import ImageSwitcher from './sectionImg';
import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMessageSquare, FiCode, FiCpu, FiZap, FiChevronRight } from 'react-icons/fi';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const newParticles = [];
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];
    
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(newParticles);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 10, 0.95)');
      gradient.addColorStop(1, 'rgba(20, 20, 30, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * 0.0005 * force;
          particle.vy += dy * 0.0005 * force;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i >= j) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      const icons = [
        { icon: '{}', x: canvas.width * 0.2, y: canvas.height * 0.3 },
        { icon: '<>', x: canvas.width * 0.8, y: canvas.height * 0.4 },
        { icon: '()', x: canvas.width * 0.3, y: canvas.height * 0.7 },
        { icon: '[]', x: canvas.width * 0.7, y: canvas.height * 0.8 },
      ];

      icons.forEach(({ icon, x, y }) => {
        ctx.font = '24px monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillText(icon, x, y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='section' onMouseMove={handleMouseMove}>
      <canvas ref={canvasRef} className='canvasBackground' />
      
      <div className='contentWrapper'>
        <ImageSwitcher />
        
        <div className='textContainer'>
          <div className='divText'>
            <div className='titleWrapper'>
              <h2 className='title'>
                <span className='titlePart'>Eduardo</span>
                <span className='titleAccent'> Guerra</span>
              </h2>
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
                  href="/cv/curriculoDEV.pdf"
                  download="Curriculo Eduardo Guerra"
                  className="buttonH downloadBtn"
                >
                  <FiDownload className="btnIcon" />
                  <span className="btnText">Download CV</span>
                  <div className="btnGlow"></div>
                </a>
              </div>

              <div className="buttonWrapper">
                <a
                  href="https://wa.me/5587992020340"
                  className="buttonH contactBtn"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FiMessageSquare className="btnIcon" />
                  <span className="btnText">Contact me</span>
                  <FiChevronRight className="btnArrow" />
                </a>
              </div>
            </div>

            <div className='scrollIndicator'>
              <div className='scrollLine'></div>
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </div>

      <div className='floatingElements'>
        <div className='floatingElement code'>{"<Code />"}</div>
        <div className='floatingElement react'>{"{ React }"}</div>
        <div className='floatingElement node'>Node.js</div>
        <div className='floatingElement ts'>TypeScript</div>
      </div>
    </div>
  );
}