import styled from "styled-components";

export const Button = styled.button`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.secondaryTxt};
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: .85;
    font-size: 1.4rem;
    
    :hover {
        cursor: pointer;
        opacity: 1;
    }
`;
