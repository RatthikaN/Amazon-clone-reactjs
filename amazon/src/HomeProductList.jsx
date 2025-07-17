import React from "react";
import { Link } from "react-router-dom";
import "./HomeProductList.css";

export const HomeProductList = () => {
  const HomeProductList = [
    {
      id: 1,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
      title: "Bluetooth Calling Smartwatch starts at ₹999",
    },
    {
      id: 2,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
      title: "Bestselling headphones starts at ₹199",
    },
    {
      id: 3,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
      title: "Starting ₹99 | Air-purifying plants",
    },
    {
      id: 4,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      title: "Up to 60% off | Car, bike parts & accessories",
    },
    {
      id: 5,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
      title: "Bluetooth Calling Smartwatch starts at ₹999",
    },
    {
      id: 6,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
      title: "Bestselling headphones starts at ₹199",
    },
    {
      id: 7,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
      title: "Starting ₹99 | Air-purifying plants",
    },
    {
      id: 8,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
      title: "Up to 60% off | Car, bike parts & accessories",
    },
   

  ];

  const ChunkedProductList = [ {
    id:1,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:2,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:3,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:4,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:5,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_186x116_9._SY116_CB563558900_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:6,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_13._SY116_CB541414575_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:7,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_12._SY116_CB541414575_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
    id:8,
    cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_12._SY116_CB541414575_.jpg",
    title:"Appliances for your home | Up to 55% off",
  },
  {
  id:9,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:10,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:11,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:12,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:13,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:14,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:15,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
  title:"Appliances for your home | Up to 55% off",
},
{
  id:16,
  cover:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
  title:"Appliances for your home | Up to 55% off",
}
]
  const chunkedProducts = [];
    for (let i = 0; i < ChunkedProductList.length; i += 4) {
      chunkedProducts.push(ChunkedProductList.slice(i, i + 4));
    }


  return (
    <div className="home-product-container">
      {HomeProductList.map((item) => (
        <div className="product-card" key={item.id}>
          <p className="product-title">{item.title}</p>
          <img src={item.cover} alt={item.title} className="product-img" />
          <Link to="/products" className="see-more">
            See more
          </Link>
        </div>
      ))}

      {chunkedProducts.map((group, index) => (
        <div className="product-card" key={index}>
          <div className="chunk-grid">
            {group.map((item) => (
              <img
                key={item.id}
                src={item.cover}
                alt={item.title}
                className="chunk-img"
              />
            ))}
          </div>
          <p className="product-title">Explore latest deals</p>
          <Link to="/products" className="see-more">
            See more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeProductList;