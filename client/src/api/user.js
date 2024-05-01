import { USER_ENDPOINT } from '../constants/urls';
import axios from './axios.config';

export const editProfileRequest = (values) => {
  return axios.post(`${USER_ENDPOINT}`, values);
};
