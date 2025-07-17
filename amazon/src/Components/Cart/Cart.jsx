import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Model from "../Model/Model";
import { fireDB } from "../../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import "./Cart.css";

export const Cart = () => {
  const { cart, totalPrice, shippingFees, clearCart } = useCartContext();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (!name || !address || !pincode || !phoneNumber) {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
      });
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const options = {
      key: "rzp_test_RuEELZW2EUDlp7",
      key_secret: "OAVPg05b6R6DM7POKwp63hMt",
      amount: parseInt(totalPrice),
      currency: "INR",
      name: "Amazon Payment",
      description: "for testing purpose",
      order_receipt: `order_rcptid_${name}`,
      handler: async (response) => {
        try {
          toast.success("Payment Successful");
          const paymentId = response.razorpay_payment_id;
          const user = JSON.parse(localStorage.getItem("user"));

          const orderInfo = {
            cartItems: cart,
            addressInfo,
            date: new Date().toLocaleString(),
            email: user?.user?.email || "N/A",
            userid: user?.user?.uid || "N/A",
            paymentId,
          };

          const orderRef = collection(fireDB, "order");
          await addDoc(orderRef, orderInfo);
        } catch (error) {
          console.error("Order saving failed:", error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Layout>
      <div className="cart-container">
        <h1 className="cart-heading">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} {...item} />)
        )}

        <div className="cart-buttons">
          <Link to="/products">
            <button className="btn-continue">Continue Shopping</button>
          </Link>
          <button onClick={clearCart} className="btn-clear">
            Clear Cart
          </button>
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span><FormatPrice price={totalPrice} /></span>
          </div>
          <div className="summary-row">
            <span>Shipping Fee:</span>
            <span><FormatPrice price={shippingFees} /></span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Order Total:</span>
            <span><FormatPrice price={totalPrice + shippingFees} /></span>
          </div>

          <Model
            name={name}
            address={address}
            pincode={pincode}
            phoneNumber={phoneNumber}
            setName={setName}
            setAddress={setAddress}
            setPincode={setPincode}
            setPhoneNumber={setPhoneNumber}
            buyNow={buyNow}
          />
        </div>
      </div>
    </Layout>
  );
};
