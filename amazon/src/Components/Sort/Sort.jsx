import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../../Context/FilterContext";
import "./Sort.css"; // 👈 Import external CSS

export const Sort = () => {
  const { setGridView, setListView, filterProducts, sorting } = useFilterContext();

  return (
    <div className="sort-container">
      {/* View Toggle Buttons */}
      <div className="sort-icons">
        <button onClick={setGridView} className="sort-btn">
          <IoGrid />
        </button>
        <button onClick={setListView} className="sort-btn">
          <FaThList />
        </button>
      </div>

      {/* Product Count */}
      <div className="sort-count">
        {`${filterProducts.length} Product${filterProducts.length !== 1 ? "s" : ""} Available`}
      </div>

      {/* Sorting Dropdown */}
      <form className="sort-form">
        <label className="sort-label">
          <span>Sort by:</span>
          <select id="sort" className="sort-select" onChange={sorting}>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </label>
      </form>
    </div>
  );
};
