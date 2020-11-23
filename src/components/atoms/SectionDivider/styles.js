import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Div = styled.div`
    width: 100%;
    height: 100px;

    .divider_1_2 {
        width: 100%;
        height: 100px;
        background: linear-gradient(-1deg, ${props => props.theme.tertiary} 44%, ${props => props.theme.primary} 50%);
    }
    .divider_2_3 {
        width: 100%;
        height: 100px;
        background: linear-gradient(1deg, ${props => props.theme.primary} 44%, ${props => props.theme.tertiary} 50%);
    }
    .divider_3_4 {
        width: 100%;
        height: 100px;
        background: linear-gradient(-1deg, ${props => props.theme.tertiary} 44%, ${props => props.theme.secondary} 50%);
    }
`;
