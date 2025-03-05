import React, { useState, useEffect } from 'react';
import './ImageSwitcher.css'; // Arquivo CSS para estilo

const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/img1.jpg', //0
    '/images/img2.jpg', // 1
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [images.length]);

  return (
    <div className="imageContainer">
      <img
        className="image"
        src={images[currentImage]}
        alt="Imagem alternada"
      />
    </div>
  );
};

export default ImageSwitcher;
