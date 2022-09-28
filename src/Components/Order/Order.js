import React from "react";
import { ToastContainer } from "react-toastify";
import "./Order.css";

const Order = ({ cart, deletFromCart }) => {
  return (
    <div className="order-container">
      <h2>Order List</h2>
      <ol>
        {cart.map((item, index) => (
          <div className="order-list">
            <li key={index}>{item.strMeal} </li>
            <button
              onClick={() => deletFromCart(item.idMeal)}
              className="delet-btn"
            >
              x
            </button>
            <ToastContainer></ToastContainer>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Order;
