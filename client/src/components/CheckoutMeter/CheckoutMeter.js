// src/components/logout-button.js
import React, { useState, useEffect } from "react";
import "./style.css";

const CheckoutMeter = ({ pickedItems }) => {
  console.log(pickedItems.quantity)
  // const [totalItemsQuantity, setTotalItemsQuantity] = useState('')

  const [qtyOfItems, setQtyofItems] = useState(0);

  console.log(qtyOfItems)

  useEffect(() => {
    setQtyofItems(pickedItems.quantity)
  }, [qtyOfItems])

  return (
    <span className="checkoutMeter">
      {qtyOfItems}
    </span>
  );
};

export default CheckoutMeter;