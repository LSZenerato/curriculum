import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Div = styled.div`
    width: 200px;
    margin: 10px 0;
    height: 3px;
    background-color: ${props => props.theme.primary};

    @media ${breakpoints.mobile} {
        width: 60%;
    }
`;
