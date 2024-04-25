import axios from 'axios';
import { API_BASE_URL, LOGIN_ENDPOINT, REGISTER_ENDPOINT } from '../constants/urls';

export const registerRequest = (user) => {
  return axios.post(`${API_BASE_URL}${REGISTER_ENDPOINT}`, user);
};

export const loginRequest = (user) => {
  return axios.post(`${API_BASE_URL}${LOGIN_ENDPOINT}`, user);
};
