import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    padding: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
