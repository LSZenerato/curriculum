import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;

     // desktop 
    @media ${breakpoints.mobile} {
        padding: 20px 50px;
        align-items: flex-end;
    }
`;