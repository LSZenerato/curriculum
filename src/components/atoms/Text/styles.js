import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H3 = styled.h3`
    position: relative;
    color: white;
    margin: 0;
    width: 100%;

    @media ${breakpoints.mobile} {
        h1 {
        font-size: 4rem
        }
    }
`;
