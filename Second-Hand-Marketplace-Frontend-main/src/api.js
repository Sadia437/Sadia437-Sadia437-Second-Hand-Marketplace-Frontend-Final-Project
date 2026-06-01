import axios from "axios";
import { BASE_URL } from "./config";


const getToken = () => localStorage.getItem("accessToken");

// Products API
export const fetchProducts = async (category) => {
  const url = category ? `${BASE_URL}/products?category=${category}` : `${BASE_URL}/products`;
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.data;
};

// Categories API
export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.data;
};

// Orders API 
export const fetchOrders = async () => {
  const response = await axios.get(`${BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.data;
};
