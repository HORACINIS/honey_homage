import React, { useState, useEffect } from 'react';

const Orders = () => {

    const callOderURL = '/orders/all' 

    async function fetchOrdersApi() {
        const response = await fetch(callOderURL);
        const data = await response.json();
        console.log(data);
      }

	return (
        <section>
            <h1>Orders</h1>
            <button onClick={fetchOrdersApi}>Show Orders</button>
        </section>
	)
}

export default Orders;