import axios from 'axios';
import { API_BASE_URL, REGISTER_ENDPOINT } from '../constants/urls';

export const registerRequest = (user) => {
  return axios.post(`${API_BASE_URL}${REGISTER_ENDPOINT}`, user);
};
