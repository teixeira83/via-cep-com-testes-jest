import api from './api';

export const cepService = {
    get: (cep: string) => api.get(`${cep}/json`)
}