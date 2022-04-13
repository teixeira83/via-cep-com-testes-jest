import { AxiosResponse } from 'axios';
import api from './api';

export const cepService = {
    get: (cep: string): Promise<AxiosResponse> => api.get(`${cep}/json`)
}