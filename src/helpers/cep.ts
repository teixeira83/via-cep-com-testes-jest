const hasEightNumbers = (cep: string) => {
    if (String(cep).length !== 8)  {
        return false
    }

    return true;
}

export const cepHelper = {
    isValid: (cep: string)  =>  {
        if (!hasEightNumbers(cep)) {
            return false;
        }

        if (isNaN(Number(cep))) {
            return false;
        }

        return true;
    }
}