import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';

function OrderDetails() {
    const [order, setOrder] = useState(null);
    const { orderId } = useParams();

    useEffect(() => {
        apiService.getOrderById(orderId).then(setOrder);
    }, [orderId]);

    return (
        <div>
            <h2>Order Details</h2>
            {order ? (
                <div>
                    <p>Order ID: {order.id}</p>
                    <p>Total Cost: ${order.totalCost}</p>
                    {/* List order items */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default OrderDetails;
