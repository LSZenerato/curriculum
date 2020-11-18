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
    margin: 20px 20px;
    grid-row-gap: 20px;
    grid-column-gap: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));

    // desktop 
    @media ${breakpoints.mobile} {
        justify-content: right;
    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
    }

    .h4_style {
        font-size: 1rem;
        margin-top: 10px;
    }

    .item_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: white;
        text-align: center;
    }
    
    .img_class {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;
