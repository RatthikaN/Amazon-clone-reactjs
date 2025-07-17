import React from "react";
import "./CartToggleAmount.css";

export const CartToggleAmount = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="cart-toggle-container">
      <button
        onClick={setDecrease}
        className="toggle-btn"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="amount-display">{amount}</span>
      <button
        onClick={setIncrease}
        className="toggle-btn"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
