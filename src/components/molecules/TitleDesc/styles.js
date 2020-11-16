import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

     // desktop 
    @media ${breakpoints.mobile} {
        width: 70%;
        align-items: flex-end;
    }
`;