import React from "react";
import { Product } from "../Products/Product";
import "./GridView.css"; 

export const GridView = ({ products }) => {
  return (
    <div className="gridview-container">
      <div className="gridview-grid">
        {products.map((curElem) => (
          <Product key={curElem.id} {...curElem} />
        ))}
      </div>
    </div>
  );
};
