import { cepService } from './cep';

describe('test in cep service', () => {
    test('should return a cep object if send an exist cep', async () => {
        const response = await cepService.get('28013266');
        const cep = response.data;
        
        expect(cep).toHaveProperty("logradouro");
    });
});
