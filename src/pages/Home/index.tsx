import React, { useState } from 'react';
import { Button, Header, Address } from '../../components';

import { cepService } from '../../services';

import { Body, GetCepContainer, InputCep } from './style';

export const Home: React.FC = () => {
    const [cep, setCep] = useState('');

    const [street, setStreet] = useState('');
    const [neiborhood, setNeiborhood] = useState('');
    const [ddd, setDdd] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const handleGetCep = async () => {
        const response = await cepService.get(cep);
        
        setStreet(response.data.logradouro);
        setNeiborhood(response.data.bairro);
        setDdd(response.data.ddd);
        setCity(response.data.localidade);
        setUf(response.data.uf);
    }

    return (
        <>
            <Header />
            
            <Body>
                <h3>Digite seu cep:</h3>

                <GetCepContainer>
                    <InputCep value={cep} onChange={(e) => setCep(e.target.value)} />

                    <Button title='Buscar Cep' onClick={handleGetCep}/>
                </GetCepContainer>

                <Address
                    street={street}
                    neiborhood={neiborhood}
                    ddd={ddd}
                    city={city}
                    uf={uf}
                />
            </Body>
        </>
    )
}