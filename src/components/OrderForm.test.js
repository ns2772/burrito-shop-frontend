import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OrderForm from './OrderForm';
import apiService from '../services/apiService';

jest.mock('../services/apiService', () => ({
  getBurritos: jest.fn(),
  createOrder: jest.fn(),
}));

describe('OrderForm', () => {
  beforeEach(() => {
    const burritos = [
      { name: 'Chicken Burrito', size: 'regular', price: 3 },
    ];
    apiService.getBurritos.mockResolvedValue(burritos);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('allows adding items to the order', async () => {
    render(<OrderForm />);
    
    // Use findByText to wait for the burritos to be loaded
    const burritoOption = await screen.findByText('Chicken Burrito');
    expect(burritoOption).toBeInTheDocument();
    
    // Simulate user selecting a burrito
    fireEvent.change(screen.getByLabelText('Burrito:'), { target: { value: 'Chicken Burrito' } });

    // Simulate user entering quantity
    fireEvent.change(screen.getByLabelText('Quantity:'), { target: { value: '2' } });

    // Simulate user clicking 'Add to Order'
    fireEvent.click(screen.getByText('Add to Order'));

    // Check if item has been added
    const orderItem = await screen.findByText('2 x Chicken Burrito');
    expect(orderItem).toBeInTheDocument();
  });

  // ... additional tests ...
});
