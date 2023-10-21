import React, { useState } from 'react';
import './Rating.css'
import Cards from './Card'
const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    console.log(newRating,"star");
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'selected' : ''}`}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
  
    </div>
  );
};

export default StarRating;
