import { cepHelper } from './';


describe('test isValid in cepHelper', () => {
    test('should return false when send a cep with lenght != 8', () => {
        const isValid = cepHelper.isValid('28013266984654');

        expect(isValid).toBeFalsy();
    })

    test('should return true when send a cep with lenght == 8', () => {
        const isValid = cepHelper.isValid('28013266');

        expect(isValid).toBeTruthy();
    })

    // test('should return false when send letters', () => {
    //     const isValid = cepHelper.isValid('ABCDEFGH');

    //     expect(isValid).toBeTruthy();
    //     expect(isValid).toBeFalsy();
    // })
});