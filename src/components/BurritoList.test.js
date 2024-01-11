// src/components/__tests__/BurritoList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import BurritoList from './BurritoList';
import apiService from '../services/apiService';

// Mocking apiService
jest.mock('../services/apiService', () => ({
  getBurritos: jest.fn()
}));

describe('BurritoList', () => {
  it('displays burritos after fetching', async () => {
    const burritos = [
      { name: 'Chicken Burrito', size: 'regular', price: 3 },
      { name: 'Beef Burrito', size: 'large', price: 5 }
    ];
    apiService.getBurritos.mockResolvedValue(burritos);

    render(<BurritoList />);
    const items = await screen.findAllByText(/burrito/i);

    // Check for the presence of each burrito in the list
    expect(screen.getByText('Chicken Burrito - regular - $3')).toBeInTheDocument();
    expect(screen.getByText('Beef Burrito - large - $5')).toBeInTheDocument();
  });
});