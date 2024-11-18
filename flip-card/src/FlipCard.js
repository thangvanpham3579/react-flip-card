import React, { useState, useEffect } from "react";
import "./FlipCard.css";
import frontImage from "./images/KingOfSpades.png";
import backImage from "./images/CardBack.jpg";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, []);

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
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

export default FlipCard;
