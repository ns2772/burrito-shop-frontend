import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import BurritoList from './components/BurritoList';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';

function App({ router }) {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home (Burrito List)</Link></li>
                    <li><Link to="/order">Create Order</Link></li>
                    <li><Link to="/orders">View Orders</Link></li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<BurritoList />} />
                    <Route path="/order" element={<OrderForm />} />
                    <Route path="/orders" element={<OrderList />} />
                    <Route path="/orders/:orderId" element={<OrderDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
