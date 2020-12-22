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

    .title_style {
        font-size: 3rem;
        color: ${props => props.theme.tertiaryTxt};
        text-decoration: none;
    }

    .desc_style {
        font-size: 1.5rem;
        color: ${props => props.theme.tertiaryTxt};
        text-decoration: none;
    }

    // desktop 
    @media ${breakpoints.mobile} {
        padding: 20px 50px;
        align-items: right;
        text-align: right;
    }
`;