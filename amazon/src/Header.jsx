import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import "./Header.css"; // Optional CSS file

export const Header = () => {
  return (
    <header className="header">
      {/* Left: Logo and Location */}
      <div className="header-left">
        <Link to="/" className="amazon-logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon"
          />
        </Link>
         </div>
        <div className="location">
      <span style={{ fontSize: "12px", color: "#ccc" }}>Deliver to</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MdLocationOn size={16} color="white" style={{ marginRight: "4px" }} />
        <strong style={{ fontSize: "14px", color: "#fff" }}>India</strong>
      </div>
    </div>

      

          <div className="search-bar">
        <input type="text" placeholder="Search Amazon.in" />
          <button className="search-button">
           <FiSearch size={18} color="black" />
         </button>
      </div>


      {/* Right: Language, Account, Orders, Cart */}
      <div className="header-right">
        <div className="lang">
         <img
               src="https://flagcdn.com/w40/in.png"
               alt="India Flag"
               width="20"
              height="15"
              style={{ marginRight: '5px',objectFit:"cover" }}
           />
         EN
      </div>



<Link to="/signin" className="header-box account">
  <span>Hello, Sign In</span>
  <strong>Account & Lists</strong>
</Link>


        <Link to="/orders" className="header-box orders">
           <span>Returns</span>
            <strong>& Orders</strong>
      </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">0</span>
          <strong>Cart</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;
