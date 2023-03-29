import { ENV } from '@constants';
import axios from 'axios';

export const localAxios = axios.create({ baseURL: ENV.baseURL });
