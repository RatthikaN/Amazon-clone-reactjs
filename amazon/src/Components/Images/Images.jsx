import React, { useState } from "react";
import "./Images.css"; 

export const Images = ({ Imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(Imgs[0]);

  return (
    <div className="images-wrapper">
      <div className="thumbnail-list">
        {Imgs.map((curElem, index) => (
          <figure key={index}>
            <img
              src={curElem.url}
              alt={curElem.filename}
              className="thumbnail-img"
              onClick={() => setMainImage(curElem)}
            />
          </figure>
        ))}
      </div>

      <div className="main-image-container">
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className="main-img"
        />
      </div>
    </div>
  );
};
