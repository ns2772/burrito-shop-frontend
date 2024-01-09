import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getBurritos = async () => {
    const response = await axios.get(`${API_URL}/burrito`);
    return response.data;
};

const getOrders = async () => {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
};

const createOrder = async (order) => {
    const response = await axios.post(`${API_URL}/orders`, order);
    return response.data;
};

const getOrderById = async (id) => {
    const response = await axios.get(`${API_URL}/orders/${id}`);
    return response.data;
};

// Assign the object to a variable before exporting
const apiService = {
    getBurritos,
    getOrders,
    createOrder,
    getOrderById,
};

export default apiService;
