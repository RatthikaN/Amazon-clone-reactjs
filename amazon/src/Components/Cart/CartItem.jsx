import React from "react";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartToggleAmount } from "./CartToggleAmount";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../Context/CartContext";
import "./CartItem.css"; // Importing the CSS

export const CartItem = ({ id, name, image, price, amount, color }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <div className="cart-item-container">
      <figure className="cart-item-img">
        <img src={image} alt={name} />
      </figure>

      <div className="cart-item-info">
        <p className="cart-item-name">{name}</p>
        <div className="cart-item-color-wrapper">
          <span>Color:</span>
          <span
            className="cart-color-box"
            style={{ backgroundColor: color }}
            aria-label={`Color: ${color}`}
          ></span>
        </div>
        <p className="cart-item-price">
          <FormatPrice price={price} />
        </p>
        <CartToggleAmount
          amount={amount}
          setDecrease={() => setDecrement(id)}
          setIncrease={() => setIncrement(id)}
        />
      </div>

      <button
        onClick={() => removeItem(id)}
        className="cart-delete-btn"
        aria-label={`Remove ${name} from cart`}
      >
        <MdDelete />
      </button>
    </div>
  );
};
