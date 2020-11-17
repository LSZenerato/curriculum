import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H2 = styled.h2`
    position: relative;
    color: white;
    margin: 0;
    font-size: 1rem;

    @media ${breakpoints.mobile} {
        font-size: 1.5rem
    }
`;
