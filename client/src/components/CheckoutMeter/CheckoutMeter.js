// src/components/logout-button.js
import React, { useState, useEffect } from "react";
import "./style.css";

const CheckoutMeter = ({ pickedItems }) => {

  console.log(pickedItems);

  let counter = 0;
  const [itemQty, setItemQty] = useState(0);
  console.log(itemQty)

  useEffect(() => {
    pickedItems.map(item => {
      const { quantity } = item;
      if (+quantity > counter) {
        counter += +item.quantity
      } else if (+quantity < counter) {
        counter -= +quantity
      }
      setItemQty(counter);
    })
  }, [pickedItems]);


  // Saving items in localStorage ***
  let pickedItems_serialized = JSON.stringify(pickedItems);
  localStorage.setItem('product', pickedItems_serialized);
  console.log(pickedItems_serialized);
  console.log(localStorage)

  let pickedItems_deserialized = JSON.parse(localStorage.getItem('product')) || ''
  console.log(pickedItems_deserialized);

  let storage = pickedItems_deserialized.map(item => {
    return item
  })
  console.log(storage);
  // *** to delete if it does not work ***



  return (
    <span className="checkoutMeter">
      {itemQty}
    </span>
  );
};

export default CheckoutMeter;