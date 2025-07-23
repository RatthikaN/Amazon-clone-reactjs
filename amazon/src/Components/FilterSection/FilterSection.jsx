import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useFilterContext } from "../../Context/FilterContext";
import "./FilterSection.css"; 

export const FilterSection = () => {
  const {
    updateFilterValue,
    filters: { text },
    allProducts,
    color,
    ResetFilter,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => curElem[property]);
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return [...new Set(newVal)];
  };

  const getCategoryData = getUniqueData(allProducts, "category");
  const getCompanyData = getUniqueData(allProducts, "company");
  const getColorsData = getUniqueData(allProducts, "colors");

  return (
    <div className="filter-section">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search Products"
          className="search-input"
        />
      </form>

      <div className="filter-block">
        <p className="filter-title">Category</p>
        {getCategoryData.map((curElem, index) => (
          <button
            key={index}
            type="button"
            name="category"
            value={curElem}
            onClick={updateFilterValue}
            className="filter-button"
          >
            {curElem}
          </button>
        ))}
      </div>

      <div className="filter-block">
        <p className="filter-title">Company</p>
        {getCompanyData.map((curElem, index) => (
          <label key={index} className="filter-checkbox-label">
            <input
              type="checkbox"
              name="company"
              value={curElem}
              onClick={updateFilterValue}
            />
            <span>{curElem}</span>
          </label>
        ))}
      </div>

      <div className="filter-block">
        <p className="filter-title">Colors</p>
        <div className="color-wrapper">
          {getColorsData.map((curColor, index) => (
            <button
              key={index}
              type="button"
              value={curColor}
              name="color"
              style={{ backgroundColor: curColor }}
              onClick={updateFilterValue}
              className="color-button"
            >
              {color === curColor ? (
                <IoIosCheckmark className="checkmark-icon" />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <button onClick={ResetFilter} className="reset-button">
        Reset
      </button>
    </div>
  );
};
