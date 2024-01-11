import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import apiService from './apiService';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

describe('apiService', () => {
  it('getBurritos makes a GET request to /burrito', async () => {
    const burritosData = [{ name: 'Chicken', size: 'Regular', price: 8 }];
    mock.onGet('http://localhost:5000/api/burrito').reply(200, burritosData);

    const burritos = await apiService.getBurritos();
    expect(burritos).toEqual(burritosData);
  });

  it('getOrders makes a GET request to /orders', async () => {
    const ordersData = [{ id: 1, totalCost: 16 }];
    mock.onGet('http://localhost:5000/api/orders').reply(200, ordersData);

    const orders = await apiService.getOrders();
    expect(orders).toEqual(ordersData);
  });

  it('createOrder makes a POST request to /orders', async () => {
    const newOrder = { items: [{ name: 'Chicken', size: 'Regular', quantity: 2 }] };
    const responseData = { id: 1, ...newOrder };
    mock.onPost('http://localhost:5000/api/orders').reply(201, responseData);

    const result = await apiService.createOrder(newOrder);
    expect(result).toEqual(responseData);
  });

  it('getOrderById makes a GET request to /orders/:id', async () => {
    const orderData = { id: 1, totalCost: 16 };
    mock.onGet('http://localhost:5000/api/orders/1').reply(200, orderData);

    const order = await apiService.getOrderById(1);
    expect(order).toEqual(orderData);
  });
});
