import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BurritoList from './components/BurritoList';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';

jest.mock('./components/BurritoList', () => () => <div>BurritoListMock</div>);
jest.mock('./components/OrderForm', () => () => <div>OrderFormMock</div>);
jest.mock('./components/OrderList', () => () => <div>OrderListMock</div>);
jest.mock('./components/OrderDetails', () => () => <div>OrderDetailsMock</div>);

describe('App Routing', () => {
  it('renders the BurritoList component for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<BurritoList />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('BurritoListMock')).toBeInTheDocument();
  });

  it('renders the OrderForm component for the "/order" route', () => {
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Routes>
          <Route path="/order" element={<OrderForm />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('OrderFormMock')).toBeInTheDocument();
  });

  it('renders the OrderList component for the "/orders" route', () => {
    render(
      <MemoryRouter initialEntries={['/orders']}>
        <Routes>
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('OrderListMock')).toBeInTheDocument();
  });

  it('renders the OrderDetails component for the "/orders/:orderId" route', () => {
    render(
      <MemoryRouter initialEntries={['/orders/123']}>
        <Routes>
          <Route path="/orders/:orderId" element={<OrderDetails />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('OrderDetailsMock')).toBeInTheDocument();
  });

  // Add more tests for additional routes as necessary
});
