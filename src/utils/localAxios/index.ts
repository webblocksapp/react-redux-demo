import axios from 'axios';

export const localAxios = axios.create({ baseURL: import.meta.env.VITE_API_URL });
