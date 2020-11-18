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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.tertiary};

    width: 100px;
    height: 100px;
    border-radius: 50%; 

    -webkit-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
    box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);

    :hover {
        cursor: pointer;

        transform: scale(1.2);
        /* animation: ${bounce} 3s infinite;
        -webkit-animation: ${bounce} 3s infinite;
        -moz-animation: ${bounce} 3s infinite;
        -o-animation: ${bounce} 3s infinite; */
        transition-duration: 2s;
    }
`;
