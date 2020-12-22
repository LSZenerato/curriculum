import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Div = styled.div`
    width: 100%;
    height: 100px;

    .divider_1_2 {
        width: 100%;
        height: 100px;
        background: linear-gradient(2deg, ${props => props.theme.secondary} 44%, ${props => props.theme.primary} 50%);
    }
    .divider_1_3 {
        width: 100%;
        height: 100px;
        background: linear-gradient(2deg, ${props => props.theme.tertiary} 44%, ${props => props.theme.primary} 50%);
    }
    .divider_2_1 {
        width: 100%;
        height: 100px;
        background: linear-gradient(-1deg, ${props => props.theme.tertiary} 44%, ${props => props.theme.primary} 50%);
    }
    .divider_2_3 {
        width: 100%;
        height: 100px;
        background: linear-gradient(-1deg, ${props => props.theme.tertiary} 44%, ${props => props.theme.primary} 50%);
    }
    .divider_3_1 {
        width: 100%;
        height: 100px;
        background: linear-gradient(-2deg, ${props => props.theme.primary} 44%, ${props => props.theme.tertiary} 50%);
    }
    .divider_3_2 {
        width: 100%;
        height: 100px;
        background: linear-gradient(-2deg, ${props => props.theme.tertiary} 44%, ${props => props.theme.primary} 50%);
    }
`;
