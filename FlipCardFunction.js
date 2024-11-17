import React, { useState, useEffect } from 'react';
import './FlipCard.css';

const FlipCardFunction = ({ frontImage, backImage }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default FlipCardFunction;

