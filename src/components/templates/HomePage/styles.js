import styled, { keyframes } from "styled-components"

const animate = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 10%;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`

export const Container = styled.div`
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

    .area{
        background: ${props => props.theme.primary};
        width: 100%;
        min-height: 100vh;
        position: fixed;
        top: 0;
        z-index: -5;
    }

    .circles{
        top: 0;
        left: 0;
        overflow: hidden;
    }

    .circles li{
        position: absolute;
        display: block;
        list-style: none;
        width: 1px;
        height: 15px;
        background-color: ${props => props.theme.quaternary};
        animation: ${animate} 25s linear infinite;
        bottom: -150px;
    }

    .circles li:nth-child(1){
        left: 25%;
        width: 1px;
        height: 80px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 0s;
    }


    .circles li:nth-child(2){
        left: 10%;
        width: 1px;
        height: 20px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3){
        left: 70%;
        width: 1px;
        height: 20px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 4s;
    }

    .circles li:nth-child(4){
        left: 40%;
        width: 1px;
        height: 60px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5){
        left: 65%;
        width: 1px;
        height: 20px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 0s;
    }

    .circles li:nth-child(6){
        left: 75%;
        width: 1px;
        height: 80px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 3s;
    }

    .circles li:nth-child(7){
        left: 35%;
        width: 1px;
        height: 10px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 7s;
    }

    .circles li:nth-child(8){
        left: 50%;
        width: 1px;
        height: 45px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9){
        left: 20%;
        width: 1px;
        height: 30px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10){
        left: 85%;
        width: 1px;
        height: 20px;
        border-bottom-left-radius:50%;
        border-bottom-right-radius:50%;
        animation-delay: 0s;
        animation-duration: 11s;
    }
`;
