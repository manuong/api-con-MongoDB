import { NOTE_ENDPOINT } from '../constants/urls';
import axios from './axios.config';

// ya no est necesario agregarle API_BASE_URL porque ya esta definida en axios.config

export const getNotesRequest = () => {
  return axios.get(`${NOTE_ENDPOINT}`);
};

export const getNoteRequest = (noteId) => {
  return axios.get(`${NOTE_ENDPOINT}/${noteId}`);
};

export const createNoteRequest = (note) => {
  return axios.post(`${NOTE_ENDPOINT}`, note);
};

export const updateNoteRequest = (noteId, note) => {
  return axios.put(`${NOTE_ENDPOINT}/${noteId}`, note);
};

export const deleteNoteRequest = (noteId) => {
  return axios.delete(`${NOTE_ENDPOINT}/${noteId}`);
};
