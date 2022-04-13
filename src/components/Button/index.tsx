import React from 'react';

import { StyledButton } from './style';

interface IButton {
    title: string;
    onClick: () => void;
}

export const Button: React.FC<IButton> = ({ title, onClick }) => {
    return <StyledButton onClick={onClick}>{title}</StyledButton>;
}