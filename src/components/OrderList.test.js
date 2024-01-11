// src/components/__tests__/OrderList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderList from './OrderList';
import apiService from '../services/apiService';

jest.mock('../services/apiService', () => ({
  getOrders: jest.fn()
}));

describe('OrderList', () => {
  it('displays a list of orders', async () => {
    const orders = [
      { id: '1', totalCost: 10 },
      { id: '2', totalCost: 20 }
    ];
    apiService.getOrders.mockResolvedValue(orders);

    render(<OrderList />);
    const items = await screen.findAllByText(/order id:/i);

    expect(items).toHaveLength(orders.length);
  });
});
