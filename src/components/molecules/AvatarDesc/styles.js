import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => props.theme.primary};

    .desc-div {
        padding: 10px 5px;
        max-width: 700px;
    }

    .title-style {
        font-size: 2.5rem;
        margin-bottom: 5px;
        color: ${props => props.theme.primaryTxt};
    }
    
    .desc-style {
        font-size: 1.2rem;
        margin: 0;
        color: ${props => props.theme.primaryTxt};
    }

    // desktop 
    @media ${breakpoints.mobile} {
        flex-direction: row;

        .title-style {
            font-size: 3rem;
        }
    }
`;