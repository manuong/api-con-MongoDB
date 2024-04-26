import axios from './axios.config'; // axios configurado por nosotros
import { API_BASE_URL, LOGIN_ENDPOINT, REGISTER_ENDPOINT, VERIFY_ENDPOINT } from '../constants/urls';

export const registerRequest = (user) => {
  return axios.post(`${API_BASE_URL}${REGISTER_ENDPOINT}`, user);
};

export const loginRequest = (user) => {
  return axios.post(`${API_BASE_URL}${LOGIN_ENDPOINT}`, user);
};

export const verifyTokenRequest = () => {
  return axios.get(`${API_BASE_URL}${VERIFY_ENDPOINT}`);
};
