import React, { useState, useEffect, useRef } from 'react';
import './ImageSwitcher.css'; 
import { FiCamera, FiRefreshCw, FiZap, FiHexagon } from 'react-icons/fi';

const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('next');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const images = [
    '/images/img1.jpeg',
    '/images/img2.jpeg',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      angle: number;
      spin: number;
    }> = [];

    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02
      });
    }

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(10, 10, 10, 0.1)');
      gradient.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.angle += particle.spin;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = Math.cos(angle) * particle.size;
          const py = Math.sin(angle) * particle.size;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = Math.cos(angle) * (particle.size + 2);
          const py = Math.sin(angle) * (particle.size + 2);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        ctx.strokeStyle = particle.color;
        ctx.globalAlpha = particle.alpha * 0.3;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();

        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 100) * 0.1;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setTransitionDirection('next');
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handleNext = () => {
    setTransitionDirection('next');
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setTransitionDirection('prev');
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="imageSwitcherContainer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas ref={canvasRef} className="particlesCanvas" />
      
      <div className="imageWrapper">
        <div className="imageFrame">
          <div className="glowEffect glow1"></div>
          <div className="glowEffect glow2"></div>
          <div className="glowEffect glow3"></div>
          
          <div className="orbitalRing ring1"></div>
          <div className="orbitalRing ring2"></div>
          <div className="orbitalRing ring3"></div>
          
          <div className={`imageContainer ${transitionDirection}`}>
            <img
              className="image mainImage"
              src={images[currentImage]}
              alt="Profile"
            />
            
            <img
              className="image previousImage"
              src={images[(currentImage - 1 + images.length) % images.length]}
              alt="Previous"
            />
          </div>
          
          <div className="imageOverlay"></div>
        </div>
        
       
        
        <div className="imageControls">
          <button 
            className="controlButton prevButton"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <span>‹</span>
          </button>
          
          <div className="imageIndicator">
            <div className="indicatorContainer">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`indicatorDot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => {
                    setTransitionDirection(index > currentImage ? 'next' : 'prev');
                    setCurrentImage(index);
                  }}
                />
              ))}
            </div>
            <span className="imageCounter">
              {currentImage + 1} / {images.length}
            </span>
          </div>
          
          <button 
            className="controlButton nextButton"
            onClick={handleNext}
            aria-label="Next image"
          >
            <span>›</span>
          </button>
        </div>
        
        
      </div>
    </div>
  );
};

export default ImageSwitcher;