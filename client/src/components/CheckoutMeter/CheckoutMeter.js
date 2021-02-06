// src/components/logout-button.js
import React, { useState, useEffect } from "react";
import "./style.css";

const CheckoutMeter = ({ pickedItems }) => {

  // const {title, quantity} = pickedItems;

  // console.log(title)
  // console.log(quantity);

  // let xx = [];
  // xx.concat(pickedItems)

  console.log(pickedItems)


  return (
    <span className="checkoutMeter">
      {pickedItems.quantity}
    </span>
  );
};

export default CheckoutMeter;