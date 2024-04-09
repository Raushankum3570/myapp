import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const SlideShow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="slideshow-container">
      {images.map((images, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img src={images} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
