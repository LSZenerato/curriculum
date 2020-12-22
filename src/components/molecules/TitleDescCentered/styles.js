import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    right: 0px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;

    .title_style {
        font-size: 2rem;
        margin: 10px 0;
        text-decoration: none;
    }

    .desc_style {
        font-size: 1.2rem;
        margin: 10px 0;
        text-decoration: none;
    }

    // desktop 
    @media ${breakpoints.mobile} {
        .title_style {
            font-size: 2.5rem;
        }

        .desc_style {
            font-size: 1.5rem;
        }
    }
`;