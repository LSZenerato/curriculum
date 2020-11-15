import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H1 = styled.h1`
    margin: 0;
    font-size: 3rem;
    color: ${props => props.theme.quaternary};
    width: 100%;

    @media ${breakpoints.mobile} {
        font-size: 4rem
    }
`;
