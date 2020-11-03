import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    background-color: ${props => props.theme.primary};

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

    .slide-enter {
        opacity: 0;
        transition: opacity .5s ease;
    }
      
    .slide-enter-active {
        opacity: 1;
        transition: opacity .5s ease;
    }
      
    .slide-exit {
        opacity: 1;
        transition: opacity .5s ease;
    }
      
    .slide-exit-active {
        opacity: 0;
        transition: opacity .5s ease;
    }
`;
