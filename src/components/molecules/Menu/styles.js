import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => props.theme.secondary};
    position: fixed;
    top: 0;

    a {
        color: ${props => props.theme.secondaryTxt};
        display: block;
        padding: 12px;
        text-decoration: none;
    }

    a:hover {
        color: ${props => props.theme.primaryTxt};
        background-color: ${props => props.theme.primary};
    }

    a.active {
        background-color: ${props => props.theme.tertiary};
        color: ${props => props.theme.tertiaryTxt};
    }

    // desktop 
    @media ${breakpoints.mobile} {
        flex-direction: row;

        .title-style {
            font-size: 3rem;
        }
    }
`;