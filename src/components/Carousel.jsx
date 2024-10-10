import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ images, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Empezamos en el primer elemento real
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  useEffect(() => {
    if (isTransitioning && currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    } else if (isTransitioning && currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedImages.length - 2);
      }, 500);
    }
  }, [currentIndex, extendedImages.length, isTransitioning]);

  return (
    <div className="carousel-container w-full max-w-xl overflow-hidden relative">
      <div
        className={`carousel flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="shadow-lg carousel-image w-full shrink-0">
            <Image
              src={src}
              alt={`Imagen ${index}`}
              width={350}
              height={350}
              className="w-full"
              priority={index === 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
