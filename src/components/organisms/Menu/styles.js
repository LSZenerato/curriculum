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
    min-height: 100vh;
    padding-bottom: 50px;
    color: ${props => props.theme.tertiaryText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title_menu_div {
        width: 100%;
        padding: 50px 10px;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-end;

        // desktop 
        @media ${breakpoints.mobile} {
            padding: 50px 100px;
        }
        
        .title {
            min-width: 300px;
            max-width: 400px;
            font-size: 2.2rem;
            text-align: right;

            span {
                margin: 0;
            }
        }

        .sub_title {
            margin: 0;
            font-weight: 300;
            min-width: 300px;
            max-width: 400px;
            font-size: 1.5rem;
            text-align: right;
        }
    }

    .img_tech_div {
        width: 100%;
        margin: 0;
        grid-row-gap: 30px;
        grid-column-gap: 10px;
        display: grid;
        justify-content: space-around;
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
            background-color: ${props => props.theme.secondary};
            color: ${props => props.theme.secondaryText};           

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

                background-color: ${props => props.theme.primary};
                color: ${props => props.theme.primaryText};
            }

            .img_tech {
                width: 100%;
            }
        }
    }  
`;