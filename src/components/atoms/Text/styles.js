import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H2 = styled.h2`
    width: 100%;
    margin: 10px;
    font-size: 1rem;
    font-weight: 400;

    @media ${breakpoints.mobile} {
        font-size: 1.5rem;
    }
`;
