import React from "react";
import { FilterSection } from "../FilterSection/FilterSection";
import { Sort } from "../Sort/Sort";
import { ProductList } from "./ProductList";
import { Layout } from "../Layout/Layout";
import "./Products.css"; // 👈 Import CSS

export const Products = () => {
  return (
    <Layout>
      <div className="products-container">
        <aside className="products-filter">
          <FilterSection />
        </aside>

        <main className="products-main">
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </main>
      </div>
    </Layout>
  );
};
