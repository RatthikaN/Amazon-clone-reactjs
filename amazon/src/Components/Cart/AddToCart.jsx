import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { CartToggleAmount } from "./CartToggleAmount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./AddToCart.css";

export const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors = [], stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prev) => (prev < stock ? prev + 1 : stock));
  };

  return (
    <div className="add-to-cart-container">
      <div className="color-options">
        <span className="label">Colors:</span>
        {colors.map((curColor, index) => (
          <button
            key={index}
            style={{ backgroundColor: curColor }}
            className={`color-btn ${color === curColor ? "active" : ""}`}
            onClick={() => setColor(curColor)}
            aria-label={`Select color ${curColor}`}
          >
            {color === curColor && <IoIosCheckmark className="check-icon" />}
          </button>
        ))}
      </div>

      <CartToggleAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <div className="btn-group">
        <Link to="/cart">
          <button
            onClick={() => addToCart(id, amount, color, product)}
            className="btn add-btn"
          >
            Add To Cart
          </button>
        </Link>
        <Link to="/cart">
          <button className="btn buy-btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};
