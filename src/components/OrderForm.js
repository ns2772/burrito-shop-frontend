import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function OrderForm() {
    const [burritos, setBurritos] = useState([]);
    const [selectedBurrito, setSelectedBurrito] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        // Fetch the list of burritos when the component mounts
        apiService.getBurritos().then(data => {
            setBurritos(data);
            if (data.length > 0) {
                setSelectedBurrito(data[0].name); // Default to the first burrito
            }
        });
    }, []);

    const addOrderItem = () => {
        if (selectedBurrito && quantity > 0) {
            const burritoToAdd = burritos.find(b => b.name === selectedBurrito);
            if (burritoToAdd) {
                setOrderItems([...orderItems, { burrito: burritoToAdd, quantity }]);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newOrder = { items: orderItems };
            const response = await apiService.createOrder(newOrder);
            console.log('Order created:', response);
            // Reset form or show success message
            setOrderItems([]);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            <div>
                <label htmlFor="burrito" id="burritoLabel">Burrito:</label>
                <select id="burrito" value={selectedBurrito} onChange={e => setSelectedBurrito(e.target.value)}>
                    {burritos.map((burrito, index) => (
                       <option key={index} value={burrito.name}>{burrito.name}</option>   
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" value={quantity} min="1" onChange={e => setQuantity(parseInt(e.target.value))} />
            </div>
            <button type="button" onClick={addOrderItem}>Add to Order</button>
            <ul>
                {orderItems.map((item, index) => (
                    <li key={index}>{`${item.quantity} x ${item.burrito.name}`}</li>
                ))}
            </ul>
            <button type="submit">Submit Order</button>
        </form>
    );
}

export default OrderForm;
