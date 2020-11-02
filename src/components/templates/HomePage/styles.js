import styled, { keyframes } from "styled-components"

const slideDown = keyframes`
    from {
        /* top: -100vh; */
        opacity: 0;
    } 
    to {
        /* top: 0; */
        opacity: 1;
    }
`
const slideUp = keyframes`
    from {
        /* top: 0; */
        opacity: 1;
    } 
    to {
        /* top: -100vh; */
        opacity: 0;
    }
`

export const Container = styled.div`
    background-color: green;

    .controll-btn-div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        bottom: 0;
        padding: 5px;
        position: fixed;
        
        .round-btn {
            height: 50px;
            margin: 0 20px;
        }
    }
    
    .slideDown {
        position: relative;
        animation: ${slideDown} 0.7s;
    }

    .slideUp {
        position: relative;
        animation: ${slideUp} 0.7s;
    }
`;
