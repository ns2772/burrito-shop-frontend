import React, { useState } from 'react';
import apiService from '../services/apiService';

function OrderForm() {
    const [order, setOrder] = useState({ items: [], totalCost: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await apiService.createOrder(order);
        // Handle post order creation logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            {/* Form fields to add items to order */}
            <button type="submit">Submit Order</button>
        </form>
    );
}

export default OrderForm;
