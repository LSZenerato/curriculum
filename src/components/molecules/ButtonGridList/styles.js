import styled, { keyframes } from "styled-components"
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    margin: 20px 20px;
    grid-row-gap: 20px;
    grid-column-gap: 50px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));

    // desktop 
    @media ${breakpoints.mobile} {
        justify-content: space-around;
        grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
    }

    .h4_style {
        font-size: 1rem;
        margin-top: 10px;
        width: 100%;
        text-align: center;
    }

    .item_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: white;
    }
    
    .img_class {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;
