import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import './Stars.css'; // Import CSS

export const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <IoStar />
        ) : stars >= numbers ? (
          <IoStarHalf />
        ) : (
          <IoMdStarOutline />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="star-container">
        {ratingStar}
      </div>
      <p className="review-text">Customer reviews: {reviews}</p>
    </>
  );
};
