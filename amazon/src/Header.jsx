import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import amazon_logo from "./assets/amazon_logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useCartContext } from "./Context/CartContext";
import { useFilterContext } from "./Context/FilterContext";
import "./Header.css";

export const Header = () => {
  const { totalItem } = useCartContext();
  const { allProducts } = useFilterContext();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        if (searchTerm.trim() === "") {
          setSuggestions([]);
          return;
        }
        const filtered = allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(filtered);
      }, 300),
    [allProducts]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const handleSuggestionClick = (id) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/singleproduct/${id}`);
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/signin";
  };

  return (
    <header className="header">
      <nav className="header-container">
        <Link to="/" className="logo-link">
          <img src={amazon_logo} alt="Amazon Logo" className="logo" />
        </Link>

        <div className="delivery-box">
          <p>Deliver to</p>
          <div className="delivery-location">
            <MdLocationPin />
            <p className="location-name">India</p>
          </div>
        </div>

        <div className="search-box">
          <div className="search-bar">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Amazon.in"
              className="search-input"
            />
            <div className="search-icon">
              <IoSearch className="icon" />
            </div>
          </div>

          {suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="suggestion-img"
                  />
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="language-box">
          <img
            src="https://www.sic-info.org/wp-content/uploads/2014/01/in.png"
            alt="flag"
            className="flag"
          />
          <p className="bold">EN</p>
        </div>

        <div className="auth-box">
          {user ? (
            <div onClick={logout}>
              <p>Hello, {user.user.displayName || user.user.email}</p>
              <p className="bold logout-text">Logout</p>
            </div>
          ) : (
            <Link to="/signin">
              <p className=" bold text-signin">Hello, Sign In</p>
              <p className="bold logout-text">Account & Lists</p>
            </Link>
          )}
        </div>

        <Link to="/order" className="order-box">
          <p className="bold">Returns</p>
          <p>& Orders</p>
        </Link>

        <Link to="/cart" className="cart-box">
          <LiaShoppingCartSolid className="cart-icon" />
          <span className="cart-count">{totalItem}</span>
          <p className="bold cart-label">Cart</p>
        </Link>
      </nav>
    </header>
  );
};
