import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H1 = styled.h1`
    margin: 0;
    font-size: 2.5rem;
    color: ${props => props.theme.primaryTxt};

    @media ${breakpoints.mobile} {
        font-size: 3.5rem;
    }
`;