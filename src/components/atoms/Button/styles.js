import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0%, 10%, 40%, 80%, 100% {
        transform: translateY(0px);
    }
    20% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(-5px);
    }
`

export const Button = styled.button`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.secondaryTxt};

    -webkit-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
    box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);

    :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition-duration: 1s;
        background-color: ${props => props.theme.primary};
        /* animation: ${bounce} 3s infinite;
        -webkit-animation: ${bounce} 3s infinite;
        -moz-animation: ${bounce} 3s infinite;
        -o-animation: ${bounce} 3s infinite; */
    }
`;
