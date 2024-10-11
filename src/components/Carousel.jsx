import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = ({ images, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Empezamos en el primer elemento real
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]]; // Clonamos la primera y última imagen

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, intervalTime);

    return () => resetTimeout();
  }, [currentIndex, intervalTime]);

  // Efecto para hacer el ciclo infinito sin saltos abruptos
  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      // Al llegar al final, reiniciamos al primer índice real sin transición visible
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Primer índice real
      }, 500); // Espera a que termine la transición
    } else if (currentIndex === 0) {
      // Al llegar al inicio, vamos al último índice real sin transición visible
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedImages.length - 2); // Último índice real
      }, 500);
    }
  }, [currentIndex, extendedImages.length]);

  return (
    <div className="carousel-container w-full max-w-xl overflow-hidden relative">
      <div
        className={`carousel flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={() => setIsTransitioning(true)}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="shadow-lg carousel-image w-full shrink-0">
            <Image
              src={src}
              alt={`Imagen ${index}`}
              width={350}
              height={350}
              className="w-full"
              priority={index === 1} // Prioridad en la primera imagen real
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
