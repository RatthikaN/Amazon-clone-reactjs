import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./HomeCorousel.css";

export const HomeCorousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.firstChild.offsetWidth + 16;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.firstChild.offsetWidth + 16;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const HomeCorousel = [
    {
      id: 1,
      cover: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/CC/PC_CC_379X304._SY304_CB546861540_.jpg",
      title: "Bluetooth Calling Smartwatch starts at ₹999",
    },
    {
      id: 2,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/PatriotMemory._CB547894735_.png",
      title: "Bestselling headphones starts at ₹199",
    },
    {
      id: 3,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/PANSEBA._CB546742684_.png",
      title: "Starting ₹99 | Air-purifying plants",
    },
    {
      id: 4,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/LANEIGE._CB546742684_.png",
      title: "Up to 60% off | Car, bike parts & accessories",
    },
    {
      id: 5,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/TrungNguyen._CB547894735_.png",
      title: "Up to 60% off | Start your fitness journey",
    },
    {
      id: 6,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/CINCOM._CB546742684_.png",
      title: "Up to 50% off | International brands",
    },
    {
      id: 7,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/TrungNguyen._CB547894735_.png",
      title: "Under ₹699 | Combo packs | Amazon brands",
    },
    {
      id: 8,
      cover: "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/Jimmy._CB546742684_.png",
      title: "Season 2 streaming now | Only on miniTV",
    },
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel-header">
          <p className="carousel-title">Min. 50% off | Unique home finds | Amazon Brands & more</p>
          <Link to="/products" className="carousel-link">See all</Link>
        </div>

        <div className="carousel-scroll-wrapper">
          <button className="carousel-arrow left" onClick={scrollLeft}>
            <MdOutlineKeyboardArrowLeft />
          </button>

          <div ref={scrollRef} className="carousel-scroll">
            <div className="carousel-items">
              {HomeCorousel.map((item) => (
                <div key={item.id} className="carousel-card">
                  <img src={item.cover} alt={item.title} className="carousel-image" />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow right" onClick={scrollRight}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCorousel;