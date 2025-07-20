import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { Stars } from "../Stars/Stars";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { Images } from "../Images/Images";
import { AddToCart } from "../Cart/AddToCart";
import { Layout } from "../Layout/Layout";
import "./SingleProduct.css"; // 👈 Link to the external CSS

const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, SingleProduct } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="singleproduct-loading">...Loading</div>;
  }

  const {
    id: alias,
    name,
    company,
    price,
    image,
    description,
    category,
    stock,
    stars,
    reviews,
  } = SingleProduct || {};

  return (
    <Layout>
      <div className="singleproduct-container">
        <div className="singleproduct-grid">
          {/* Product Image */}
          <div className="singleproduct-image">
            <Images Imgs={image} />
          </div>

          {/* Product Info */}
          <div className="singleproduct-info">
            <h1 className="singleproduct-title">{name}</h1>
            <Stars stars={stars} reviews={reviews} />

            <p className="singleproduct-mrp">
              <b>MRP:</b>{" "}
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <p className="singleproduct-deal">
              <b>Deal of the Day:</b> <FormatPrice price={price} />
            </p>

            <p className="singleproduct-description">{description}</p>

            <p>
              <b>Available:</b> {stock > 0 ? "In Stock" : "Not Available"}
            </p>
            <p>
              <b>Brand:</b> {company}
            </p>

            <hr className="singleproduct-separator" />

            {stock > 0 && <AddToCart product={SingleProduct} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};
