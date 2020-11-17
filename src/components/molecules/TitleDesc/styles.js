import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;

    .div_style {
        height: 3px;
        width: 40%;
        background-color: ${props => props.theme.quaternary};
        margin: 10px 0;
        right: 0;
        position: relative;
    }

     // desktop 
    @media ${breakpoints.mobile} {
        padding: 20px 50px;
        align-items: flex-end;
    }
`;