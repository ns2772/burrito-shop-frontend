// src/components/__tests__/OrderDetails.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import OrderDetails from './OrderDetails';
import apiService from '../services/apiService';

jest.mock('../services/apiService', () => ({
  getOrderById: jest.fn()
}));

describe('OrderDetails', () => {
  it('displays order details', async () => {
    const order = {
      id: '1',
      totalCost: 10,
      items: [{ burrito: { name: 'Chicken Burrito', size: 'regular', price: 3 }, quantity: 2 }]
    };
    apiService.getOrderById.mockResolvedValue(order);

    render(
      <MemoryRouter initialEntries={['/orders/1']}>
        <Routes>
          <Route path="/orders/:orderId" element={<OrderDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(/order id:/i)).toBeInTheDocument();
    expect(await screen.findByText(/total cost:/i)).toBeInTheDocument();
  });
});
