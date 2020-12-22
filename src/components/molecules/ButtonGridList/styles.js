import styled, { keyframes } from "styled-components"
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: fit-content;
    margin: 20px 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(80px, 80px));
    grid-row-gap: 10px;
    grid-column-gap: 10px;

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
        padding: 0;
        margin: 0;
    }
    
    .img_class {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    // desktop 
    @media ${breakpoints.mobile} {
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
        grid-row-gap: 20px;
        grid-column-gap: 50px;

        .btn_class {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
`;
