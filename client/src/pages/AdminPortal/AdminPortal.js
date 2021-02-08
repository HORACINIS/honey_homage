import React from "react";
import "./style.css";

const AdminPortal = () => {

  const showShopOrders = () => {
    fetch('/orders/all', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(helloWorld => console.log(helloWorld));
  }

  return (
    <div>
        <h1>Admin Portal</h1>
        <button onClick={showShopOrders}>Show Orders</button>
    </div>
  );
};

export default AdminPortal;