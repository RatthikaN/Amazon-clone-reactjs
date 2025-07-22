import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import { Layout } from "../Layout/Layout";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import "./Order.css"; // Import the CSS

const Order = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userid = userData?.user?.uid;
  const { order } = useProductContext();

  if (!userid) {
    return (
      <Layout>
        <div className="no-user-order">Please sign in to view your orders.</div>
      </Layout>
    );
  }

  const userOrders = order.filter((obj) => obj.userid === userid);

  return (
    <Layout>
      <div className="order-wrapper">
        <h1 className="order-title">Your Orders</h1>
        {userOrders.length === 0 ? (
          <p className="no-orders-text">No orders found.</p>
        ) : (
          userOrders.map((ord) => {
            const orderTotal = ord.cartItems?.reduce(
              (acc, item) => acc + item.price * item.amount,
              0
            );
            return (
              <div key={ord.id} className="order-card">
                <div className="order-header">
                  <div>
                    <p className="order-date">Order Date: {ord.date}</p>
                    <p className="order-id">Payment ID: {ord.paymentId}</p>
                  </div>
                  <div className="delivery-info">
                    <p>
                      Delivered to: {ord.addressInfo?.name},{" "}
                      {ord.addressInfo?.address}
                    </p>
                    <p>Phone: {ord.addressInfo?.phoneNumber}</p>
                  </div>
                </div>
                <div className="order-body">
                  <div className="order-items">
                    {ord.cartItems?.length > 0 ? (
                      ord.cartItems.map((item, idx) => (
                        <div key={idx} className="order-item">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="order-item-img"
                          />
                          <div className="item-details">
                            <h3>{item.name}</h3>
                            <p className="item-desc">{item.description}</p>
                            <p>Quantity: {item.amount}</p>
                            <p>
                              Price: <FormatPrice price={item.price} />
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No items in this order.</p>
                    )}
                  </div>
                  <div className="order-total">
                    <p>
                      Order Total: <FormatPrice price={orderTotal || 0} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Order;
