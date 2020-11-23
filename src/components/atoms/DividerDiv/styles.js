import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Div = styled.div`
    width: 100px;
    margin: 5px 0;
    height: 10px;
    border: 2px solid ${props => props.theme.tertiary};
    background-color: ${props => props.theme.primary};

    @media ${breakpoints.mobile} {
        width: 60%;
    }
`;
