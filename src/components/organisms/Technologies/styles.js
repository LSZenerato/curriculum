import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 100px 0px;
    height: 100vh;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img_tech_div {
        width: 100%;
        margin: 0;
        padding: 10px 5px;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        display: grid;
        justify-content: space-around;
        grid-template-columns: repeat(auto-fit, minmax(150px, 150px));

        .img_tech_round_div {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;

            .img_tech {
                width: 100%;
            }
        }
    }  
`;