import React from 'react';
import {
    Container,
    TitleLabel,
    InfoLabel,
    LineContainer
} from './style';


interface IAddress {
    city: string;
    neiborhood?: string;
    street?: string;
    uf?: string;
    ddd?: string;
}

export const Address: React.FC<IAddress> = ({ 
    city,
    neiborhood,
    street,
    uf,
    ddd
}) => {
    return (
        <Container>           
            <LineContainer>
                <TitleLabel>Rua:</TitleLabel>
                <InfoLabel>{street}</InfoLabel>
            </LineContainer>

            <LineContainer>
                <TitleLabel>Bairro:</TitleLabel>
                <InfoLabel>{neiborhood}</InfoLabel>
            </LineContainer>
            
            <LineContainer>
                <TitleLabel>DDD:</TitleLabel>
                <InfoLabel>{ddd}</InfoLabel>
            </LineContainer>

            <LineContainer>
                <TitleLabel>Cidade:</TitleLabel>
                <InfoLabel>{city}</InfoLabel>
            </LineContainer>

            <LineContainer>
                <TitleLabel>Estado:</TitleLabel>
                <InfoLabel>{uf}</InfoLabel>
            </LineContainer>

        </Container>
    )
}