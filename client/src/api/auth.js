import axios from 'axios';
const { URL_API } = process.env;

export const registerRequest = (user) => {
  axios.post(`${URL_API}/register`, user);
};
