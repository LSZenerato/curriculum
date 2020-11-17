import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const H1 = styled.h1`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;
    margin: 0;
    font-size: 3rem;
    color: ${props => props.theme.primaryTxt};

    @media ${breakpoints.mobile} {
        font-size: 4rem;
    }
`;