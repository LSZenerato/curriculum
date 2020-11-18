import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Div = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    div {
        height: 3px;
        width: 100%;
        background-color: ${props => props.theme.primary};
    }

    @media ${breakpoints.mobile} {
        div {
            width: 60%;
        }
    }
`;
