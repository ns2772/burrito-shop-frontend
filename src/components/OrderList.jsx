import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        apiService.getOrders().then(setOrders);
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{`Order ID: ${order.id}, Total Cost: $${order.totalCost}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default OrderList;
