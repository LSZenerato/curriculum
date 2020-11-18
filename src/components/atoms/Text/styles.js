import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H2 = styled.h2`
    width: 100%;
    position: relative;
    color: ${props => props.theme.secondaryTxt};
    margin: 10px;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;

    @media ${breakpoints.mobile} {
        font-size: 1.5rem;
        text-align: left;
    }
`;
