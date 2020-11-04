import styled, { keyframes } from "styled-components"

const bounce = keyframes`
    0%, 10%, 40%, 80%, 100% {
        transform: translateY(0px);
    }
    20% {
        transform: translateY(-30px);
    }
    50% {
        transform: translateY(-15px);
    }
`

export const Container = styled.div`
    width: 100%;
    margin: 0;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(200px, 200px));

    .img_menu_round_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 200px;
        height: 200px;
        padding: 40px;
        border-radius: 50%;
        background-color: ${props => props.theme.quaternary};
        color: ${props => props.theme.quaternaryTxt};           

        -webkit-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
        box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);

        :hover {
            cursor: pointer;

            transform: translateY(-15px);
            animation: ${bounce} 3s infinite;
            -webkit-animation: ${bounce} 3s infinite;
            -moz-animation: ${bounce} 3s infinite;
            -o-animation: ${bounce} 3s infinite;

            background-color: ${props => props.theme.quintenary};
            color: ${props => props.theme.quintenaryTxt};
        }

        .img_tech {
            width: 100%;
        }
    } 
`;
