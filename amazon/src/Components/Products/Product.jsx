import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import "./Product.css"; 

export const Product = ({ id, image, name, price, category }) => {
  return (
    <div className="product-card">
      <Link to={`/singleproduct/${id}`}>
        <div className="product-box">
          <figure className="product-image-wrapper">
            <img
              src={image}
              alt={name}
              className="product-image"
            />
            <figcaption className="product-category">
              {category}
            </figcaption>
          </figure>
          <div className="product-content">
            <div className="product-info">
              <h3 className="product-title">{name}</h3>
              <p className="product-price">
                <FormatPrice price={price} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
