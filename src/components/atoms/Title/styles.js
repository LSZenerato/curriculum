import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H1 = styled.h1`
    width: 100%;
    margin: 0;
    font-size: 2.5rem;
    color: ${props => props.theme.secondaryTxt};
    text-align: center;

    @media ${breakpoints.mobile} {
        font-size: 3.5rem;
        text-align: left;
    }
`;