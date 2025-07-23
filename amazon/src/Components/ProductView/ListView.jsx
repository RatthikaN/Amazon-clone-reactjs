import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import "./ListView.css";

export const ListView = ({ products }) => {
  return (
    <div className="listview-wrapper">
      {products.map((product) => {
        const { id, name, price, image, description } = product;
        return (
          <div key={id} className="listview-card">
            <figure className="listview-image-wrapper">
              <img src={image} alt={name} className="listview-image" />
            </figure>

            <div className="listview-content">
              <p className="listview-description">{description.slice(0, 90)}...</p>
              <h2 className="listview-title">{name}</h2>
              <p className="listview-price">
                Price: <FormatPrice price={price} />
              </p>
              <Link to={`/singleproduct/${id}`}>
                <button className="listview-button">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
