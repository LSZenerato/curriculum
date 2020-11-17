import styled, { keyframes } from "styled-components"
import { breakpoints } from '../../../utils';

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
    margin: 20px 0;
    grid-row-gap: 20px;
    grid-column-gap: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 100px));

    // desktop 
    @media ${breakpoints.mobile} {
        width: 90%;
    }

    .h4_style {
        font-size: 1rem;
        margin-top: 10px;
    }

    .item_div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        color: white;
        text-align: center;
    }

    .button_class {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.primary};

        width: 100px;
        height: 100px;
        border-radius: 50%; 

        -webkit-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);
        box-shadow: 4px 13px 19px -1px rgba(0,0,0,0.75);

        .img_class {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        :hover {
            cursor: pointer;

            transform: translateY(-15px);
            animation: ${bounce} 3s infinite;
            -webkit-animation: ${bounce} 3s infinite;
            -moz-animation: ${bounce} 3s infinite;
            -o-animation: ${bounce} 3s infinite;
            transition-duration: 5s;
            background-color: ${props => props.theme.quintenary};
            color: ${props => props.theme.quintenaryTxt};
        }
    } 
`;
