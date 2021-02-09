import React, { useState } from "react";
import "./style.css";
import honeyType01 from '../../images/ProductImages/honeyType01.jpg';
import honeyType02 from '../../images/ProductImages/honeyType02.jpg';
import honeyType03 from '../../images/ProductImages/honeyType03.jpg';
import honeyType04 from '../../images/ProductImages/honeyType04.jpg';
import honeyType05 from '../../images/ProductImages/honeyType05.jpg';
import honeyType06 from '../../images/ProductImages/honeyType06.jpg';
import honeyType07 from '../../images/ProductImages/honeyType07.jpg';
import honeyType08 from '../../images/ProductImages/honeyType08.jpg';
import honeyType09 from '../../images/ProductImages/honeyType09.jpg';

const AdminPortal = () => {

  const [orders, setOrders] = useState('')

  async function shopOrders() {
    const response = await fetch('/orders/all');
    const data = await response.json();
    setOrders(data);
  }

  return (
    <div className="orderOutputContainer">
      <h1>HoneyHUD</h1>
      <div>
        {orders && orders.map((order, index) => {
          const { _id, comments, shippingAddress, contactNumber, status, items, total } = order;
          let randOrderNum = Math.floor(Math.random() * 1000000) + 1;
          return (
            <div className="orderOutputElementContainer">
              <div key={index}>
                <div className="orderNumberAndUserIDContainer">
                  <p className="orderNumberAndUserIDContainerOrderNumberElement">Order Number: {++index}-{randOrderNum} </p>
                  <p className="orderNumberAndUserIDContainerUserIDElement">UserID: {_id}</p>
                </div>

                <div className="orderItemsDisplaySectionParent">
                  {items.map((item, index) => {
                    const { title, details, quantity, price, image } = item;
                    // Should we add images? if not (we can remove image, in line 31 and 35)

                    let orderImage = "";

                    if (image === "honeyType01") {
                        orderImage = honeyType01;
                    } else if (image === "honeyType02") {
                        orderImage = honeyType02;
                    } else if (image === "honeyType03") {
                        orderImage = honeyType03;
                    } else if (image === "honeyType04") {
                        orderImage = honeyType04;
                    } else if (image === "honeyType05") {
                        orderImage = honeyType05;
                    } else if (image === "honeyType06") {
                        orderImage = honeyType06;
                    } else if (image === "honeyType07") {
                        orderImage = honeyType07;
                    } else if (image === "honeyType08") {
                        orderImage = honeyType08;
                    } else if (image === "honeyType09") {
                        orderImage = honeyType09;
                    } 

                    return (
                      <div>
                        <div className="orderItemsDisplaySection">
                          <div className="orderItemsDisplayContainer">
                            <img src={orderImage} className="orderItemsDisplayImage" />
                            <p className="orderItemsDisplayInfo" >x{quantity} {title} | ${price * quantity}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p>Contact Number: {contactNumber}</p>
                <p>Shipping Address: {shippingAddress}</p>
                <p>Status: {status}</p>
                <p>Total amount paid: ${total.toFixed(2)}</p>
                <p>Comments: {comments}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="orderDisplayButton" onClick={shopOrders}>Show Orders</button>
    </div>
  );
};

export default AdminPortal;