import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H1 = styled.h1`
    width: 100%;
    margin: 0;
    font-size: 2.5rem;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: ${props => props.theme.secondary};

    @media ${breakpoints.mobile} {
        font-size: 3.5rem;
    }
`;