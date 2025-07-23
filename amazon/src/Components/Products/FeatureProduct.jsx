import React from 'react';
import { useProductContext } from '../../Context/ProductContext';
import { Product } from './Product';
import './FeatureProduct.css'; 

export const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div className="loading">...loading</div>;
  }

  return (
    <section className="feature-section">
      <div className="feature-container">
        <h2 className="feature-title">Our Feature Services</h2>

        <div className="feature-grid">
          {featureProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </section>
  );
};
