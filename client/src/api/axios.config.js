import axios from 'axios';
import { API_BASE_URL } from '../constants/urls';

// una manera de configurar axios para tener la cookies guardadas y no perderlas aun que se reinicie la pagina
// o incluso se cierre el navegador, tambien el back tiene una config en las cors
// una mejor manera de guardar el token es en localStorage
const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default instance;
