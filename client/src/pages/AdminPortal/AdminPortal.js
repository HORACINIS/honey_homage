import React, { useState } from "react";
import "./style.css";

const AdminPortal = () => {

  const [orders, setOrders] = useState('')

  async function shopOrders() {
    const response = await fetch('/orders/all');
    const data = await response.json();
    setOrders(data);
  }

  return (
    <div>
      <h1>Admin Portal</h1>

      <ul>
        {orders && orders.map((order, index) => {
          const { _id, comments, shippingAddress, contactNumber, status, items, total } = order;
          let randOrderNum = Math.floor(Math.random() * 1000000) + 1;
          return (
            <li key={index}>
              <p><b>UserID:</b> {_id}</p>
              <p><b>Order Number:</b> {++index}-{randOrderNum} <b>Status:</b> {status}</p>

              <p><b>Ph:</b> {contactNumber}</p>
              <p><b>Shipping Address:</b> {shippingAddress}</p>
              <ul>
                {items.map((item, index) => {
                  const { title, details, quantity, price, image } = item;
                  // Should we add images? if not (we can remove image, in line 31 and 35)
                  return (
                    <li>
                      {/* <img src={image} /> */}
                      <p>{++index}.- <b>{title}</b> - {details}..... x{quantity} ${price}</p>
                    </li>
                  );
                })}
              </ul>
              <p><b>Total amount paid: ${total.toFixed(2)}</b></p>
              <p><b>Comments:</b> {comments}</p>
            </li>
          );
        })}
      </ul>

      <button onClick={shopOrders}>Show Orders</button>
    </div>
  );
};

export default AdminPortal;