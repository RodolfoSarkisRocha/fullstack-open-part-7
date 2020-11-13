import axios from 'axios';
import { BASE_URL } from '../config/mainConfig';

const getAllUsers = async () => {
  const url = `${BASE_URL}/users`;
  const response = await axios.get(url);
  return response.data;
};

const getUserById = async (id) => {
  const url = `${BASE_URL}/users/${id}`;
  const response = await axios.get(url);
  return response.data;
};

export default {
  getAllUsers,
  getUserById
};
