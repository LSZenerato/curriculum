import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H2 = styled.h2`
    position: relative;
    color: ${props => props.theme.secondaryTxt};
    margin: 0;
    font-size: 1rem;
    font-weight: 400;

    @media ${breakpoints.mobile} {
        font-size: 1.5rem
    }
`;
